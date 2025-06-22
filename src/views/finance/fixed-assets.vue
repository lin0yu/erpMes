<template>
  <div class="fixed-assets">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="资产卡片管理" name="card">
        <Card />
      </el-tab-pane>
      <el-tab-pane label="资产增减变动" name="change">
        <Change />
      </el-tab-pane>
      <el-tab-pane label="折旧计提" name="depreciation">
        <Depreciation />
      </el-tab-pane>
      <el-tab-pane label="资产清查" name="inventory">
        <Inventory />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from './fixed-assets/Card.vue';
import Change from './fixed-assets/Change.vue';
import Depreciation from './fixed-assets/Depreciation.vue';
import Inventory from './fixed-assets/Inventory.vue';
const activeTab = ref('card');
</script>

<style scoped>
</style>