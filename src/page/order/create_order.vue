<template>
  <div>
    <el-form
      :model="accountInfo"
      ref="accountInfo"
      :rules="rules"
      :inline="true"
      label-width="100px"
      label-position="right"
      size="small"
    >
      <el-form-item label="买家手机号">
        <el-input v-model="accountInfo.buyerMobile" placeholder="请输入买家手机号"></el-input>
      </el-form-item>
      <el-form-item label="买家用户名">
        <el-input v-model="accountInfo.buyerName" placeholder="请输入买家用户名"></el-input>
      </el-form-item>
    </el-form>
    <div class="orderTable">
      <el-table :data="productInfo">
        <el-table-column label="品名" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.productName" placeholder="请输入品名"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="配置" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.configuration" placeholder="请输入配置"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="品牌" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.brand" placeholder="请输入品牌"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="采购数量" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.amount" placeholder="请输入采购数量"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="单价" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.price" placeholder="请输入单价"></el-input>
          </template>
        </el-table-column>
        <el-table-column width="100">
          <template slot-scope="slot">
            <el-button type="text" @click="deleteProduct(slot.$index)" v-if="isDeleteShow">删除</el-button>
          </template>
        </el-table-column>
        
      </el-table>
      <div class="addButton">
        <el-button type="text" @click="addProduct">添加一条</el-button>
      </div>
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
          price: ""
        }
      ],
      rules: {}
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
    deleteProduct:function (index) {
      if (this.productInfo.length <=1){
        return false;
      }

      this.productInfo.splice(index, 1);
    }
  },
  computed: {
    isDeleteShow:function(){
      return this.productInfo.length > 1;
    }
  },
};
</script>

<style scoped>
.el-table {
  margin-top: 30px;
  width: fit-content;
}

.orderTable {
  margin-left: 20px;
}

.addButton {
  background-color: #fff;
  padding-left: 20px;
  margin-right: 46px;
}

.el-table .el-button {
  display: none;
}

.el-table tr:hover .el-button {
  display: inline-block;
}

</style>


