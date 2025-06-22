<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="作业列表" name="jobList">
      <JobList />
    </el-tab-pane>
    <el-tab-pane label="作业进度" name="progress">
      <Progress />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import JobList from './job/JobList.vue';
import Progress from './job/Progress.vue';
const activeTab = ref('jobList');
</script>

<style scoped>

.job {
  padding: 24px;
}
.job ul {
  list-style: none;
  padding: 0;
}
.job li {
  margin-bottom: 8px;
}
</style>