<template>
  <div>
    <div class="buyerInfo-mod">
      <el-form
        :model="accountInfo"
        ref="accountInfo"
        :rules="buyerInfoRules"
        :inline="true"
        label-width="110px"
        label-position="left"
        size="small"
      >
        <el-form-item label="买家手机号：" prop="buyerMobile">
          <el-input v-model="accountInfo.buyerMobile" placeholder="请输入买家手机号"></el-input>
        </el-form-item>
        <el-form-item label="买家用户名：" prop="buyerName">
          <el-input v-model="accountInfo.buyerName" placeholder="请输入买家用户名"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div class="product-mod">
      <el-table :data="productInfo">
        <el-table-column label="品名" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.productName" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="配置" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.configuration" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="品牌" width="120">
          <template slot-scope="scope">
            <el-input v-model="scope.row.brand" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="采购数量" width="120">
          <template slot-scope="scope">
            <el-input v-model="scope.row.amount" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="单价" width="120">
          <template slot-scope="scope">
            <el-input v-model="scope.row.price" placeholder="请输入"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="小计" width="110">
          <template slot-scope="scope">
            <span>{{getSubTotal(scope.row)}}</span>
          </template>
        </el-table-column>
        <el-table-column width="80">
          <template slot-scope="slot">
            <el-button type="text" @click="deleteProduct(slot.$index)" v-if="isDeleteShow">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="product-add">
        <el-button type="text" @click="addProduct">添加一条</el-button>
      </div>
    </div>
    <div class="delivery-mod">
      <el-form
        :model="delivery"
        ref="delivery"
        label-width="120px"
        label-position="left"
        size="small"
      >
        <el-form-item label="收货地址：">
          <el-input v-model="delivery.receiveAddress" placeholder="请输入详细地址"></el-input>
        </el-form-item>
        <el-form-item label="收货截止时间：">
          <el-date-picker v-model="delivery.receiveTime" placeholder="请选择时间"></el-date-picker>
        </el-form-item>
      </el-form>
    </div>
    <div class="create-order-footer">
      <h5>订单总金额：12元</h5>
      <el-button type="primary">提交订单</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      accountInfo: {
        buyerMobile: "",
        buyerName: ""
      },
      productInfo: [
        {
          productName: "",
          configuration: "",
          brand: "",
          amount: "",
          price: 0
        }
      ],
      delivery: {
        receiveAddress: "",
        receiveTime: ""
      },
      buyerInfoRules: {
        buyerMobile: [
          { required: true, message: "不能为空", trigger: ["blur", "change"] },
          {
            min: 11,
            max: 11,
            message: "请输入正确的手机号",
            trigger: ["blur"]
          }
        ],
        buyerName: [
          { required: true, message: "不能为空", trigger: ["blur", "change"] }
        ]
      }
    };
  },
  methods: {
    addProduct: function() {
      let product = {
        productName: "",
        configuration: "",
        brand: "",
        amount: "",
        price: ""
      };
      if (this.productInfo.length >= 5) {
        this.$message({
          message: "最多允许5条商品",
          type: "error",
          duration: 2000,
          offset: 150
        });
        return false;
      }
      this.productInfo.push(product);
    },
    deleteProduct: function(index) {
      if (this.productInfo.length <= 1) {
        return false;
      }

      this.productInfo.splice(index, 1);
    },
    getSubTotal: function(row) {
      let subTotalMoney = 0;
      if (row.price !== "") {
        subTotalMoney = row.amount * row.price;
      }

      return subTotalMoney;
    },
    getTotal: function() {
      let totalMoney = 0;
      for (const product in this.productInfo) {
        if (product.price === "") {
          continue;
        }

        totalMoney += product.price;
      }

      return totalMoney;
    }
  },
  computed: {
    isDeleteShow: function() {
      return this.productInfo.length > 1;
    }
  }
};
</script>

<style scoped>
.el-table {
  margin-top: 30px;
  width: fit-content;
}

.buyerInfo-mod,
.delivery-mod {
  width: 850px;
  margin-left: 20px;
  padding: 30px;
  padding-bottom: 10px;
  box-sizing: border-box;
  background-color: #fff;
}

.product-mod {
  margin-left: 20px;
}

.product-add {
  background-color: #fff;
  padding-left: 20px;
  margin-right: 46px;
  margin-bottom: 30px;
}

.create-order-footer {
  background-color: #fff;
  margin: 30px 46px 30px 20px;
  padding: 10px 20px;
  text-align: center;
}

.create-order-footer h5 {
  display: -webkit-inline-box;
  margin-right: 40px;
}

.el-table .el-button {
  display: none;
}

.el-table tr:hover .el-button {
  display: inline-block;
}

.el-form-item {
  margin-right: 50px;
}
</style>


