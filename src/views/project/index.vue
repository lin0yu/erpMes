<template>
  <div class="project-index">
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