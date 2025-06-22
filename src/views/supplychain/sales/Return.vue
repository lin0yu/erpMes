<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;"
        @click="showAddDialog = true">新增退货单</el-button>
      <el-input v-model="filterText" placeholder="请输入退货单号或客户名称" style="width: 240px; float: right; margin-bottom: 16px;"
        clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="returnNo" label="退货单号" align="center" />
      <el-table-column prop="customer" label="客户名称" align="center" />
      <el-table-column prop="reason" label="退货原因" align="center" />
      <el-table-column prop="amount" label="金额" align="center" />
      <el-table-column prop="date" label="退货日期" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="showAddDialog" title="新增退货单" width="400px">
      <el-form :model="addForm" label-width="80px">
        <el-form-item label="退货单号"><el-input v-model="addForm.returnNo" /></el-form-item>
        <el-form-item label="客户名称"><el-input v-model="addForm.customer" /></el-form-item>
        <el-form-item label="退货原因"><el-input v-model="addForm.reason" /></el-form-item>
        <el-form-item label="金额"><el-input v-model="addForm.amount" type="number" /></el-form-item>
        <el-form-item label="退货日期"><el-date-picker v-model="addForm.date" type="date" /></el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAdd">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑退货单" width="400px">
      <el-form :model="currentRow" label-width="80px">
        <el-form-item label="退货单号"><el-input v-model="currentRow.returnNo" /></el-form-item>
        <el-form-item label="客户名称"><el-input v-model="currentRow.customer" /></el-form-item>
        <el-form-item label="退货原因"><el-input v-model="currentRow.reason" /></el-form-item>
        <el-form-item label="金额"><el-input v-model="currentRow.amount" type="number" /></el-form-item>
        <el-form-item label="退货日期"><el-date-picker v-model="currentRow.date" type="date" /></el-form-item>
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
  { returnNo: 'RET20240101', customer: '客户A', reason: '产品损坏', amount: 2000, date: '2024-01-20' },
  { returnNo: 'RET20240102', customer: '客户B', reason: '客户拒收', amount: 1500, date: '2024-01-25' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.returnNo.includes(filterText.value) || row.customer.includes(filterText.value));
});
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const addForm = ref({ returnNo: '', customer: '', reason: '', amount: 0, date: '' });
const currentRow = ref({});
function handleAdd() {
  if (!addForm.value.returnNo) return;
  tableData.value.push({ ...addForm.value });
  addForm.value = { returnNo: '', customer: '', reason: '', amount: 0, date: '' };
  showAddDialog.value = false;
}
function handleEdit(row: any) {
  currentRow.value = { ...row };
  showEditDialog.value = true;
}
function handleSaveEdit() {
  const idx = tableData.value.findIndex(item => item.returnNo === currentRow.value.returnNo);
  if (idx !== -1) tableData.value[idx] = { ...currentRow.value };
  showEditDialog.value = false;
}
function handleDelete(row: any) {
  tableData.value = tableData.value.filter(item => item.returnNo !== row.returnNo);
}
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>
