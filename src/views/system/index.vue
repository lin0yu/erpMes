<template>
  <div class="system-index">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<style scoped>

.system-index ul {
  list-style: none;
  padding: 0;
}
.system-index li {
  margin-bottom: 8px;
}
</style>