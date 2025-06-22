<template>
  <div class="budget">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="预算编制" name="budgeting">
        <Budgeting />
      </el-tab-pane>
      <el-tab-pane label="预算审批" name="approval">
        <Approval />
      </el-tab-pane>
      <el-tab-pane label="预算执行监控" name="monitor">
        <Monitor />
      </el-tab-pane>
      <el-tab-pane label="预算调整" name="adjustment">
        <Adjustment />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Budgeting from './budget/Budgeting.vue';
import Approval from './budget/Approval.vue';
import Monitor from './budget/Monitor.vue';
import Adjustment from './budget/Adjustment.vue';
const activeTab = ref('budgeting');
</script>

<style scoped>
.budget {
  /* 不加padding，保持与需求一致 */
}
</style>