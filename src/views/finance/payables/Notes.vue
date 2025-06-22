<template>
  <div class="notes">
    <el-table :data="tableData" class="full-table" style="width: 100%; min-width: 900px;">
      <el-table-column prop="billNo" label="票据编号" align="center" />
      <el-table-column prop="supplier" label="供应商" align="center" />
      <el-table-column prop="amount" label="金额" align="center" />
      <el-table-column prop="issueDate" label="出票日期" align="center" />
      <el-table-column prop="dueDate" label="到期日期" align="center" />
      <el-table-column prop="status" label="状态" align="center" />
      <el-table-column label="操作" align="center" width="160">
        <template #default="scope">
          <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" style="margin-top: 16px;" @click="showAddDialog = true">新增票据</el-button>
    <el-dialog v-model="showAddDialog" title="新增票据" width="400px">
      <el-form :model="form">
        <el-form-item label="票据编号">
          <el-input v-model="form.billNo" />
        </el-form-item>
        <el-form-item label="供应商">
          <el-input v-model="form.supplier" />
        </el-form-item>
        <el-form-item label="金额">
          <el-input v-model="form.amount" type="number" />
        </el-form-item>
        <el-form-item label="出票日期">
          <el-date-picker v-model="form.issueDate" type="date" />
        </el-form-item>
        <el-form-item label="到期日期">
          <el-date-picker v-model="form.dueDate" type="date" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.status">
            <el-option label="已兑付" value="已兑付" />
            <el-option label="未兑付" value="未兑付" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="addRow">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑票据" width="400px">
      <el-form :model="form">
        <el-form-item label="票据编号">
          <el-input v-model="form.billNo" />
        </el-form-item>
        <el-form-item label="供应商">
          <el-input v-model="form.supplier" />
        </el-form-item>
        <el-form-item label="金额">
          <el-input v-model="form.amount" type="number" />
        </el-form-item>
        <el-form-item label="出票日期">
          <el-date-picker v-model="form.issueDate" type="date" />
        </el-form-item>
        <el-form-item label="到期日期">
          <el-date-picker v-model="form.dueDate" type="date" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.status">
            <el-option label="已兑付" value="已兑付" />
            <el-option label="未兑付" value="未兑付" />
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
  { billNo: 'B20240601', supplier: '供应商A', amount: '5000', issueDate: '2024-06-01', dueDate: '2024-07-01', status: '未兑付' },
  { billNo: 'B20240602', supplier: '供应商B', amount: '8000', issueDate: '2024-06-02', dueDate: '2024-08-01', status: '已兑付' }
]);
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const form = ref({ billNo: '', supplier: '', amount: '', issueDate: '', dueDate: '', status: '' });
let editIndex = -1;
function addRow() {
  tableData.value.push({ ...form.value });
  showAddDialog.value = false;
  form.value = { billNo: '', supplier: '', amount: '', issueDate: '', dueDate: '', status: '' };
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
    form.value = { billNo: '', supplier: '', amount: '', issueDate: '', dueDate: '', status: '' };
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