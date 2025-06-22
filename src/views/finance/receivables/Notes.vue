<template>
  <div class="tab-content">
    <el-button type="primary" @click="showAddNote = true">新增票据</el-button>
    <el-table :data="notesList" style="margin-top: 16px; width: 100%" class="full-table">
      <el-table-column prop="number" label="票据号" width="160" />
      <el-table-column prop="customer" label="客户名称" width="160" />
      <el-table-column prop="amount" label="金额" width="120" />
      <el-table-column prop="dueDate" label="到期日" width="120" />
      <el-table-column label="操作" width="160">
        <template #default="scope">
          <el-button size="small" @click="editNote(scope.$index)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteNote(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddNote" title="新增票据" width="400px">
      <el-form :model="noteForm" label-width="80px">
        <el-form-item label="票据号">
          <el-input v-model="noteForm.number" placeholder="票据号" />
        </el-form-item>
        <el-form-item label="客户">
          <el-input v-model="noteForm.customer" placeholder="客户名称" />
        </el-form-item>
        <el-form-item label="金额">
          <el-input v-model="noteForm.amount" type="number" placeholder="金额" />
        </el-form-item>
        <el-form-item label="到期日">
          <el-date-picker v-model="noteForm.dueDate" type="date" placeholder="选择日期" style="width: 100%" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddNote = false">取消</el-button>
        <el-button type="primary" @click="saveNote">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const notesList = ref([
  { number: 'PN20240601', customer: 'A公司', amount: '5000', dueDate: '2024-07-01' }
])
const showAddNote = ref(false)
const noteForm = reactive({ number: '', customer: '', amount: '', dueDate: '' })
function saveNote() {
  if (noteForm.number && noteForm.customer && noteForm.amount && noteForm.dueDate) {
    notesList.value.push({ ...noteForm })
    Object.assign(noteForm, { number: '', customer: '', amount: '', dueDate: '' })
    showAddNote.value = false
  }
}
function editNote(index: number) {
  Object.assign(noteForm, notesList.value[index])
  showAddNote.value = true
}
function deleteNote(index: number) {
  notesList.value.splice(index, 1)
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