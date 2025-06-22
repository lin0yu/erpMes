<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-date-picker v-model="dateRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="float: left; margin-bottom: 16px; margin-right: 16px;" />
      <el-input v-model="filterText" placeholder="请输入订单编号或产品名称" style="width: 240px; float: left; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="orderNo" label="订单编号" align="center" />
      <el-table-column prop="product" label="产品名称" align="center" />
      <el-table-column prop="planQty" label="订单数量" align="center" />
      <el-table-column prop="finishQty" label="完成数量" align="center" />
      <el-table-column prop="rate" label="完成率" align="center" />
      <el-table-column prop="date" label="下单日期" align="center" />
    </el-table>
    <div style="margin-top: 24px;">
      <el-card>
        <div>总订单数：{{ filteredData.length }} 条</div>
        <div>总完成数：{{ totalFinishQty }} 件</div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const tableData = ref([
  { orderNo: 'O20240101', product: '电机', planQty: 100, finishQty: 80, rate: '80%', date: '2024-01-10' },
  { orderNo: 'O20240102', product: '减速机', planQty: 50, finishQty: 40, rate: '80%', date: '2024-01-12' },
  { orderNo: 'O20240103', product: '齿轮箱', planQty: 30, finishQty: 30, rate: '100%', date: '2024-01-15' },
  { orderNo: 'O20240104', product: '皮带轮', planQty: 200, finishQty: 120, rate: '60%', date: '2024-01-18' },
  { orderNo: 'O20240105', product: '链条', planQty: 150, finishQty: 100, rate: '66.7%', date: '2024-01-20' },
  { orderNo: 'O20240106', product: '轴承', planQty: 300, finishQty: 300, rate: '100%', date: '2024-01-22' },
  { orderNo: 'O20240107', product: '传感器', planQty: 80, finishQty: 60, rate: '75%', date: '2024-01-25' },
  { orderNo: 'O20240108', product: 'PLC', planQty: 40, finishQty: 20, rate: '50%', date: '2024-01-28' }
]);
const filterText = ref('');
const dateRange = ref([]);
const filteredData = computed(() => {
  let data = tableData.value;
  if (filterText.value) {
    data = data.filter(row => row.product.includes(filterText.value) || row.orderNo.includes(filterText.value));
  }
  if (dateRange.value && dateRange.value.length === 2) {
    const [start, end] = dateRange.value;
    data = data.filter(row => row.date >= start && row.date <= end);
  }
  return data;
});
const totalFinishQty = computed(() => filteredData.value.reduce((sum, row) => sum + row.finishQty, 0));
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>