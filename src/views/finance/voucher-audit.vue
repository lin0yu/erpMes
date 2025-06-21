<template>
  <div>
    <el-card>
      <h3>凭证审核</h3>
      <!-- 这里实现凭证审核列表及操作 -->
      <el-table :data="vouchers">
        <el-table-column prop="date" label="日期" />
        <el-table-column prop="summary" label="摘要" />
        <el-table-column prop="account" label="科目" />
        <el-table-column prop="debit" label="借方" />
        <el-table-column prop="credit" label="贷方" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" type="success">通过</el-button>
            <el-button size="small" type="danger">驳回</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const vouchers = ref([
  { date: '2024-06-01', summary: '测试凭证1', account: '现金', debit: 100, credit: 0 },
  { date: '2024-06-02', summary: '测试凭证2', account: '银行存款', debit: 0, credit: 200 }
])
</script>