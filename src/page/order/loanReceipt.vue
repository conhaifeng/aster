<template>
  <div class="loan-service-main">
    <el-form :model="loanForm"
             ref="loanForm">
      <el-table :data="loanForm.loanInfos">
        <el-table-column label="memberId"
                         width="180">
          <template slot-scope="scope">
            <el-form-item :prop="'loanInfos.' + scope.$index + '.memberId'"
                          :rules="rules.memberId">
              <el-input v-model.trim="scope.row.memberId"
                        clearable
                        placeholder="请输入memberId"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="订单号"
                         width="220">
          <template slot-scope="scope">
            <el-form-item :prop="'loanInfos.' + scope.$index + '.orderId'"
                          :rules="rules.orderId">
              <el-input v-model.trim="scope.row.orderId"
                        clearable
                        placeholder="请输入订单号"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="类型"
                         width="180">
          <template slot-scope="scope">
            <el-form-item prop="quota">
              <el-select v-model="scope.row.type"
                         @change="switchType(scope.row, scope.$index)">
                <el-option v-for="loanType in loanTypes "
                           :key="loanType.value"
                           :label="loanType.label"
                           :value="loanType.value"></el-option>
              </el-select>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="放款日期"
                         width="200">
          <template slot-scope="scope">
            <el-form-item :prop="mapProp(scope.$index, 'loanDate', scope.row.loanDisabled)"
                          :rules="rules.loanDate">
              <el-date-picker v-model="scope.row.loanDate"
                              :value-format="dateFormat"
                              :disabled="scope.row.loanDisabled"
                              placeholder="请输入放款日期"></el-date-picker>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="还款日期"
                         width="200">
          <template slot-scope="scope">
            <el-form-item :prop="mapProp(scope.$index, 'repayDate', scope.row.repayDisabled)"
                          :rules="rules.repayDate">
              <el-date-picker v-model="scope.row.repayDate"
                              :value-format="dateFormat"
                              :disabled="scope.row.repayDisabled"
                              placeholder="请输入还款日期"></el-date-picker>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column width="80">
          <template slot-scope="scope">
            <el-button type="text"
                       @click="deleteRow(scope.$index)"
                       v-if="deleteVisible">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>

    <div class="loan-add">
      <el-button type="text"
                 @click="add">添加一条</el-button>
    </div>

    <div class="loan-submit">
      <el-button type="primary"
                 @click="submit"
                 :loading="loading">提交</el-button>
    </div>
  </div>
</template>

<script>
import { loanMoney } from '@/api/bank'

export default {
  data () {
    return {
      loanForm: {
        loanInfos: [{
          memberId: '',
          orderId: '',
          type: '01',
          loanDate: '',
          repayDate: '',
          loanDisabled: false,
          repayDisabled: true,
          skipValidate: 'null'
        }]
      },
      dateFormat: 'yyyyMMdd',
      loanTypes: [{
        label: '放款',
        value: '01'
      }, {
        label: '还款',
        value: '03'
      }],
      rules: {
        memberId: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        orderId: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        loanDate: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ],
        repayDate: [
          { required: true, message: '不能为空', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  methods: {
    submit: function () {
      this.$refs.loanForm.validate(valid => {
        if (!valid) {
          console.log("here")
          return false
        }

        this.loading = true
        const loanInfos = JSON.parse(JSON.stringify(this.loanForm.loanInfos))
        loanInfos.forEach(loanInfo => {
          delete loanInfo.loanDisabled
          delete loanInfo.repayDisabled
          delete loanInfo.skipValidate
        })

        loanMoney(loanInfos).then(resp => {
          this.loading = false
          if (resp.code === '0000') {
            this.$msg('success', '提交成功')
          }
          else {
            this.$msg('error', resp.msg)
          }
        }).catch(error => {
          this.loading = false
          this.$msg('error', error)
        })
      })
    },
    add: function () {
      const loanInfos = this.loanForm.loanInfos
      if (loanInfos.length >= 5) {
        return this.$msg("error", "最多添加5条.")
      }

      const newLoanInfo = {
        memberId: '',
        orderId: '',
        type: '01',
        loanDate: '',
        repayDate: '',
        loanDisabled: false,
        repayDisabled: true,
        skipValidate: 'null'
      }
      loanInfos.push(newLoanInfo)
    },
    deleteRow: function (index) {
      this.$refs.loanForm.clearValidate()
      this.loanForm.loanInfos.splice(index, 1)
    },
    switchType: function (row, index) {
      const loanDate = "loanInfos." + index + '.loanDate'
      const repayDate = "loanInfos." + index + '.repayDate'
      const props = [loanDate, repayDate]
      this.$refs.loanForm.clearValidate(props)
      row.loanDisabled = !row.loanDisabled
      row.repayDisabled = !row.repayDisabled
    },
    mapProp: function (index, name, disabled) {
      if (!disabled) {
        return 'loanInfos.' + index + '.' + name
      }

      return 'loanInfos.' + index + '.skipValidate'
    }
  },
  computed: {
    deleteVisible: function () {
      return this.loanForm.loanInfos.length > 1
    }
  }

}
</script>

<style lang="stylus" scoped>
.loan-service-main {
  margin: 20px auto;
}
.loan-add {
  text-align: left;
  margin-left: 10px;
}
.loan-submit {
  text-align: center;
}
.el-table {
  width: fit-content;
}
.el-table .el-button {
  display: none;
}
.el-table tr:hover .el-button {
  display: inline-block;
}
.el-date-editor.el-input {
  width: fit-content;
}
</style>
