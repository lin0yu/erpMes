<template>
  <div class="payables">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="供应商付款" name="payment">
        <Payment />
      </el-tab-pane>
      <el-tab-pane label="应付票据管理" name="notes">
        <Notes />
      </el-tab-pane>
      <el-tab-pane label="应付账款核销" name="writeoff">
        <Writeoff />
      </el-tab-pane>
      <el-tab-pane label="付款计划" name="plan">
        <Plan />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Payment from './payables/Payment.vue';
import Notes from './payables/Notes.vue';
import Writeoff from './payables/Writeoff.vue';
import Plan from './payables/Plan.vue';
const activeTab = ref('payment');
</script>

<style scoped>

</style>