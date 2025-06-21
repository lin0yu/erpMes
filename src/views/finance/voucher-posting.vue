<template>
  <div>
    <el-card>
      <h3>记账</h3>
      <!-- 这里实现记账操作和状态 -->
      <el-alert title="点击下方按钮将所有已审核凭证记账入总账。" type="info" show-icon class="mb-2" />
      <el-button type="primary">一键记账</el-button>
      <el-table :data="posted">
        <el-table-column prop="date" label="日期" />
        <el-table-column prop="summary" label="摘要" />
        <el-table-column prop="account" label="科目" />
        <el-table-column prop="debit" label="借方" />
        <el-table-column prop="credit" label="贷方" />
      </el-table>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const posted = ref([
  { date: '2024-06-01', summary: '记账凭证1', account: '现金', debit: 100, credit: 0 }
])
</script>