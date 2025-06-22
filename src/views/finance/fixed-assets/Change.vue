<template>
  <div>
    <el-button type="primary" style="margin-bottom: 16px; float: left;" @click="showAddDialog = true">新增变动</el-button>
    <el-table :data="tableData" class="full-table" style="width: 100%; min-width: 900px; clear: both;">
      <el-table-column prop="changeNo" label="变动编号" align="center" />
      <el-table-column prop="assetName" label="资产名称" align="center" />
      <el-table-column prop="changeType" label="变动类型" align="center" />
      <el-table-column prop="changeDate" label="变动日期" align="center" />
      <el-table-column prop="remark" label="备注" align="center" />
      <el-table-column label="操作" align="center" width="160">
        <template #default="scope">
          <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddDialog" title="新增变动" width="400px">
      <el-form :model="form">
        <el-form-item label="变动编号">
          <el-input v-model="form.changeNo" />
        </el-form-item>
        <el-form-item label="资产名称">
          <el-input v-model="form.assetName" />
        </el-form-item>
        <el-form-item label="变动类型">
          <el-input v-model="form.changeType" />
        </el-form-item>
        <el-form-item label="变动日期">
          <el-date-picker v-model="form.changeDate" type="date" />
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
    <el-dialog v-model="showEditDialog" title="编辑变动" width="400px">
      <el-form :model="form">
        <el-form-item label="变动编号">
          <el-input v-model="form.changeNo" />
        </el-form-item>
        <el-form-item label="资产名称">
          <el-input v-model="form.assetName" />
        </el-form-item>
        <el-form-item label="变动类型">
          <el-input v-model="form.changeType" />
        </el-form-item>
        <el-form-item label="变动日期">
          <el-date-picker v-model="form.changeDate" type="date" />
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
type AssetChange = {
  changeNo: string;
  assetName: string;
  changeType: string;
  changeDate: string;
  remark: string;
};
const tableData = ref<AssetChange[]>([
  { changeNo: 'CH20240601', assetName: '办公电脑', changeType: '增加', changeDate: '2024-06-01', remark: '' },
  { changeNo: 'CH20240602', assetName: '空调', changeType: '减少', changeDate: '2024-06-02', remark: '' }
]);
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const form = ref<AssetChange>({ changeNo: '', assetName: '', changeType: '', changeDate: '', remark: '' });
let editIndex = -1;
function addRow() {
  tableData.value.push({ ...form.value });
  showAddDialog.value = false;
  form.value = { changeNo: '', assetName: '', changeType: '', changeDate: '', remark: '' };
}
function editRow(row: AssetChange) {
  editIndex = tableData.value.indexOf(row);
  form.value = { ...row };
  showEditDialog.value = true;
}
function saveEdit() {
  if (editIndex !== -1) {
    tableData.value[editIndex] = { ...form.value };
    showEditDialog.value = false;
    form.value = { changeNo: '', assetName: '', changeType: '', changeDate: '', remark: '' };
    editIndex = -1;
  }
}
function deleteRow(row: AssetChange) {
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