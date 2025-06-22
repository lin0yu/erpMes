<template>
  <el-tabs v-model="activeTab" @tab-click="handleTabClick(activeTab)">
    <el-tab-pane label="计划列表" name="planList">
      <PlanList />
    </el-tab-pane>
    <el-tab-pane label="生产任务" name="task">
      <Task />
    </el-tab-pane>
    <el-tab-pane label="生产报工" name="report">
      <Report />
    </el-tab-pane>
    <el-tab-pane label="生产报表" name="statistic">
      <Statistic />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import PlanList from './plan/PlanList.vue';
import Task from './plan/Task.vue';
import Report from './plan/Report.vue';
import Statistic from './plan/Statistic.vue';
const activeTab = ref('planList');
const router = useRouter();
const route = useRoute();

// 根据路由初始化 tab
if (route.query.tab) {
  activeTab.value = route.query.tab as string;
}

function handleTabClick(tabName: string) {
  router.replace({ query: { ...route.query, tab: tabName } });
}
</script>

<style scoped>
.el-tabs {
  /* 无背景色 */
}
</style>