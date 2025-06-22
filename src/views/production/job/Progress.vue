<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-date-picker v-model="dateRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="float: left; margin-bottom: 16px; margin-right: 16px;" />
      <el-input v-model="filterText" placeholder="请输入作业单号或产品名称" style="width: 240px; float: left; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="jobNo" label="作业单号" align="center" />
      <el-table-column prop="product" label="产品名称" align="center" />
      <el-table-column prop="planQty" label="作业数量" align="center" />
      <el-table-column prop="finishQty" label="完成数量" align="center" />
      <el-table-column prop="rate" label="完成率" align="center" />
      <el-table-column prop="date" label="下达日期" align="center" />
    </el-table>
    <div style="margin-top: 24px;">
      <el-card>
        <div>总作业单数：{{ filteredData.length }} 条</div>
        <div>总完成数：{{ totalFinishQty }} 件</div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const tableData = ref([
  { jobNo: 'J20240101', product: '电机', planQty: 20, finishQty: 10, rate: '50%', date: '2024-01-11' },
  { jobNo: 'J20240102', product: '减速机', planQty: 10, finishQty: 5, rate: '50%', date: '2024-01-13' },
  { jobNo: 'J20240103', product: '齿轮箱', planQty: 5, finishQty: 5, rate: '100%', date: '2024-01-16' },
  { jobNo: 'J20240104', product: '皮带轮', planQty: 50, finishQty: 25, rate: '50%', date: '2024-01-19' },
  { jobNo: 'J20240105', product: '链条', planQty: 30, finishQty: 15, rate: '50%', date: '2024-01-21' },
  { jobNo: 'J20240106', product: '轴承', planQty: 60, finishQty: 60, rate: '100%', date: '2024-01-23' },
  { jobNo: 'J20240107', product: '传感器', planQty: 15, finishQty: 8, rate: '53.3%', date: '2024-01-26' },
  { jobNo: 'J20240108', product: 'PLC', planQty: 8, finishQty: 4, rate: '50%', date: '2024-01-29' }
]);
const filterText = ref('');
const dateRange = ref([]);
const filteredData = computed(() => {
  let data = tableData.value;
  if (filterText.value) {
    data = data.filter(row => row.product.includes(filterText.value) || row.jobNo.includes(filterText.value));
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