<template>
  <div>
    <el-button type="primary" style="margin-bottom: 16px;">新增检验标准</el-button>
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column prop="standardNo" label="标准编号" align="center" />
      <el-table-column prop="productName" label="产品名称" align="center" />
      <el-table-column prop="inspectionItem" label="检验项目" align="center" />
      <el-table-column prop="criteria" label="判定标准" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small">编辑</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tableData = ref([
  { standardNo: 'Q001', productName: '减速机', inspectionItem: '外观', criteria: '无划痕' },
  { standardNo: 'Q002', productName: '齿轮箱', inspectionItem: '尺寸', criteria: '±0.1mm' }
]);
</script>