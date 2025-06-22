<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;" @click="showAddDialog = true">新增采购计划</el-button>
      <el-input v-model="filterText" placeholder="请输入计划名称或状态" style="width: 240px; float: right; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="planName" label="计划名称" align="center" />
      <el-table-column prop="status" label="状态" align="center" />
      <el-table-column prop="creator" label="制定人" align="center" />
      <el-table-column prop="date" label="制定日期" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddDialog" title="新增采购计划" width="400px">
      <el-form :model="addForm" label-width="80px">
        <el-form-item label="计划名称"><el-input v-model="addForm.planName" /></el-form-item>
        <el-form-item label="状态"><el-input v-model="addForm.status" /></el-form-item>
        <el-form-item label="制定人"><el-input v-model="addForm.creator" /></el-form-item>
        <el-form-item label="制定日期"><el-input v-model="addForm.date" /></el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAdd">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑采购计划" width="400px">
      <el-form :model="currentRow" label-width="80px">
        <el-form-item label="计划名称"><el-input v-model="currentRow.planName" /></el-form-item>
        <el-form-item label="状态"><el-input v-model="currentRow.status" /></el-form-item>
        <el-form-item label="制定人"><el-input v-model="currentRow.creator" /></el-form-item>
        <el-form-item label="制定日期"><el-input v-model="currentRow.date" /></el-form-item>
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
  { planName: '2024年第一季度采购', status: '审批中', creator: '张三', date: '2024-01-10' },
  { planName: '2024年第二季度采购', status: '已完成', creator: '李四', date: '2024-04-05' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.planName.includes(filterText.value) || row.status.includes(filterText.value));
});
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const addForm = ref({ planName: '', status: '', creator: '', date: '' });
const currentRow = ref({});
function handleAdd() {
  if (!addForm.value.planName) return;
  tableData.value.push({ ...addForm.value });
  showAddDialog.value = false;
  addForm.value = { planName: '', status: '', creator: '', date: '' };
}
function handleEdit(row) {
  currentRow.value = { ...row };
  showEditDialog.value = true;
}
function handleSaveEdit() {
  const idx = tableData.value.findIndex(item => item.planName === currentRow.value.planName);
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