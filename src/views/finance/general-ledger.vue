<template>
  <div class="general-ledger">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="凭证录入" name="entry">
        <voucher-entry />
      </el-tab-pane>
      <el-tab-pane label="凭证审核" name="audit">
        <voucher-audit />
      </el-tab-pane>
      <el-tab-pane label="凭证查询" name="query">
        <voucher-query />
      </el-tab-pane>
      <el-tab-pane label="记账" name="posting">
        <voucher-posting />
      </el-tab-pane>
      <el-tab-pane label="结账" name="closing">
        <voucher-closing />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeTab = ref('entry')
// 组件占位，后续可分别实现
</script>

<style scoped>
.general-ledger {
}
</style>