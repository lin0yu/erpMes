<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="库存台账" name="stock">
      <Stock />
    </el-tab-pane>
    <el-tab-pane label="出入库明细" name="record">
      <Record />
    </el-tab-pane>
    <el-tab-pane label="仓库管理" name="warehouse">
      <Warehouse />
    </el-tab-pane>
    <el-tab-pane label="库存预警" name="warning">
      <Warning />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Stock from './inventory/Stock.vue';
import Record from './inventory/Record.vue';
import Warehouse from './inventory/Warehouse.vue';
import Warning from './inventory/Warning.vue';
const activeTab = ref('stock');
</script>

<style scoped>

</style>