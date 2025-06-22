<template>
  <div>
    <el-button type="primary" style="margin-bottom: 16px; float: left;" @click="showAddDialog = true">新增分析</el-button>
    <el-table :data="tableData" class="full-table" style="width: 100%; min-width: 900px; clear: both;">
      <el-table-column prop="analysisNo" label="分析编号" align="center" />
      <el-table-column prop="period" label="期间" align="center" />
      <el-table-column prop="summary" label="分析摘要" align="center" />
      <el-table-column prop="remark" label="备注" align="center" />
      <el-table-column label="操作" align="center" width="160">
        <template #default="scope">
          <el-button size="small" @click="editRow(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="deleteRow(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showAddDialog" title="新增分析" width="400px">
      <el-form :model="form">
        <el-form-item label="分析编号">
          <el-input v-model="form.analysisNo" />
        </el-form-item>
        <el-form-item label="期间">
          <el-input v-model="form.period" />
        </el-form-item>
        <el-form-item label="分析摘要">
          <el-input v-model="form.summary" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remark" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="addRow">确定</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="showEditDialog" title="编辑分析" width="400px">
      <el-form :model="form">
        <el-form-item label="分析编号">
          <el-input v-model="form.analysisNo" />
        </el-form-item>
        <el-form-item label="期间">
          <el-input v-model="form.period" />
        </el-form-item>
        <el-form-item label="分析摘要">
          <el-input v-model="form.summary" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.remark" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showEditDialog = false">取消</el-button>
        <el-button type="primary" @click="saveEdit">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
type CostAnalysis = {
  analysisNo: string;
  period: string;
  summary: string;
  remark: string;
};
const tableData = ref<CostAnalysis[]>([
  { analysisNo: 'AN20240601', period: '2024-06', summary: '本月成本上升', remark: '' },
  { analysisNo: 'AN20240602', period: '2024-05', summary: '成本下降', remark: '' }
]);
const showAddDialog = ref(false);
const showEditDialog = ref(false);
const form = ref<CostAnalysis>({ analysisNo: '', period: '', summary: '', remark: '' });
let editIndex = -1;
function addRow() {
  tableData.value.push({ ...form.value });
  showAddDialog.value = false;
  form.value = { analysisNo: '', period: '', summary: '', remark: '' };
}
function editRow(row: CostAnalysis) {
  editIndex = tableData.value.indexOf(row);
  form.value = { ...row };
  showEditDialog.value = true;
}
function saveEdit() {
  if (editIndex !== -1) {
    tableData.value[editIndex] = { ...form.value };
    showEditDialog.value = false;
    form.value = { analysisNo: '', period: '', summary: '', remark: '' };
    editIndex = -1;
  }
}
function deleteRow(row: CostAnalysis) {
  tableData.value = tableData.value.filter(item => item !== row);
}
</script>

<style scoped>
.el-table.full-table {
  width: 100%;
  min-width: 900px;
}
.el-table th, .el-table td {
  text-align: center;
}
</style>