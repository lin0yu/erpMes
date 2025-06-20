<template>
  <div class="production-index">
    <h1>生产制造管理</h1>
    <ul>
      <li><router-link to="/production/plan">生产计划</router-link></li>
      <li><router-link to="/production/order">生产订单</router-link></li>
      <li><router-link to="/production/job">生产作业</router-link></li>
      <li><router-link to="/production/bom">物料清单（BOM）</router-link></li>
      <li><router-link to="/production/routing">工艺路线</router-link></li>
      <li><router-link to="/production/quality">质量管理</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.production-index {
  padding: 24px;
}
.production-index ul {
  list-style: none;
  padding: 0;
}
.production-index li {
  margin-bottom: 8px;
}
</style>