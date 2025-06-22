<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="订单列表" name="orderList">
      <OrderList />
    </el-tab-pane>
    <el-tab-pane label="订单进度" name="progress">
      <Progress />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OrderList from './order/OrderList.vue';
import Progress from './order/Progress.vue';
const activeTab = ref('orderList');
</script>

<style scoped>
.el-tabs {
  /* 无背景色 */
}
</style>