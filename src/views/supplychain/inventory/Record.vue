<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-date-picker v-model="dateRange" type="daterange" range-separator="至" start-placeholder="开始日期"
        end-placeholder="结束日期" style="float: left; margin-bottom: 16px; margin-right: 16px;" />
      <el-input v-model="filterText" placeholder="请输入物料名称或单据号" style="width: 240px; float: left; margin-bottom: 16px;"
        clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="recordNo" label="单据号" align="center" />
      <el-table-column prop="type" label="类型" align="center" />
      <el-table-column prop="materialName" label="物料名称" align="center" />
      <el-table-column prop="spec" label="规格型号" align="center" />
      <el-table-column prop="quantity" label="数量" align="center" />
      <el-table-column prop="warehouse" label="仓库" align="center" />
      <el-table-column prop="date" label="日期" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="primary" @click="handleDetail(scope.row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="showDetailDialog" title="出入库明细详情" width="400px">
      <el-descriptions :column="1" border>
        <el-descriptions-item label="单据号">{{ detailRow.recordNo }}</el-descriptions-item>
        <el-descriptions-item label="类型">{{ detailRow.type }}</el-descriptions-item>
        <el-descriptions-item label="物料名称">{{ detailRow.materialName }}</el-descriptions-item>
        <el-descriptions-item label="规格型号">{{ detailRow.spec }}</el-descriptions-item>
        <el-descriptions-item label="数量">{{ detailRow.quantity }}</el-descriptions-item>
        <el-descriptions-item label="仓库">{{ detailRow.warehouse }}</el-descriptions-item>
        <el-descriptions-item label="日期">{{ detailRow.date }}</el-descriptions-item>
      </el-descriptions>
      <template #footer>
        <el-button @click="showDetailDialog = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const tableData = ref([
  { recordNo: 'RK20240101', type: '入库', materialName: '螺丝', spec: 'M6*20', quantity: 1000, warehouse: 'A库', date: '2024-01-10' },
  { recordNo: 'CK20240101', type: '出库', materialName: '螺母', spec: 'M6', quantity: 500, warehouse: 'A库', date: '2024-01-12' },
  { recordNo: 'RK20240102', type: '入库', materialName: '钢板', spec: '2mm', quantity: 20, warehouse: 'B库', date: '2024-01-13' },
  { recordNo: 'CK20240102', type: '出库', materialName: '电机', spec: '1.5kW', quantity: 2, warehouse: 'C库', date: '2024-01-14' },
  { recordNo: 'RK20240103', type: '入库', materialName: '轴承', spec: '6205', quantity: 50, warehouse: 'A库', date: '2024-01-15' },
  { recordNo: 'CK20240103', type: '出库', materialName: '皮带', spec: 'A型', quantity: 10, warehouse: 'B库', date: '2024-01-16' },
  { recordNo: 'RK20240104', type: '入库', materialName: '润滑油', spec: '18L', quantity: 5, warehouse: 'C库', date: '2024-01-17' },
  { recordNo: 'CK20240104', type: '出库', materialName: '气缸', spec: 'SC63*200', quantity: 3, warehouse: 'B库', date: '2024-01-18' },
  { recordNo: 'RK20240105', type: '入库', materialName: 'PLC', spec: 'FX3U', quantity: 2, warehouse: 'C库', date: '2024-01-19' },
  { recordNo: 'CK20240105', type: '出库', materialName: '传感器', spec: '光电', quantity: 8, warehouse: 'A库', date: '2024-01-20' }
]);
const filterText = ref('');
const dateRange = ref([]);
const filteredData = computed(() => {
  let data = tableData.value;
  if (filterText.value) {
    data = data.filter(row => row.materialName.includes(filterText.value) || row.recordNo.includes(filterText.value));
  }
  if (dateRange.value && dateRange.value.length === 2) {
    const [start, end] = dateRange.value;
    data = data.filter(row => row.date >= start && row.date <= end);
  }
  return data;
});
const showDetailDialog = ref(false);
const detailRow = ref({});
function handleDetail(row: any) {
  detailRow.value = { ...row };
  showDetailDialog.value = true;
}
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>
