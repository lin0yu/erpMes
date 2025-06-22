<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;" @click="showAddDialog = true">新增供应商</el-button>
      <el-input v-model="filterText" placeholder="请输入供应商名称或评估内容" style="width: 240px; float: right; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="name" label="供应商名称" align="center" />
      <el-table-column prop="contact" label="联系方式" align="center" />
      <el-table-column prop="evaluation" label="评估内容" align="center" />
      <el-table-column prop="remark" label="备注" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddDialog" title="新增供应商" width="400px">
      <el-form :model="addForm" label-width="80px">
        <el-form-item label="供应商名称"><el-input v-model="addForm.name" /></el-form-item>
        <el-form-item label="联系方式"><el-input v-model="addForm.contact" /></el-form-item>
        <el-form-item label="评估内容"><el-input v-model="addForm.evaluation" /></el-form-item>
        <el-form-item label="备注"><el-input v-model="addForm.remark" /></el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAdd">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑供应商" width="400px">
      <el-form :model="currentRow" label-width="80px">
        <el-form-item label="供应商名称"><el-input v-model="currentRow.name" /></el-form-item>
        <el-form-item label="联系方式"><el-input v-model="currentRow.contact" /></el-form-item>
        <el-form-item label="评估内容"><el-input v-model="currentRow.evaluation" /></el-form-item>
        <el-form-item label="备注"><el-input v-model="currentRow.remark" /></el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showEditDialog = false">取消</el-button>
        <el-button type="primary" @click="handleSaveEdit">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const tableData = ref([
  { name: '供应商A', contact: '13800000000', evaluation: '优质', remark: '' },
  { name: '供应商B', contact: '13900000000', evaluation: '合格', remark: '长期合作' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.name.includes(filterText.value) || row.evaluation.includes(filterText.value));
});
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const addForm = ref({ name: '', contact: '', evaluation: '', remark: '' });
const currentRow = ref({});
function handleAdd() {
  if (!addForm.value.name) return;
  tableData.value.push({ ...addForm.value });
  showAddDialog.value = false;
  addForm.value = { name: '', contact: '', evaluation: '', remark: '' };
}
function handleEdit(row) {
  currentRow.value = { ...row };
  showEditDialog.value = true;
}
function handleSaveEdit() {
  const idx = tableData.value.findIndex(item => item.name === currentRow.value.name && item.contact === currentRow.value.contact);
  if (idx !== -1) tableData.value[idx] = { ...currentRow.value };
  showEditDialog.value = false;
}
function handleDelete(row) {
  tableData.value = tableData.value.filter(item => item !== row);
}
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>