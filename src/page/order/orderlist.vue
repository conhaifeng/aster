<template>
  <div>
    <div class="search-mod">
      <el-form
        :model="searchInfo"
        ref="searchInfo"
        :inline="true"
        label-position="right"
        label-width="100px"
        size="small"
      >
        <el-form-item label="买家手机号">
          <el-input v-model="searchInfo.buyerPhone"></el-input>
        </el-form-item>
        <el-form-item label="买家用户名">
          <el-input v-model="searchInfo.buyerName"></el-input>
        </el-form-item>
        <el-form-item label="订单号">
          <el-input v-model="searchInfo.orderid"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="searchInfo.createTime"
            type="daterange"
            start-placeholder="起始时间"
            end-placeholder="截止时间"
            range-separator="至"
          ></el-date-picker>
        </el-form-item>
        <el-form-item  class="search-button">
          <el-button type="primary">查询订单</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="order-list-mod">
      <el-table :data="orderInfo" stripe border="true" :fit="false">
        <el-table-column label="订单号" prop="orderid" width="150"></el-table-column>
        <el-table-column label="买家" prop="buyerName" width="150"></el-table-column>
        <el-table-column label="品名" prop="productName" width="150"></el-table-column>
        <el-table-column label="总金额" prop="total" width="100"></el-table-column>
        <el-table-column label="订单状态" prop="orderStatus" width="120" align="center"></el-table-column>
        <el-table-column label="操作" prop="operation" width="120" align="center">
          <template>
            <el-button type="text">查看</el-button>
            <el-button type="text">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-pagination :total="100" :page-size="8" background layout="prev, pager, next, jumper"></el-pagination>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      searchInfo: {
        buyerPhone: "",
        buyerName: "",
        orderid: "",
        createTime: ""
      },
      orderInfo: [
        {
          orderid: "00001",
          buyerName: "王高飞",
          productName: "笔记本",
          total: 10000,
          orderStatus: "待支付"
        },
        {
          orderid: "00002",
          buyerName: "顾洪泽",
          productName: "电饭煲",
          total: 200,
          orderStatus: "待确认"
        },
        {
          orderid: "00003",
          buyerName: "武磊",
          productName: "键盘",
          total: 200,
          orderStatus: "交易成功"
        },
        {
          orderid: "00004",
          buyerName: "武磊",
          productName: "键盘",
          total: 200,
          orderStatus: "交易成功"
        },
        {
          orderid: "00005",
          buyerName: "武磊",
          productName: "键盘",
          total: 200,
          orderStatus: "交易成功"
        },
        {
          orderid: "00006",
          buyerName: "武磊",
          productName: "键盘",
          total: 200,
          orderStatus: "交易成功"
        },
        {
          orderid: "00007",
          buyerName: "武磊",
          productName: "键盘",
          total: 200,
          orderStatus: "交易成功"
        },
        {
          orderid: "00008",
          buyerName: "武磊",
          productName: "键盘",
          total: 200,
          orderStatus: "交易成功"
        }
      ]
    };
  }
};
</script>

<style scoped>
.order-list-mod,
.search-mod {
  width: 850px;
  margin-left: 20px;
  padding: 30px;
  padding-bottom: 10px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 20px;
}

.search-button {
  margin-left: 100px;
}

.el-table {
  margin-top: 30px;
  width: fit-content;
}

.order-list-mod {
  padding-left: 20px;
}

.el-pagination {
  margin-top: 30px;
  text-align: center;
}
</style>
