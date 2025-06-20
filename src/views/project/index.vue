<template>
  <div class="project-index">
    <h1>项目管理</h1>
    <ul>
      <li><router-link to="/project/project-list">项目列表</router-link></li>
      <li><router-link to="/project/task">任务管理</router-link></li>
      <li><router-link to="/project/milestone">里程碑管理</router-link></li>
      <li><router-link to="/project/resource">项目资源管理</router-link></li>
    </ul>
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