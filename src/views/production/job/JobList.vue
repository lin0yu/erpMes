<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;">新增作业单</el-button>
      <el-input v-model="filterText" placeholder="请输入作业单号或产品名称" style="width: 240px; float: right; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="jobNo" label="作业单号" align="center" />
      <el-table-column prop="product" label="产品名称" align="center" />
      <el-table-column prop="quantity" label="作业数量" align="center" />
      <el-table-column prop="status" label="状态" align="center" />
      <el-table-column prop="executor" label="执行人" align="center" />
      <el-table-column prop="date" label="下达日期" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="primary">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const tableData = ref([
  { jobNo: 'J20240101', product: '电机', quantity: 20, status: '进行中', executor: '张三', date: '2024-01-11' },
  { jobNo: 'J20240102', product: '减速机', quantity: 10, status: '未开始', executor: '李四', date: '2024-01-13' },
  { jobNo: 'J20240103', product: '齿轮箱', quantity: 5, status: '已完成', executor: '王五', date: '2024-01-16' },
  { jobNo: 'J20240104', product: '皮带轮', quantity: 50, status: '进行中', executor: '赵六', date: '2024-01-19' },
  { jobNo: 'J20240105', product: '链条', quantity: 30, status: '未开始', executor: '钱七', date: '2024-01-21' },
  { jobNo: 'J20240106', product: '轴承', quantity: 60, status: '已完成', executor: '孙八', date: '2024-01-23' },
  { jobNo: 'J20240107', product: '传感器', quantity: 15, status: '进行中', executor: '周九', date: '2024-01-26' },
  { jobNo: 'J20240108', product: 'PLC', quantity: 8, status: '未开始', executor: '吴十', date: '2024-01-29' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.jobNo.includes(filterText.value) || row.product.includes(filterText.value));
});
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>