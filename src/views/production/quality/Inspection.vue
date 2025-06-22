<template>
  <div>
    <el-button type="primary" style="margin-bottom: 16px;">新增检验记录</el-button>
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column prop="inspectionNo" label="检验单号" align="center" />
      <el-table-column prop="productName" label="产品名称" align="center" />
      <el-table-column prop="inspector" label="检验员" align="center" />
      <el-table-column prop="date" label="检验日期" align="center" />
      <el-table-column prop="result" label="检验结果" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small">详情</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tableData = ref([
  { inspectionNo: 'I20240101', productName: '减速机', inspector: '张三', date: '2024-04-01', result: '合格' },
  { inspectionNo: 'I20240102', productName: '齿轮箱', inspector: '李四', date: '2024-04-02', result: '不合格' }
]);
</script>