<template>
  <div>
    <el-button type="primary" style="margin-bottom: 16px; float: left;" @click="showAddDialog = true">新增资产</el-button>
    <el-table :data="tableData" class="full-table" style="width: 100%; min-width: 900px; clear: both;">
      <el-table-column prop="assetNo" label="资产编号" align="center" />
      <el-table-column prop="assetName" label="资产名称" align="center" />
      <el-table-column prop="category" label="类别" align="center" />
      <el-table-column prop="department" label="使用部门" align="center" />
      <el-table-column prop="status" label="状态" align="center" />
      <el-table-column label="操作" align="center" width="160">
        <template #default="scope">
          <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddDialog" title="新增资产" width="400px">
      <el-form :model="form">
        <el-form-item label="资产编号">
          <el-input v-model="form.assetNo" />
        </el-form-item>
        <el-form-item label="资产名称">
          <el-input v-model="form.assetName" />
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="form.category" />
        </el-form-item>
        <el-form-item label="使用部门">
          <el-input v-model="form.department" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.status">
            <el-option label="在用" value="在用" />
            <el-option label="闲置" value="闲置" />
            <el-option label="报废" value="报废" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="addRow">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑资产" width="400px">
      <el-form :model="form">
        <el-form-item label="资产编号">
          <el-input v-model="form.assetNo" />
        </el-form-item>
        <el-form-item label="资产名称">
          <el-input v-model="form.assetName" />
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="form.category" />
        </el-form-item>
        <el-form-item label="使用部门">
          <el-input v-model="form.department" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.status">
            <el-option label="在用" value="在用" />
            <el-option label="闲置" value="闲置" />
            <el-option label="报废" value="报废" />
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
type AssetCard = {
  assetNo: string;
  assetName: string;
  category: string;
  department: string;
  status: string;
};
const tableData = ref<AssetCard[]>([
  { assetNo: 'FA20240601', assetName: '办公电脑', category: '电子设备', department: '行政部', status: '在用' },
  { assetNo: 'FA20240602', assetName: '空调', category: '电器', department: '后勤部', status: '闲置' }
]);
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const form = ref<AssetCard>({ assetNo: '', assetName: '', category: '', department: '', status: '' });
let editIndex = -1;
function addRow() {
  tableData.value.push({ ...form.value });
  showAddDialog.value = false;
  form.value = { assetNo: '', assetName: '', category: '', department: '', status: '' };
}
function editRow(row: AssetCard) {
  editIndex = tableData.value.indexOf(row);
  form.value = { ...row };
  showEditDialog.value = true;
}
function saveEdit() {
  if (editIndex !== -1) {
    tableData.value[editIndex] = { ...form.value };
    showEditDialog.value = false;
    form.value = { assetNo: '', assetName: '', category: '', department: '', status: '' };
    editIndex = -1;
  }
}
function deleteRow(row: AssetCard) {
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