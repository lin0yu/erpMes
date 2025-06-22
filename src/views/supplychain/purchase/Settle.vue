<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;" @click="showAddDialog = true">新增结算单</el-button>
      <el-input v-model="filterText" placeholder="请输入结算单号或供应商" style="width: 240px; float: right; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="settleNo" label="结算单号" align="center" />
      <el-table-column prop="supplier" label="供应商" align="center" />
      <el-table-column prop="amount" label="金额" align="center" />
      <el-table-column prop="invoice" label="发票号" align="center" />
      <el-table-column prop="date" label="结算日期" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddDialog" title="新增结算单" width="400px">
      <el-form :model="addForm" label-width="80px">
        <el-form-item label="结算单号"><el-input v-model="addForm.settleNo" /></el-form-item>
        <el-form-item label="供应商"><el-input v-model="addForm.supplier" /></el-form-item>
        <el-form-item label="金额"><el-input v-model="addForm.amount" /></el-form-item>
        <el-form-item label="发票号"><el-input v-model="addForm.invoice" /></el-form-item>
        <el-form-item label="结算日期"><el-input v-model="addForm.date" /></el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAdd">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑结算单" width="400px">
      <el-form :model="currentRow" label-width="80px">
        <el-form-item label="结算单号"><el-input v-model="currentRow.settleNo" /></el-form-item>
        <el-form-item label="供应商"><el-input v-model="currentRow.supplier" /></el-form-item>
        <el-form-item label="金额"><el-input v-model="currentRow.amount" /></el-form-item>
        <el-form-item label="发票号"><el-input v-model="currentRow.invoice" /></el-form-item>
        <el-form-item label="结算日期"><el-input v-model="currentRow.date" /></el-form-item>
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
  { settleNo: 'SET20240101', supplier: '供应商A', amount: 8000, invoice: 'INV20240101', date: '2024-01-25' },
  { settleNo: 'SET20240102', supplier: '供应商B', amount: 3000, invoice: 'INV20240102', date: '2024-01-28' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.settleNo.includes(filterText.value) || row.supplier.includes(filterText.value));
});
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const addForm = ref({ settleNo: '', supplier: '', amount: '', invoice: '', date: '' });
const currentRow = ref({});
function handleAdd() {
  if (!addForm.value.settleNo) return;
  tableData.value.push({ ...addForm.value });
  showAddDialog.value = false;
  addForm.value = { settleNo: '', supplier: '', amount: '', invoice: '', date: '' };
}
function handleEdit(row) {
  currentRow.value = { ...row };
  showEditDialog.value = true;
}
function handleSaveEdit() {
  const idx = tableData.value.findIndex(item => item.settleNo === currentRow.value.settleNo);
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