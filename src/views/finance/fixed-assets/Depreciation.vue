<template>
  <div>
    <el-button type="primary" style="margin-bottom: 16px; float: left;" @click="showAddDialog = true">新增折旧</el-button>
    <el-table :data="tableData" class="full-table" style="width: 100%; min-width: 900px; clear: both;">
      <el-table-column prop="deprNo" label="折旧编号" align="center" />
      <el-table-column prop="assetName" label="资产名称" align="center" />
      <el-table-column prop="period" label="折旧期间" align="center" />
      <el-table-column prop="amount" label="折旧金额" align="center" />
      <el-table-column prop="remark" label="备注" align="center" />
      <el-table-column label="操作" align="center" width="160">
        <template #default="scope">
          <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddDialog" title="新增折旧" width="400px">
      <el-form :model="form">
        <el-form-item label="折旧编号">
          <el-input v-model="form.deprNo" />
        </el-form-item>
        <el-form-item label="资产名称">
          <el-input v-model="form.assetName" />
        </el-form-item>
        <el-form-item label="折旧期间">
          <el-input v-model="form.period" />
        </el-form-item>
        <el-form-item label="折旧金额">
          <el-input v-model="form.amount" type="number" />
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
    <el-dialog v-model="showEditDialog" title="编辑折旧" width="400px">
      <el-form :model="form">
        <el-form-item label="折旧编号">
          <el-input v-model="form.deprNo" />
        </el-form-item>
        <el-form-item label="资产名称">
          <el-input v-model="form.assetName" />
        </el-form-item>
        <el-form-item label="折旧期间">
          <el-input v-model="form.period" />
        </el-form-item>
        <el-form-item label="折旧金额">
          <el-input v-model="form.amount" type="number" />
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
type AssetDepreciation = {
  deprNo: string;
  assetName: string;
  period: string;
  amount: number;
  remark: string;
};
const tableData = ref<AssetDepreciation[]>([
  { deprNo: 'DP20240601', assetName: '办公电脑', period: '2024-06', amount: 500, remark: '' },
  { deprNo: 'DP20240602', assetName: '空调', period: '2024-06', amount: 200, remark: '' }
]);
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const form = ref<AssetDepreciation>({ deprNo: '', assetName: '', period: '', amount: 0, remark: '' });
let editIndex = -1;
function addRow() {
  tableData.value.push({ ...form.value });
  showAddDialog.value = false;
  form.value = { deprNo: '', assetName: '', period: '', amount: 0, remark: '' };
}
function editRow(row: AssetDepreciation) {
  editIndex = tableData.value.indexOf(row);
  form.value = { ...row };
  showEditDialog.value = true;
}
function saveEdit() {
  if (editIndex !== -1) {
    tableData.value[editIndex] = { ...form.value };
    showEditDialog.value = false;
    form.value = { deprNo: '', assetName: '', period: '', amount: 0, remark: '' };
    editIndex = -1;
  }
}
function deleteRow(row: AssetDepreciation) {
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