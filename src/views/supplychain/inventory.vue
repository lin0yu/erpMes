<template>
  <div class="inventory">
    <h2>库存管理</h2>
    <ul>
      <li>库存入库（采购入库、生产入库等）</li>
      <li>库存出库（销售出库、生产领料等）</li>
      <li>库存盘点（定期盘点、临时盘点等）</li>
      <li>库存调拨（仓库间调拨等）</li>
      <li>库存成本核算</li>
      <li>库存预警（低库存预警、超库存预警等）</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.inventory {
  padding: 24px;
}
.inventory ul {
  list-style: none;
  padding: 0;
}
.inventory li {
  margin-bottom: 8px;
}
</style>