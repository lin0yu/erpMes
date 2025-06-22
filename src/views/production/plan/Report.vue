<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;">新增报工</el-button>
      <el-input v-model="filterText" placeholder="请输入报工单号或产品名称" style="width: 240px; float: right; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="reportNo" label="报工单号" align="center" />
      <el-table-column prop="taskNo" label="任务编号" align="center" />
      <el-table-column prop="product" label="产品名称" align="center" />
      <el-table-column prop="quantity" label="报工数量" align="center" />
      <el-table-column prop="worker" label="报工人" align="center" />
      <el-table-column prop="date" label="报工日期" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="primary">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const tableData = ref([
  { reportNo: 'BG20240101', taskNo: 'T20240101', product: '电机', quantity: 10, worker: '张三', date: '2024-01-12' },
  { reportNo: 'BG20240102', taskNo: 'T20240102', product: '减速机', quantity: 5, worker: '李四', date: '2024-01-14' },
  { reportNo: 'BG20240103', taskNo: 'T20240103', product: '齿轮箱', quantity: 3, worker: '王五', date: '2024-01-17' },
  { reportNo: 'BG20240104', taskNo: 'T20240104', product: '皮带轮', quantity: 25, worker: '赵六', date: '2024-01-20' },
  { reportNo: 'BG20240105', taskNo: 'T20240105', product: '链条', quantity: 15, worker: '钱七', date: '2024-01-22' },
  { reportNo: 'BG20240106', taskNo: 'T20240106', product: '轴承', quantity: 30, worker: '孙八', date: '2024-01-24' },
  { reportNo: 'BG20240107', taskNo: 'T20240107', product: '传感器', quantity: 8, worker: '周九', date: '2024-01-27' },
  { reportNo: 'BG20240108', taskNo: 'T20240108', product: 'PLC', quantity: 4, worker: '吴十', date: '2024-01-30' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.reportNo.includes(filterText.value) || row.product.includes(filterText.value));
});
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>