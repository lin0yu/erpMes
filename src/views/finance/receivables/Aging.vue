<template>
  <div class="tab-content">
    <el-table :data="agingList" style="margin-top: 16px; width: 100%" class="full-table">
      <el-table-column prop="customer" label="客户名称" width="160" />
      <el-table-column prop="total" label="应收总额" width="120" />
      <el-table-column prop="within30" label="30天内" width="100" />
      <el-table-column prop="within60" label="31-60天" width="100" />
      <el-table-column prop="within90" label="61-90天" width="100" />
      <el-table-column prop="over90" label="90天以上" width="100" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const agingList = ref([
  { customer: 'A公司', total: 12000, within30: 8000, within60: 2000, within90: 1000, over90: 1000 },
  { customer: 'B企业', total: 8000, within30: 3000, within60: 2000, within90: 2000, over90: 1000 }
])
</script>

<style scoped>
.tab-content {
  background: #fff;
  padding: 24px 32px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  min-width: 900px;
}
.el-table.full-table {
  width: 100% !important;
}
.el-table th, .el-table td {
  text-align: center !important;
}
.el-table {
  min-width: 900px;
  font-size: 15px;
  border-radius: 6px;
  overflow: hidden;
}
</style>