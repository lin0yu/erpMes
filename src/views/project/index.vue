<template>
  <div class="project-index">
    <h1>项目管理</h1>
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.project-index {
  padding: 24px;
}
.project-index ul {
  list-style: none;
  padding: 0;
}
.project-index li {
  margin-bottom: 8px;
}
</style>