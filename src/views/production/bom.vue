<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="BOM列表" name="bomList">
      <BomList />
    </el-tab-pane>
    <el-tab-pane label="BOM明细" name="detail">
      <Detail />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BomList from './bom/BomList.vue';
import Detail from './bom/Detail.vue';
const activeTab = ref('bomList');
</script>

<style scoped>
.bom ul {
  list-style: none;
  padding: 0;
}
.bom li {
  margin-bottom: 8px;
}
</style>