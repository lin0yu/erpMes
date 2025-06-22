<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;" @click="showAddDialog = true">新增仓库</el-button>
      <el-input v-model="filterText" placeholder="请输入仓库名称或编号" style="width: 240px; float: right; margin-bottom: 16px;"
        clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="warehouseNo" label="仓库编号" align="center" />
      <el-table-column prop="warehouseName" label="仓库名称" align="center" />
      <el-table-column prop="manager" label="负责人" align="center" />
      <el-table-column prop="phone" label="联系电话" align="center" />
      <el-table-column prop="address" label="地址" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="showAddDialog" title="新增仓库" width="400px">
      <el-form :model="addForm" label-width="80px">
        <el-form-item label="仓库编号"><el-input v-model="addForm.warehouseNo" /></el-form-item>
        <el-form-item label="仓库名称"><el-input v-model="addForm.warehouseName" /></el-form-item>
        <el-form-item label="负责人"><el-input v-model="addForm.manager" /></el-form-item>
        <el-form-item label="联系电话"><el-input v-model="addForm.phone" /></el-form-item>
        <el-form-item label="地址"><el-input v-model="addForm.address" /></el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="handleAdd">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑仓库" width="400px">
      <el-form :model="currentRow" label-width="80px">
        <el-form-item label="仓库编号"><el-input v-model="currentRow.warehouseNo" /></el-form-item>
        <el-form-item label="仓库名称"><el-input v-model="currentRow.warehouseName" /></el-form-item>
        <el-form-item label="负责人"><el-input v-model="currentRow.manager" /></el-form-item>
        <el-form-item label="联系电话"><el-input v-model="currentRow.phone" /></el-form-item>
        <el-form-item label="地址"><el-input v-model="currentRow.address" /></el-form-item>
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
  { warehouseNo: 'A', warehouseName: 'A库', manager: '张三', phone: '13800000001', address: '上海市浦东新区A路1号' },
  { warehouseNo: 'B', warehouseName: 'B库', manager: '李四', phone: '13800000002', address: '上海市浦东新区B路2号' },
  { warehouseNo: 'C', warehouseName: 'C库', manager: '王五', phone: '13800000003', address: '上海市浦东新区C路3号' },
  { warehouseNo: 'D', warehouseName: 'D库', manager: '赵六', phone: '13800000004', address: '上海市浦东新区D路4号' },
  { warehouseNo: 'E', warehouseName: 'E库', manager: '钱七', phone: '13800000005', address: '上海市浦东新区E路5号' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.warehouseNo.includes(filterText.value) || row.warehouseName.includes(filterText.value));
});
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const addForm = ref({ warehouseNo: '', warehouseName: '', manager: '', phone: '', address: '' });
const currentRow = ref({});
function handleAdd() {
  if (!addForm.value.warehouseNo) return;
  tableData.value.push({ ...addForm.value });
  addForm.value = { warehouseNo: '', warehouseName: '', manager: '', phone: '', address: '' };
  showAddDialog.value = false;
}
function handleEdit(row: any) {
  currentRow.value = { ...row };
  showEditDialog.value = true;
}
function handleSaveEdit() {
  const idx = tableData.value.findIndex(item => item.warehouseNo === currentRow.value.warehouseNo);
  if (idx !== -1) tableData.value[idx] = { ...currentRow.value };
  showEditDialog.value = false;
}
function handleDelete(row: any) {
  tableData.value = tableData.value.filter(item => item.warehouseNo !== row.warehouseNo);
}
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>
