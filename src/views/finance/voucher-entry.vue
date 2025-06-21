<template>
  <div>
    <el-card>
      <h3>凭证录入</h3>
      <!-- 这里实现凭证录入表单及相关逻辑 -->
      <el-form label-width="80px">
        <el-form-item label="日期">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期" />
        </el-form-item>
        <el-form-item label="摘要">
          <el-input v-model="form.summary" placeholder="请输入摘要" />
        </el-form-item>
        <el-form-item label="科目">
          <el-input v-model="form.account" placeholder="请输入科目" />
        </el-form-item>
        <el-form-item label="借方">
          <el-input-number v-model="form.debit" :min="0" />
        </el-form-item>
        <el-form-item label="贷方">
          <el-input-number v-model="form.credit" :min="0" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const form = ref({ date: '', summary: '', account: '', debit: 0, credit: 0 })
</script>