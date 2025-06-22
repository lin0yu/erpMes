<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;" @click="showAddDialog = true">新增库存</el-button>
      <el-input v-model="filterText" placeholder="请输入物料名称或编号" style="width: 240px; float: right; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="materialNo" label="物料编号" align="center" />
      <el-table-column prop="materialName" label="物料名称" align="center" />
      <el-table-column prop="spec" label="规格型号" align="center" />
      <el-table-column prop="unit" label="单位" align="center" />
      <el-table-column prop="quantity" label="库存数量" align="center" />
      <el-table-column prop="warehouse" label="仓库" align="center" />
      <el-table-column prop="location" label="库位" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

<el-dialog v-model="showAddDialog" title="新增库存" width="400px">
  <el-form :model="addForm" label-width="80px">
    <el-form-item label="物料编号"><el-input v-model="addForm.materialNo" /></el-form-item>
    <el-form-item label="物料名称"><el-input v-model="addForm.materialName" /></el-form-item>
    <el-form-item label="规格型号"><el-input v-model="addForm.spec" /></el-form-item>
    <el-form-item label="单位"><el-input v-model="addForm.unit" /></el-form-item>
    <el-form-item label="库存数量"><el-input v-model="addForm.quantity" type="number" /></el-form-item>
    <el-form-item label="仓库"><el-input v-model="addForm.warehouse" /></el-form-item>
    <el-form-item label="库位"><el-input v-model="addForm.location" /></el-form-item>
  </el-form>
  <template #footer>
    <el-button @click="showAddDialog = false">取消</el-button>
    <el-button type="primary" @click="handleAdd">确定</el-button>
  </template>
</el-dialog>
<el-dialog v-model="showEditDialog" title="编辑库存" width="400px">
  <el-form :model="currentRow" label-width="80px">
    <el-form-item label="物料编号"><el-input v-model="currentRow.materialNo" /></el-form-item>
    <el-form-item label="物料名称"><el-input v-model="currentRow.materialName" /></el-form-item>
    <el-form-item label="规格型号"><el-input v-model="currentRow.spec" /></el-form-item>
    <el-form-item label="单位"><el-input v-model="currentRow.unit" /></el-form-item>
    <el-form-item label="库存数量"><el-input v-model="currentRow.quantity" type="number" /></el-form-item>
    <el-form-item label="仓库"><el-input v-model="currentRow.warehouse" /></el-form-item>
    <el-form-item label="库位"><el-input v-model="currentRow.location" /></el-form-item>
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
  { materialNo: 'M001', materialName: '螺丝', spec: 'M6*20', unit: '个', quantity: 5000, warehouse: 'A库', location: 'A-01' },
  { materialNo: 'M002', materialName: '螺母', spec: 'M6', unit: '个', quantity: 3000, warehouse: 'A库', location: 'A-02' },
  { materialNo: 'M003', materialName: '钢板', spec: '2mm', unit: '张', quantity: 120, warehouse: 'B库', location: 'B-01' },
  { materialNo: 'M004', materialName: '电机', spec: '1.5kW', unit: '台', quantity: 15, warehouse: 'C库', location: 'C-01' },
  { materialNo: 'M005', materialName: '轴承', spec: '6205', unit: '套', quantity: 200, warehouse: 'A库', location: 'A-03' },
  { materialNo: 'M006', materialName: '皮带', spec: 'A型', unit: '根', quantity: 80, warehouse: 'B库', location: 'B-02' },
  { materialNo: 'M007', materialName: '润滑油', spec: '18L', unit: '桶', quantity: 30, warehouse: 'C库', location: 'C-02' },
  { materialNo: 'M008', materialName: '气缸', spec: 'SC63*200', unit: '支', quantity: 25, warehouse: 'B库', location: 'B-03' },
  { materialNo: 'M009', materialName: 'PLC', spec: 'FX3U', unit: '台', quantity: 10, warehouse: 'C库', location: 'C-03' },
  { materialNo: 'M010', materialName: '传感器', spec: '光电', unit: '只', quantity: 60, warehouse: 'A库', location: 'A-04' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.materialNo.includes(filterText.value) || row.materialName.includes(filterText.value));
});
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const addForm = ref({ materialNo: '', materialName: '', spec: '', unit: '', quantity: 0, warehouse: '', location: '' });
const currentRow = ref({});
function handleAdd() {
  if (!addForm.value.materialNo) return;
  tableData.value.push({ ...addForm.value });
  addForm.value = { materialNo: '', materialName: '', spec: '', unit: '', quantity: 0, warehouse: '', location: '' };
  showAddDialog.value = false;
}
function handleEdit(row: any) {
  currentRow.value = { ...row };
  showEditDialog.value = true;
}
function handleSaveEdit() {
  const idx = tableData.value.findIndex(item => item.materialNo === currentRow.value.materialNo);
  if (idx !== -1) tableData.value[idx] = { ...currentRow.value };
  showEditDialog.value = false;
}
function handleDelete(row: any) {
  tableData.value = tableData.value.filter(item => item.materialNo !== row.materialNo);
}
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>
