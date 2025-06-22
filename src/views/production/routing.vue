<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="工艺路线列表" name="routingList">
      <RoutingList />
    </el-tab-pane>
    <el-tab-pane label="工艺路线明细" name="detail">
      <Detail />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RoutingList from './routing/RoutingList.vue';
import Detail from './routing/Detail.vue';
const activeTab = ref('routingList');
</script>

<style scoped>
.el-tabs {
  /* 无背景色 */
}
</style>