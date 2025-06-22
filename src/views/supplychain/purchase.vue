<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="供应商管理" name="supplier">
      <Supplier />
    </el-tab-pane>
    <el-tab-pane label="采购计划" name="plan">
      <Plan />
    </el-tab-pane>
    <el-tab-pane label="采购订单" name="order">
      <Order />
    </el-tab-pane>
    <el-tab-pane label="采购入库" name="in">
      <In />
    </el-tab-pane>
    <el-tab-pane label="采购结算" name="settle">
      <Settle />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Supplier from './purchase/Supplier.vue';
import Plan from './purchase/Plan.vue';
import Order from './purchase/Order.vue';
import In from './purchase/In.vue';
import Settle from './purchase/Settle.vue';
const activeTab = ref('supplier');
</script>

<style scoped>

</style>