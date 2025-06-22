<template>
  <div>
    <el-button type="primary" style="margin-bottom: 16px; float: left;" @click="showAddDialog = true">新增清查</el-button>
    <el-table :data="tableData" class="full-table" style="width: 100%; min-width: 900px; clear: both;">
      <el-table-column prop="invNo" label="清查编号" align="center" />
      <el-table-column prop="assetName" label="资产名称" align="center" />
      <el-table-column prop="invDate" label="清查日期" align="center" />
      <el-table-column prop="result" label="清查结果" align="center" />
      <el-table-column prop="remark" label="备注" align="center" />
      <el-table-column label="操作" align="center" width="160">
        <template #default="scope">
          <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddDialog" title="新增清查" width="400px">
      <el-form :model="form">
        <el-form-item label="清查编号">
          <el-input v-model="form.invNo" />
        </el-form-item>
        <el-form-item label="资产名称">
          <el-input v-model="form.assetName" />
        </el-form-item>
        <el-form-item label="清查日期">
          <el-date-picker v-model="form.invDate" type="date" />
        </el-form-item>
        <el-form-item label="清查结果">
          <el-input v-model="form.result" />
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
    <el-dialog v-model="showEditDialog" title="编辑清查" width="400px">
      <el-form :model="form">
        <el-form-item label="清查编号">
          <el-input v-model="form.invNo" />
        </el-form-item>
        <el-form-item label="资产名称">
          <el-input v-model="form.assetName" />
        </el-form-item>
        <el-form-item label="清查日期">
          <el-date-picker v-model="form.invDate" type="date" />
        </el-form-item>
        <el-form-item label="清查结果">
          <el-input v-model="form.result" />
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
type AssetInventory = {
  invNo: string;
  assetName: string;
  invDate: string;
  result: string;
  remark: string;
};
const tableData = ref<AssetInventory[]>([
  { invNo: 'IV20240601', assetName: '办公电脑', invDate: '2024-06-01', result: '正常', remark: '' },
  { invNo: 'IV20240602', assetName: '空调', invDate: '2024-06-02', result: '盘亏', remark: '' }
]);
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const form = ref<AssetInventory>({ invNo: '', assetName: '', invDate: '', result: '', remark: '' });
let editIndex = -1;
function addRow() {
  tableData.value.push({ ...form.value });
  showAddDialog.value = false;
  form.value = { invNo: '', assetName: '', invDate: '', result: '', remark: '' };
}
function editRow(row: AssetInventory) {
  editIndex = tableData.value.indexOf(row);
  form.value = { ...row };
  showEditDialog.value = true;
}
function saveEdit() {
  if (editIndex !== -1) {
    tableData.value[editIndex] = { ...form.value };
    showEditDialog.value = false;
    form.value = { invNo: '', assetName: '', invDate: '', result: '', remark: '' };
    editIndex = -1;
  }
}
function deleteRow(row: AssetInventory) {
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