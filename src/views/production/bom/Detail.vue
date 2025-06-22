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
      <el-table-column prop="quantity" label="用量" align="center" />
      <el-table-column prop="remark" label="备注" align="center" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const tableData = ref([
  { materialNo: 'M001', materialName: '电机壳体', spec: 'A型', unit: '件', quantity: 1, remark: '' },
  { materialNo: 'M002', materialName: '转子', spec: 'B型', unit: '件', quantity: 1, remark: '' },
  { materialNo: 'M003', materialName: '定子', spec: 'B型', unit: '件', quantity: 1, remark: '' },
  { materialNo: 'M004', materialName: '轴承', spec: '6202', unit: '个', quantity: 2, remark: '' },
  { materialNo: 'M005', materialName: '风叶', spec: '100mm', unit: '件', quantity: 1, remark: '' },
  { materialNo: 'M006', materialName: '端盖', spec: 'A型', unit: '件', quantity: 2, remark: '' },
  { materialNo: 'M007', materialName: '螺栓', spec: 'M8*30', unit: '个', quantity: 8, remark: '' },
  { materialNo: 'M008', materialName: '密封圈', spec: 'Φ50', unit: '个', quantity: 2, remark: '' }
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