<template>
  <div class="hr-index">
    <h1>人力资源管理</h1>
    <ul>
      <li><router-link to="/hr/employee">员工信息管理</router-link></li>
      <li><router-link to="/hr/recruitment">招聘管理</router-link></li>
      <li><router-link to="/hr/salary">薪酬福利管理</router-link></li>
      <li><router-link to="/hr/performance">绩效考核管理</router-link></li>
      <li><router-link to="/hr/training">培训管理</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.hr-index {
  padding: 24px;
}
.hr-index ul {
  list-style: none;
  padding: 0;
}
.hr-index li {
  margin-bottom: 8px;
}
</style>