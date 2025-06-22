<template>
  <div class="revenue-management">
    <el-card class="main-card">
      <div class="header">
        <h2>营收管理</h2>
        <el-button type="primary" icon="el-icon-plus" @click="showAddDialog = true">新增营收</el-button>
      </div>
      <el-row :gutter="20" class="summary-row">
        <el-col :span="6">
          <el-statistic title="本月营收" :value="summary.monthRevenue" prefix="￥" />
        </el-col>
        <el-col :span="6">
          <el-statistic title="本年营收" :value="summary.yearRevenue" prefix="￥" />
        </el-col>
        <el-col :span="6">
          <el-statistic title="客户数" :value="summary.customerCount" />
        </el-col>
        <el-col :span="6">
          <el-statistic title="订单数" :value="summary.orderCount" />
        </el-col>
      </el-row>
      <el-table :data="revenueList" class="revenue-table" stripe>
        <el-table-column prop="date" label="日期" width="120" />
        <el-table-column prop="customer" label="客户名称" />
        <el-table-column prop="orderNo" label="订单号" />
        <el-table-column prop="amount" label="金额(￥)" />
        <el-table-column prop="status" label="状态">
          <template #default="scope">
            <el-tag :type="scope.row.status === '已收款' ? 'success' : 'warning'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template #default="scope">
            <el-button size="small" @click="editRevenue(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="deleteRevenue(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog v-model="showAddDialog" title="新增营收" width="400px">
      <el-form :model="form" label-width="80px">
        <el-form-item label="日期">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width:100%" />
        </el-form-item>
        <el-form-item label="客户名称">
          <el-input v-model="form.customer" placeholder="请输入客户名称" />
        </el-form-item>
        <el-form-item label="订单号">
          <el-input v-model="form.orderNo" placeholder="请输入订单号" />
        </el-form-item>
        <el-form-item label="金额">
          <el-input-number v-model="form.amount" :min="0" style="width:100%" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.status" placeholder="请选择">
            <el-option label="已收款" value="已收款" />
            <el-option label="待收款" value="待收款" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="addRevenue">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showAddDialog = ref(false)
const form = ref({ date: '', customer: '', orderNo: '', amount: 0, status: '已收款' })
const revenueList = ref([
  { date: '2024-06-01', customer: '客户A', orderNo: 'ORD001', amount: 12000, status: '已收款' },
  { date: '2024-06-03', customer: '客户B', orderNo: 'ORD002', amount: 8000, status: '待收款' }
])
const summary = ref({
  monthRevenue: 20000,
  yearRevenue: 120000,
  customerCount: 12,
  orderCount: 30
})
function addRevenue() {
  revenueList.value.push({ ...form.value })
  showAddDialog.value = false
}
function editRevenue(row: any) {
  Object.assign(form.value, row)
  showAddDialog.value = true
}
function deleteRevenue(row: any) {
  revenueList.value = revenueList.value.filter(item => item !== row)
}
</script>

<style scoped lang="scss">
.revenue-management {
  padding: 24px;
  background: #f7f8fa;
  min-height: 100vh;
  .main-card {
    max-width: 1200px;
    margin: 0 auto;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    padding: 32px 24px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .summary-row {
    margin-bottom: 24px;
  }
  .revenue-table {
    margin-top: 12px;
  }
}
</style>