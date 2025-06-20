<template>
  <div class="log">
    <h2>操作日志</h2>
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.log {
  padding: 24px;
}
.log ul {
  list-style: none;
  padding: 0;
}
.log li {
  margin-bottom: 8px;
}
</style>