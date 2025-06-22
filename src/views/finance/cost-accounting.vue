<template>
  <div class="cost-accounting">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="成本要素设置" name="element">
        <Element />
      </el-tab-pane>
      <el-tab-pane label="成本分摊" name="allocation">
        <Allocation />
      </el-tab-pane>
      <el-tab-pane label="成本计算" name="calculation">
        <Calculation />
      </el-tab-pane>
      <el-tab-pane label="成本分析" name="analysis">
        <Analysis />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Element from './cost-accounting/Element.vue';
import Allocation from './cost-accounting/Allocation.vue';
import Calculation from './cost-accounting/Calculation.vue';
import Analysis from './cost-accounting/Analysis.vue';
const activeTab = ref('element');
</script>

<style scoped>

</style>