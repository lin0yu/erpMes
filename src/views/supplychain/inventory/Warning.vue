<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-input v-model="filterText" placeholder="请输入物料名称或编号" style="width: 240px; float: right; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="materialNo" label="物料编号" align="center" />
      <el-table-column prop="materialName" label="物料名称" align="center" />
      <el-table-column prop="spec" label="规格型号" align="center" />
      <el-table-column prop="unit" label="单位" align="center" />
      <el-table-column prop="quantity" label="库存数量" align="center" />
      <el-table-column prop="min" label="最低库存" align="center" />
      <el-table-column prop="max" label="最高库存" align="center" />
      <el-table-column prop="warehouse" label="仓库" align="center" />
      <el-table-column prop="status" label="预警状态" align="center" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const tableData = ref([
  { materialNo: 'M001', materialName: '螺丝', spec: 'M6*20', unit: '个', quantity: 500, min: 1000, max: 10000, warehouse: 'A库', status: '低于最低库存' },
  { materialNo: 'M002', materialName: '螺母', spec: 'M6', unit: '个', quantity: 3500, min: 1000, max: 4000, warehouse: 'A库', status: '正常' },
  { materialNo: 'M003', materialName: '钢板', spec: '2mm', unit: '张', quantity: 10, min: 20, max: 200, warehouse: 'B库', status: '低于最低库存' },
  { materialNo: 'M004', materialName: '电机', spec: '1.5kW', unit: '台', quantity: 25, min: 10, max: 30, warehouse: 'C库', status: '正常' },
  { materialNo: 'M005', materialName: '轴承', spec: '6205', unit: '套', quantity: 250, min: 100, max: 500, warehouse: 'A库', status: '正常' },
  { materialNo: 'M006', materialName: '皮带', spec: 'A型', unit: '根', quantity: 5, min: 20, max: 100, warehouse: 'B库', status: '低于最低库存' },
  { materialNo: 'M007', materialName: '润滑油', spec: '18L', unit: '桶', quantity: 50, min: 10, max: 60, warehouse: 'C库', status: '正常' },
  { materialNo: 'M008', materialName: '气缸', spec: 'SC63*200', unit: '支', quantity: 2, min: 5, max: 30, warehouse: 'B库', status: '低于最低库存' },
  { materialNo: 'M009', materialName: 'PLC', spec: 'FX3U', unit: '台', quantity: 15, min: 5, max: 20, warehouse: 'C库', status: '正常' },
  { materialNo: 'M010', materialName: '传感器', spec: '光电', unit: '只', quantity: 100, min: 50, max: 200, warehouse: 'A库', status: '正常' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.materialNo.includes(filterText.value) || row.materialName.includes(filterText.value));
});
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>