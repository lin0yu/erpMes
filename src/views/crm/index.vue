<template>
  <div class="crm-index">
    <h1>客户关系管理</h1>
    <ul>
      <li><router-link to="/crm/customer">客户信息管理</router-link></li>
      <li><router-link to="/crm/marketing">市场营销管理</router-link></li>
      <li><router-link to="/crm/service">客户服务管理</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.crm-index {
  padding: 24px;
}
.crm-index ul {
  list-style: none;
  padding: 0;
}
.crm-index li {
  margin-bottom: 8px;
}
</style>