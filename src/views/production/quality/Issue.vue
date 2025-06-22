<template>
  <div>
    <el-button type="primary" style="margin-bottom: 16px;">新增质量问题</el-button>
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column prop="issueNo" label="问题编号" align="center" />
      <el-table-column prop="productName" label="产品名称" align="center" />
      <el-table-column prop="description" label="问题描述" align="center" />
      <el-table-column prop="responsible" label="责任人" align="center" />
      <el-table-column prop="status" label="处理状态" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small">处理</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tableData = ref([
  { issueNo: 'Q20240401', productName: '减速机', description: '表面有划痕', responsible: '王五', status: '待处理' },
  { issueNo: 'Q20240402', productName: '齿轮箱', description: '尺寸超差', responsible: '赵六', status: '已处理' }
]);
</script>