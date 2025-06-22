<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;">新增物料清单</el-button>
      <el-input v-model="filterText" placeholder="请输入BOM编号或产品名称" style="width: 240px; float: right; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="bomNo" label="BOM编号" align="center" />
      <el-table-column prop="product" label="产品名称" align="center" />
      <el-table-column prop="version" label="版本号" align="center" />
      <el-table-column prop="status" label="状态" align="center" />
      <el-table-column prop="creator" label="制定人" align="center" />
      <el-table-column prop="date" label="制定日期" align="center" />
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
  { bomNo: 'BOM20240101', product: '电机', version: 'V1.0', status: '启用', creator: '张三', date: '2024-01-11' },
  { bomNo: 'BOM20240102', product: '减速机', version: 'V1.1', status: '启用', creator: '李四', date: '2024-01-13' },
  { bomNo: 'BOM20240103', product: '齿轮箱', version: 'V2.0', status: '停用', creator: '王五', date: '2024-01-16' },
  { bomNo: 'BOM20240104', product: '皮带轮', version: 'V1.0', status: '启用', creator: '赵六', date: '2024-01-19' },
  { bomNo: 'BOM20240105', product: '链条', version: 'V1.2', status: '启用', creator: '钱七', date: '2024-01-21' },
  { bomNo: 'BOM20240106', product: '轴承', version: 'V1.0', status: '停用', creator: '孙八', date: '2024-01-23' },
  { bomNo: 'BOM20240107', product: '传感器', version: 'V1.0', status: '启用', creator: '周九', date: '2024-01-26' },
  { bomNo: 'BOM20240108', product: 'PLC', version: 'V1.0', status: '启用', creator: '吴十', date: '2024-01-29' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.bomNo.includes(filterText.value) || row.product.includes(filterText.value));
});
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>