<template>
  <div class="supplychain-index">
    <h1>供应链管理</h1>
    <ul>
      <li><router-link to="/supplychain/purchase">采购管理</router-link></li>
      <li><router-link to="/supplychain/sales">销售管理</router-link></li>
      <li><router-link to="/supplychain/inventory">库存管理</router-link></li>
    </ul>
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