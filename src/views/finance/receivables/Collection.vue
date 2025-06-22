<template>
  <div>
    <el-button type="primary" style="margin-bottom: 16px; float: left;" @click="showAddDialog = true">新增收款</el-button>
    <el-table :data="tableData" class="full-table" style="width: 100%; min-width: 900px; clear: both;">
      <el-table-column prop="collectionNo" label="收款编号" align="center" />
      <el-table-column prop="customer" label="客户" align="center" />
      <el-table-column prop="amount" label="收款金额" align="center" />
      <el-table-column prop="date" label="收款日期" align="center" />
      <el-table-column label="操作" align="center" width="160">
        <template #default="scope">
          <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddDialog" title="新增收款" width="400px">
      <el-form :model="form">
        <el-form-item label="收款编号">
          <el-input v-model="form.collectionNo" />
        </el-form-item>
        <el-form-item label="客户">
          <el-input v-model="form.customer" />
        </el-form-item>
        <el-form-item label="收款金额">
          <el-input v-model="form.amount" type="number" />
        </el-form-item>
        <el-form-item label="收款日期">
          <el-date-picker v-model="form.date" type="date" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="addRow">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑收款" width="400px">
      <el-form :model="form">
        <el-form-item label="收款编号">
          <el-input v-model="form.collectionNo" />
        </el-form-item>
        <el-form-item label="客户">
          <el-input v-model="form.customer" />
        </el-form-item>
        <el-form-item label="收款金额">
          <el-input v-model="form.amount" type="number" />
        </el-form-item>
        <el-form-item label="收款日期">
          <el-date-picker v-model="form.date" type="date" />
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
type Collection = {
  collectionNo: string;
  customer: string;
  amount: number;
  date: string;
};
const tableData = ref<Collection[]>([
  { collectionNo: 'COL20240601', customer: '客户A', amount: 12000, date: '2024-06-01' },
  { collectionNo: 'COL20240602', customer: '客户B', amount: 8000, date: '2024-06-02' }
]);
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const form = ref<Collection>({ collectionNo: '', customer: '', amount: 0, date: '' });
let editIndex = -1;
function addRow() {
  tableData.value.push({ ...form.value });
  showAddDialog.value = false;
  form.value = { collectionNo: '', customer: '', amount: 0, date: '' };
}
function editRow(row: Collection) {
  editIndex = tableData.value.indexOf(row);
  form.value = { ...row };
  showEditDialog.value = true;
}
function saveEdit() {
  if (editIndex !== -1) {
    tableData.value[editIndex] = { ...form.value };
    showEditDialog.value = false;
    form.value = { collectionNo: '', customer: '', amount: 0, date: '' };
    editIndex = -1;
  }
}
function deleteRow(row: Collection) {
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