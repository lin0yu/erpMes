<template>
  <div>
    <el-card>
      <h3>凭证查询</h3>
      <!-- 这里实现凭证查询表单和结果列表 -->
      <el-form inline label-width="60px" class="mb-2">
        <el-form-item label="日期">
          <el-date-picker v-model="query.date" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
        </el-form-item>
        <el-form-item label="科目">
          <el-input v-model="query.account" placeholder="请输入科目" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="results">
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
const query = ref({ date: [], account: '' })
const results = ref([
  { date: '2024-06-01', summary: '测试凭证1', account: '现金', debit: 100, credit: 0 },
  { date: '2024-06-02', summary: '测试凭证2', account: '银行存款', debit: 0, credit: 200 }
])
</script>