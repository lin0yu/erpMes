<template>
  <div class="finance-index">
    <h1>财务管理</h1>
    <ul>
      <li><router-link to="/finance/general-ledger">总账</router-link></li>
      <li><router-link to="/finance/receivables">应收管理</router-link></li>
      <li><router-link to="/finance/payables">应付管理</router-link></li>
      <li><router-link to="/finance/fixed-assets">固定资产</router-link></li>
      <li><router-link to="/finance/cost-accounting">成本核算</router-link></li>
      <li><router-link to="/finance/budget">预算管理</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.finance-index {
  padding: 24px;
}
.finance-index ul {
  list-style: none;
  padding: 0;
}
.finance-index li {
  margin-bottom: 8px;
}
</style>