<template>
  <div class="finance-index">
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.finance-index {
  padding: 0;
}
.finance-index ul {
  list-style: none;
  padding: 0;
}
.finance-index li {
  margin-bottom: 8px;
}
</style>