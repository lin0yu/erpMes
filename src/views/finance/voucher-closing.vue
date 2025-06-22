<template>
  <div>
    <el-card>
      <!-- 这里实现结账操作和状态 -->
      <el-alert title="结账后本期数据将锁定，无法修改。" type="warning" show-icon class="mb-2" />
      <el-button type="danger">结账</el-button>
      <el-table :data="closed">
        <el-table-column prop="period" label="期间" />
        <el-table-column prop="status" label="状态" />
        <el-table-column prop="date" label="结账日期" />
      </el-table>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const closed = ref([
  { period: '2024-05', status: '已结账', date: '2024-06-01' }
])
</script>