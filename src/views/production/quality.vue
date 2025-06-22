<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="质量检验标准设置" name="standard">
      <Standard />
    </el-tab-pane>
    <el-tab-pane label="产品检验" name="inspection">
      <Inspection />
    </el-tab-pane>
    <el-tab-pane label="质量问题处理" name="issue">
      <Issue />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Standard from './quality/Standard.vue';
import Inspection from './quality/Inspection.vue';
import Issue from './quality/Issue.vue';
const activeTab = ref('standard');
</script>
