<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-input v-model="filterText" placeholder="请输入工序名称或设备" style="width: 240px; float: right; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="stepNo" label="工序序号" align="center" />
      <el-table-column prop="stepName" label="工序名称" align="center" />
      <el-table-column prop="equipment" label="设备" align="center" />
      <el-table-column prop="workHour" label="标准工时(小时)" align="center" />
      <el-table-column prop="remark" label="备注" align="center" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const tableData = ref([
  { stepNo: 1, stepName: '下料', equipment: '剪板机', workHour: 0.5, remark: '' },
  { stepNo: 2, stepName: '车削', equipment: '数控车床', workHour: 1.2, remark: '' },
  { stepNo: 3, stepName: '铣削', equipment: '加工中心', workHour: 1.0, remark: '' },
  { stepNo: 4, stepName: '钻孔', equipment: '钻床', workHour: 0.8, remark: '' },
  { stepNo: 5, stepName: '热处理', equipment: '热处理炉', workHour: 2.0, remark: '' },
  { stepNo: 6, stepName: '装配', equipment: '装配线', workHour: 1.5, remark: '' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.stepName.includes(filterText.value) || row.equipment.includes(filterText.value));
});
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>