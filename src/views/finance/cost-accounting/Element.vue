<template>
  <div>
    <el-button type="primary" style="margin-bottom: 16px; float: left;" @click="showAddDialog = true">新增要素</el-button>
    <el-table :data="tableData" class="full-table" style="width: 100%; min-width: 900px; clear: both;">
      <el-table-column prop="code" label="要素编码" align="center" />
      <el-table-column prop="name" label="要素名称" align="center" />
      <el-table-column prop="remark" label="备注" align="center" />
      <el-table-column label="操作" align="center" width="160">
        <template #default="scope">
          <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddDialog" title="新增要素" width="400px">
      <el-form :model="form">
        <el-form-item label="要素编码">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="要素名称">
          <el-input v-model="form.name" />
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
    <el-dialog v-model="showEditDialog" title="编辑要素" width="400px">
      <el-form :model="form">
        <el-form-item label="要素编码">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="要素名称">
          <el-input v-model="form.name" />
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
type CostElement = {
  code: string;
  name: string;
  remark: string;
};
const tableData = ref<CostElement[]>([
  { code: 'E001', name: '人工', remark: '' },
  { code: 'E002', name: '材料', remark: '' }
]);
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const form = ref<CostElement>({ code: '', name: '', remark: '' });
let editIndex = -1;
function addRow() {
  tableData.value.push({ ...form.value });
  showAddDialog.value = false;
  form.value = { code: '', name: '', remark: '' };
}
function editRow(row: CostElement) {
  editIndex = tableData.value.indexOf(row);
  form.value = { ...row };
  showEditDialog.value = true;
}
function saveEdit() {
  if (editIndex !== -1) {
    tableData.value[editIndex] = { ...form.value };
    showEditDialog.value = false;
    form.value = { code: '', name: '', remark: '' };
    editIndex = -1;
  }
}
function deleteRow(row: CostElement) {
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