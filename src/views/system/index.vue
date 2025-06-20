<template>
  <div class="system-index">
    <h1>系统设置</h1>
    <ul>
      <li><router-link to="/system/user">用户管理</router-link></li>
      <li><router-link to="/system/role">角色管理</router-link></li>
      <li><router-link to="/system/permission">权限管理</router-link></li>
      <li><router-link to="/system/menu">菜单管理</router-link></li>
      <li><router-link to="/system/log">操作日志</router-link></li>
      <li><router-link to="/system/config">系统参数</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.system-index {
  padding: 24px;
}
.system-index ul {
  list-style: none;
  padding: 0;
}
.system-index li {
  margin-bottom: 8px;
}
</style>