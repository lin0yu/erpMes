<template>
  <div>
    <div style="overflow: hidden; margin-bottom: 16px;">
      <el-button type="primary" style="float: left; margin-bottom: 16px;" @click="openDialog('add')">新增工艺路线</el-button>
      <el-input v-model="filterText" placeholder="请输入工艺编号或产品名称" style="width: 240px; float: right; margin-bottom: 16px;" clearable />
    </div>
    <el-table :data="filteredData" style="width: 100%; clear: both; text-align: center;">
      <el-table-column prop="routingNo" label="工艺编号" align="center" />
      <el-table-column prop="product" label="产品名称" align="center" />
      <el-table-column prop="version" label="版本号" align="center" />
      <el-table-column prop="status" label="状态" align="center" />
      <el-table-column prop="creator" label="制定人" align="center" />
      <el-table-column prop="date" label="制定日期" align="center" />
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button size="small" type="primary" @click="openDialog('edit', scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog :title="dialogTitle" v-model="dialogVisible" width="500px">
    <el-form :model="form" label-width="100px">
      <el-form-item label="工艺编号">
        <el-input v-model="form.routingNo" />
      </el-form-item>
      <el-form-item label="产品名称">
        <el-input v-model="form.product" />
      </el-form-item>
      <el-form-item label="版本号">
        <el-input v-model="form.version" />
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="form.status">
          <el-option label="启用" value="启用" />
          <el-option label="停用" value="停用" />
        </el-select>
      </el-form-item>
      <el-form-item label="制定人">
        <el-input v-model="form.creator" />
      </el-form-item>
      <el-form-item label="制定日期">
        <el-date-picker v-model="form.date" type="date" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleSave">保存</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessageBox } from 'element-plus';
import { ref, computed } from 'vue';
const tableData = ref([
  { routingNo: 'RT20240101', product: '电机', version: 'V1.0', status: '启用', creator: '张三', date: '2024-01-11' },
  { routingNo: 'RT20240102', product: '减速机', version: 'V1.1', status: '启用', creator: '李四', date: '2024-01-13' },
  { routingNo: 'RT20240103', product: '齿轮箱', version: 'V2.0', status: '停用', creator: '王五', date: '2024-01-16' },
  { routingNo: 'RT20240104', product: '皮带轮', version: 'V1.0', status: '启用', creator: '赵六', date: '2024-01-19' },
  { routingNo: 'RT20240105', product: '链条', version: 'V1.2', status: '启用', creator: '钱七', date: '2024-01-21' },
  { routingNo: 'RT20240106', product: '轴承', version: 'V1.0', status: '停用', creator: '孙八', date: '2024-01-23' },
  { routingNo: 'RT20240107', product: '传感器', version: 'V1.0', status: '启用', creator: '周九', date: '2024-01-26' },
  { routingNo: 'RT20240108', product: 'PLC', version: 'V1.0', status: '启用', creator: '吴十', date: '2024-01-29' }
]);
const filterText = ref('');
const filteredData = computed(() => {
  if (!filterText.value) return tableData.value;
  return tableData.value.filter(row => row.routingNo.includes(filterText.value) || row.product.includes(filterText.value));
});

const dialogVisible = ref(false);
const dialogTitle = ref('');
const form = ref({ routingNo: '', product: '', version: '', status: '启用', creator: '', date: '' });
let editIndex = -1;

function openDialog(type, row) {
  if (type === 'add') {
    dialogTitle.value = '新增工艺路线';
    form.value = { routingNo: '', product: '', version: '', status: '启用', creator: '', date: '' };
    editIndex = -1;
  } else if (type === 'edit') {
    dialogTitle.value = '编辑工艺路线';
    form.value = { ...row };
    editIndex = tableData.value.findIndex(item => item.routingNo === row.routingNo);
  }
  dialogVisible.value = true;
}

function handleSave() {
  if (editIndex === -1) {
    tableData.value.push({ ...form.value });
  } else {
    tableData.value[editIndex] = { ...form.value };
  }
  dialogVisible.value = false;
}

function handleDelete(row) {
  ElMessageBox.confirm('确定要删除该工艺路线吗？', '提示', { type: 'warning' })
    .then(() => {
      const index = tableData.value.findIndex(item => item.routingNo === row.routingNo);
      if (index !== -1) tableData.value.splice(index, 1);
    });
}
</script>

<style scoped>
.el-table {
  clear: both;
}
</style>