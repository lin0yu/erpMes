<template>
  <div class="plan">
    <el-table :data="tableData" class="full-table" style="width: 100%; min-width: 900px;">
      <el-table-column prop="planNo" label="计划编号" align="center" />
      <el-table-column prop="supplier" label="供应商" align="center" />
      <el-table-column prop="amount" label="计划金额" align="center" />
      <el-table-column prop="planDate" label="计划日期" align="center" />
      <el-table-column prop="status" label="状态" align="center" />
      <el-table-column label="操作" align="center" width="160">
        <template #default="scope">
          <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" style="margin-top: 16px;" @click="showAddDialog = true">新增计划</el-button>
    <el-dialog v-model="showAddDialog" title="新增付款计划" width="400px">
      <el-form :model="form">
        <el-form-item label="计划编号">
          <el-input v-model="form.planNo" />
        </el-form-item>
        <el-form-item label="供应商">
          <el-input v-model="form.supplier" />
        </el-form-item>
        <el-form-item label="计划金额">
          <el-input v-model="form.amount" type="number" />
        </el-form-item>
        <el-form-item label="计划日期">
          <el-date-picker v-model="form.planDate" type="date" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.status">
            <el-option label="已完成" value="已完成" />
            <el-option label="未完成" value="未完成" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="addRow">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑付款计划" width="400px">
      <el-form :model="form">
        <el-form-item label="计划编号">
          <el-input v-model="form.planNo" />
        </el-form-item>
        <el-form-item label="供应商">
          <el-input v-model="form.supplier" />
        </el-form-item>
        <el-form-item label="计划金额">
          <el-input v-model="form.amount" type="number" />
        </el-form-item>
        <el-form-item label="计划日期">
          <el-date-picker v-model="form.planDate" type="date" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.status">
            <el-option label="已完成" value="已完成" />
            <el-option label="未完成" value="未完成" />
          </el-select>
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
  { planNo: 'P20240601', supplier: '供应商A', amount: '12000', planDate: '2024-06-10', status: '未完成' },
  { planNo: 'P20240602', supplier: '供应商B', amount: '9000', planDate: '2024-06-15', status: '已完成' }
]);
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const form = ref({ planNo: '', supplier: '', amount: '', planDate: '', status: '' });
let editIndex = -1;
function addRow() {
  tableData.value.push({ ...form.value });
  showAddDialog.value = false;
  form.value = { planNo: '', supplier: '', amount: '', planDate: '', status: '' };
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
    form.value = { planNo: '', supplier: '', amount: '', planDate: '', status: '' };
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