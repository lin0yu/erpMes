<template>
  <div class="crm-index">
    <router-view />
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