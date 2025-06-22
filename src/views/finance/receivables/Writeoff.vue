<template>
  <div class="tab-content">
    <el-button type="primary" @click="showAddWriteoff = true">新增核销</el-button>
    <el-table :data="writeoffList" style="margin-top: 16px; width: 100%" class="full-table">
      <el-table-column prop="date" label="核销日期" width="120" />
      <el-table-column prop="customer" label="客户名称" width="160" />
      <el-table-column prop="amount" label="核销金额" width="120" />
      <el-table-column prop="remark" label="备注" width="160" />
      <el-table-column label="操作" width="160">
        <template #default="scope">
          <el-button size="small" @click="editWriteoff(scope.$index)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteWriteoff(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddWriteoff" title="新增核销" width="400px">
      <el-form :model="writeoffForm" label-width="80px">
        <el-form-item label="日期">
          <el-date-picker v-model="writeoffForm.date" type="date" placeholder="选择日期" style="width: 100%" />
        </el-form-item>
        <el-form-item label="客户">
          <el-input v-model="writeoffForm.customer" placeholder="客户名称" />
        </el-form-item>
        <el-form-item label="金额">
          <el-input v-model="writeoffForm.amount" type="number" placeholder="核销金额" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="writeoffForm.remark" placeholder="备注" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddWriteoff = false">取消</el-button>
        <el-button type="primary" @click="saveWriteoff">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const writeoffList = ref([
  { date: '2024-06-05', customer: 'B企业', amount: '3000', remark: '部分核销' }
])
const showAddWriteoff = ref(false)
const writeoffForm = reactive({ date: '', customer: '', amount: '', remark: '' })
function saveWriteoff() {
  if (writeoffForm.date && writeoffForm.customer && writeoffForm.amount) {
    writeoffList.value.push({ ...writeoffForm })
    Object.assign(writeoffForm, { date: '', customer: '', amount: '', remark: '' })
    showAddWriteoff.value = false
  }
}
function editWriteoff(index: number) {
  Object.assign(writeoffForm, writeoffList.value[index])
  showAddWriteoff.value = true
}
function deleteWriteoff(index: number) {
  writeoffList.value.splice(index, 1)
}
</script>

<style scoped>
.tab-content {
  background: #fff;
  padding: 24px 32px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  min-width: 900px;
}
.el-table.full-table {
  width: 100% !important;
}
.el-table th, .el-table td {
  text-align: center !important;
}
.el-table {
  min-width: 900px;
  font-size: 15px;
  border-radius: 6px;
  overflow: hidden;
}
</style>