<template>
  <div class="writeoff">
    <el-table :data="tableData" class="full-table" style="width: 100%; min-width: 900px;">
      <el-table-column prop="supplier" label="供应商" align="center" />
      <el-table-column prop="amount" label="核销金额" align="center" />
      <el-table-column prop="date" label="核销日期" align="center" />
      <el-table-column prop="remark" label="备注" align="center" />
      <el-table-column label="操作" align="center" width="160">
        <template #default="scope">
          <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" style="margin-top: 16px;" @click="showAddDialog = true">新增核销</el-button>
    <el-dialog v-model="showAddDialog" title="新增核销" width="400px">
      <el-form :model="form">
        <el-form-item label="供应商">
          <el-input v-model="form.supplier" />
        </el-form-item>
        <el-form-item label="核销金额">
          <el-input v-model="form.amount" type="number" />
        </el-form-item>
        <el-form-item label="核销日期">
          <el-date-picker v-model="form.date" type="date" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remark" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="addRow">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑核销" width="400px">
      <el-form :model="form">
        <el-form-item label="供应商">
          <el-input v-model="form.supplier" />
        </el-form-item>
        <el-form-item label="核销金额">
          <el-input v-model="form.amount" type="number" />
        </el-form-item>
        <el-form-item label="核销日期">
          <el-date-picker v-model="form.date" type="date" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remark" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showEditDialog = false">取消</el-button>
        <el-button type="primary" @click="saveEdit">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tableData = ref([
  { supplier: '供应商A', amount: '3000', date: '2024-06-01', remark: '部分核销' },
  { supplier: '供应商B', amount: '5000', date: '2024-06-02', remark: '全部核销' }
]);
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const form = ref({ supplier: '', amount: '', date: '', remark: '' });
let editIndex = -1;
function addRow() {
  tableData.value.push({ ...form.value });
  showAddDialog.value = false;
  form.value = { supplier: '', amount: '', date: '', remark: '' };
}
function editRow(row: any) {
  editIndex = tableData.value.indexOf(row);
  form.value = { ...row };
  showEditDialog.value = true;
}
function saveEdit() {
  if (editIndex !== -1) {
    tableData.value[editIndex] = { ...form.value };
    showEditDialog.value = false;
    form.value = { supplier: '', amount: '', date: '', remark: '' };
    editIndex = -1;
  }
}
function deleteRow(row: any) {
  tableData.value = tableData.value.filter(item => item !== row);
}
</script>

<style scoped>

.el-table.full-table {
  width: 100%;
  min-width: 900px;
}
.el-table th, .el-table td {
  text-align: center;
}
</style>