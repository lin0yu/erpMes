<template>
  <div class="hr-index">
    <h1>人力资源管理</h1>
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hr-index {
  padding: 24px;
}
.hr-index ul {
  list-style: none;
  padding: 0;
}
.hr-index li {
  margin-bottom: 8px;
}
</style>