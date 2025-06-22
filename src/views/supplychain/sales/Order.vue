<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;"
        @click="showAddDialog = true">新增销售订单</el-button>
      <el-input v-model="filterText" placeholder="请输入订单编号或客户名称" style="width: 240px; float: right; margin-bottom: 16px;"
        clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="orderNo" label="订单编号" align="center" />
      <el-table-column prop="customer" label="客户名称" align="center" />
      <el-table-column prop="amount" label="金额" align="center" />
      <el-table-column prop="status" label="状态" align="center" />
      <el-table-column prop="date" label="下单日期" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddDialog" title="新增销售订单" width="400px">
      <el-form :model="addForm" label-width="80px">
        <el-form-item label="订单编号"><el-input v-model="addForm.orderNo" /></el-form-item>
        <el-form-item label="客户名称"><el-input v-model="addForm.customer" /></el-form-item>
        <el-form-item label="金额"><el-input v-model="addForm.amount" type="number" /></el-form-item>
        <el-form-item label="状态"><el-input v-model="addForm.status" /></el-form-item>
        <el-form-item label="下单日期"><el-date-picker v-model="addForm.date" type="date" /></el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAdd">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑销售订单" width="400px">
      <el-form :model="currentRow" label-width="80px">
        <el-form-item label="订单编号"><el-input v-model="currentRow.orderNo" /></el-form-item>
        <el-form-item label="客户名称"><el-input v-model="currentRow.customer" /></el-form-item>
        <el-form-item label="金额"><el-input v-model="currentRow.amount" type="number" /></el-form-item>
        <el-form-item label="状态"><el-input v-model="currentRow.status" /></el-form-item>
        <el-form-item label="下单日期"><el-date-picker v-model="currentRow.date" type="date" /></el-form-item>
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
  { orderNo: 'SO20240101', customer: '客户A', amount: 12000, status: '已发货', date: '2024-01-10' },
  { orderNo: 'SO20240102', customer: '客户B', amount: 8000, status: '待发货', date: '2024-01-15' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.orderNo.includes(filterText.value) || row.customer.includes(filterText.value));
});
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const addForm = ref({ orderNo: '', customer: '', amount: 0, status: '', date: '' });
const currentRow = ref({});
function handleAdd() {
  if (!addForm.value.orderNo) return;
  tableData.value.push({ ...addForm.value });
  addForm.value = { orderNo: '', customer: '', amount: 0, status: '', date: '' };
  showAddDialog.value = false;
}
function handleEdit(row: any) {
  currentRow.value = { ...row };
  showEditDialog.value = true;
}
function handleSaveEdit() {
  const idx = tableData.value.findIndex(item => item.orderNo === currentRow.value.orderNo);
  if (idx !== -1) tableData.value[idx] = { ...currentRow.value };
  showEditDialog.value = false;
}
function handleDelete(row: any) {
  tableData.value = tableData.value.filter(item => item.orderNo !== row.orderNo);
}
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>
