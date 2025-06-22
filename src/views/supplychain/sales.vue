<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="客户管理" name="customer">
      <Customer />
    </el-tab-pane>
    <el-tab-pane label="销售订单" name="order">
      <Order />
    </el-tab-pane>
    <el-tab-pane label="发货管理" name="delivery">
      <Delivery />
    </el-tab-pane>
    <el-tab-pane label="销售退货" name="return">
      <Return />
    </el-tab-pane>
    <el-tab-pane label="销售报表" name="report">
      <Report />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Customer from './sales/Customer.vue';
import Order from './sales/Order.vue';
import Delivery from './sales/Delivery.vue';
import Return from './sales/Return.vue';
import Report from './sales/Report.vue';
const activeTab = ref('customer');
</script>

<style scoped>

</style>