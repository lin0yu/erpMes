<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;">新增生产订单</el-button>
      <el-input v-model="filterText" placeholder="请输入订单编号或产品名称" style="width: 240px; float: right; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="orderNo" label="订单编号" align="center" />
      <el-table-column prop="product" label="产品名称" align="center" />
      <el-table-column prop="quantity" label="订单数量" align="center" />
      <el-table-column prop="status" label="状态" align="center" />
      <el-table-column prop="customer" label="客户" align="center" />
      <el-table-column prop="date" label="下单日期" align="center" />
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
  { orderNo: 'O20240101', product: '电机', quantity: 100, status: '已下达', customer: '客户A', date: '2024-01-10' },
  { orderNo: 'O20240102', product: '减速机', quantity: 50, status: '待下达', customer: '客户B', date: '2024-01-12' },
  { orderNo: 'O20240103', product: '齿轮箱', quantity: 30, status: '已完成', customer: '客户C', date: '2024-01-15' },
  { orderNo: 'O20240104', product: '皮带轮', quantity: 200, status: '已下达', customer: '客户A', date: '2024-01-18' },
  { orderNo: 'O20240105', product: '链条', quantity: 150, status: '待下达', customer: '客户B', date: '2024-01-20' },
  { orderNo: 'O20240106', product: '轴承', quantity: 300, status: '已完成', customer: '客户C', date: '2024-01-22' },
  { orderNo: 'O20240107', product: '传感器', quantity: 80, status: '已下达', customer: '客户A', date: '2024-01-25' },
  { orderNo: 'O20240108', product: 'PLC', quantity: 40, status: '待下达', customer: '客户B', date: '2024-01-28' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.orderNo.includes(filterText.value) || row.product.includes(filterText.value));
});
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>