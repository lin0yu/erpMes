<template>
  <div class="receivables">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="客户收款" name="collection">
        <Collection />
      </el-tab-pane>
      <el-tab-pane label="应收票据管理" name="notes">
        <Notes />
      </el-tab-pane>
      <el-tab-pane label="应收账款核销" name="writeoff">
        <Writeoff />
      </el-tab-pane>
      <el-tab-pane label="账龄分析" name="aging">
        <Aging />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Collection from './receivables/Collection.vue'
import Notes from './receivables/Notes.vue'
import Writeoff from './receivables/Writeoff.vue'
import Aging from './receivables/Aging.vue'
const activeTab = ref('collection')
</script>

<style scoped>

</style>