<script setup lang="ts">
import Layout from '@/layouts/Layout.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <router-view v-if="route.path === '/login'" />
  <Layout v-else />
</template>

<style scoped>
</style>