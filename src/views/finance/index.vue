<template>
  <div class="finance-index">
    <h1>财务管理</h1>
    <router-view />
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