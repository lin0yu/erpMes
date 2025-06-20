<template>
  <div class="supplychain-index">
    <h1>供应链管理</h1>
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.supplychain-index {
  padding: 24px;
}
.supplychain-index ul {
  list-style: none;
  padding: 0;
}
.supplychain-index li {
  margin-bottom: 8px;
}
</style>