<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-date-picker v-model="dateRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="float: left; margin-bottom: 16px; margin-right: 16px;" />
      <el-input v-model="filterText" placeholder="请输入客户名称或订单编号" style="width: 240px; float: left; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="orderNo" label="订单编号" align="center" />
      <el-table-column prop="customer" label="客户名称" align="center" />
      <el-table-column prop="amount" label="金额" align="center" />
      <el-table-column prop="date" label="日期" align="center" />
      <el-table-column prop="status" label="状态" align="center" />
    </el-table>
    <div style="margin-top: 24px;">
      <el-card>
        <div>销售总额：{{ totalAmount }} 元</div>
        <div>订单总数：{{ filteredData.length }} 单</div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const tableData = ref([
  { orderNo: 'SO20240101', customer: '客户A', amount: 12000, status: '已发货', date: '2024-01-10' },
  { orderNo: 'SO20240102', customer: '客户B', amount: 8000, status: '待发货', date: '2024-01-15' },
  { orderNo: 'SO20240103', customer: '客户A', amount: 5000, status: '已发货', date: '2024-01-18' }
]);
const filterText = ref('');
const dateRange = ref([]);
const filteredData = computed(() => {
  let data = tableData.value;
  if (filterText.value) {
    data = data.filter(row => row.customer.includes(filterText.value) || row.orderNo.includes(filterText.value));
  }
  if (dateRange.value && dateRange.value.length === 2) {
    const [start, end] = dateRange.value;
    data = data.filter(row => row.date >= start && row.date <= end);
  }
  return data;
});
const totalAmount = computed(() => filteredData.value.reduce((sum, row) => sum + row.amount, 0));
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>