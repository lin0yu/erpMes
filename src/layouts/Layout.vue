<template>
  <el-container style="height: 100vh">
    <el-aside :width="collapsed ? '64px' : '220px'" class="aside-custom" :class="{collapsed}">
      <div class="logo-area">
        <img src="/vite.svg" class="logo-img" />
        <span class="logo-title" v-if="!collapsed">ERP MES</span>
      </div>
      <el-menu :default-active="$route.path" router background-color="#263445" text-color="#fff" active-text-color="#ffd04b" :collapse="collapsed">
        <el-menu-item index="/">
          <i class="el-icon-house"></i>
          <span v-if="!collapsed">首页</span>
        </el-menu-item>
        <el-sub-menu index="/finance">
          <template #title><i class="el-icon-wallet"></i><span v-if="!collapsed">财务管理</span></template>
          <el-menu-item index="/finance/general-ledger">总账</el-menu-item>
          <el-menu-item index="/finance/receivables">应收管理</el-menu-item>
          <el-menu-item index="/finance/payables">应付管理</el-menu-item>
          <el-menu-item index="/finance/fixed-assets">固定资产</el-menu-item>
          <el-menu-item index="/finance/cost-accounting">成本核算</el-menu-item>
          <el-menu-item index="/finance/budget">预算管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/supplychain">
          <template #title><i class="el-icon-truck"></i><span v-if="!collapsed">供应链管理</span></template>
          <el-menu-item index="/supplychain/purchase">采购管理</el-menu-item>
          <el-menu-item index="/supplychain/sales">销售管理</el-menu-item>
          <el-menu-item index="/supplychain/inventory">库存管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/production">
          <template #title><i class="el-icon-collection"></i><span v-if="!collapsed">生产制造管理</span></template>
          <el-menu-item index="/production/plan">生产计划</el-menu-item>
          <el-menu-item index="/production/order">生产订单</el-menu-item>
          <el-menu-item index="/production/job">生产作业</el-menu-item>
          <el-menu-item index="/production/bom">物料清单</el-menu-item>
          <el-menu-item index="/production/routing">工艺路线</el-menu-item>
          <el-menu-item index="/production/quality">质量管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/hr">
          <template #title><i class="el-icon-user"></i><span v-if="!collapsed">人力资源管理</span></template>
          <el-menu-item index="/hr/employee">员工信息管理</el-menu-item>
          <el-menu-item index="/hr/recruitment">招聘管理</el-menu-item>
          <el-menu-item index="/hr/salary">薪酬福利管理</el-menu-item>
          <el-menu-item index="/hr/performance">绩效考核管理</el-menu-item>
          <el-menu-item index="/hr/training">培训管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/crm">
          <template #title><i class="el-icon-phone"></i><span v-if="!collapsed">客户关系管理</span></template>
          <el-menu-item index="/crm/customer">客户信息管理</el-menu-item>
          <el-menu-item index="/crm/marketing">市场营销管理</el-menu-item>
          <el-menu-item index="/crm/service">客户服务管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/project">
          <template #title><i class="el-icon-notebook-2"></i><span v-if="!collapsed">项目管理</span></template>
          <el-menu-item index="/project/project-list">项目列表</el-menu-item>
          <el-menu-item index="/project/task">任务管理</el-menu-item>
          <el-menu-item index="/project/milestone">里程碑管理</el-menu-item>
          <el-menu-item index="/project/resource">项目资源管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="/system">
          <template #title><i class="el-icon-setting"></i><span v-if="!collapsed">系统设置</span></template>
          <el-menu-item index="/system/user">用户管理</el-menu-item>
          <el-menu-item index="/system/role">角色管理</el-menu-item>
          <el-menu-item index="/system/permission">权限管理</el-menu-item>
          <el-menu-item index="/system/menu">菜单管理</el-menu-item>
          <el-menu-item index="/system/log">操作日志</el-menu-item>
          <el-menu-item index="/system/config">系统参数</el-menu-item>
        </el-sub-menu>
        <!-- 可扩展菜单项 -->
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header-custom">
        <div class="header-left">
          <el-button circle size="small" @click="toggleMenu" class="menu-toggle-btn">
            <i :class="collapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
          </el-button>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
            <template v-for="(item, idx) in breadcrumbList" :key="idx">
              <el-breadcrumb-item v-if="item && item.path" :to="item.path">{{ item.title }}</el-breadcrumb-item>
              <el-breadcrumb-item v-else-if="item">{{ item.title }}</el-breadcrumb-item>
            </template>
          </el-breadcrumb>
        </div>
        <div class="header-right">
          <el-avatar size="small" src="https://avatars.githubusercontent.com/u/1?v=4" />
          <span class="username">管理员</span>
        </div>
      </el-header>
      <el-main class="main-custom">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const collapsed = ref(false)
function toggleMenu() {
  collapsed.value = !collapsed.value
}

const route = useRoute()

const routeMap = [
  { path: '/finance', title: '财务管理', children: [
    { path: '/finance/general-ledger', title: '总账' },
    { path: '/finance/receivables', title: '应收管理' },
    { path: '/finance/payables', title: '应付管理' },
    { path: '/finance/fixed-assets', title: '固定资产' },
    { path: '/finance/cost-accounting', title: '成本核算' },
    { path: '/finance/budget', title: '预算管理' }
  ] },
  { path: '/supplychain', title: '供应链管理', children: [
    { path: '/supplychain/purchase', title: '采购管理' },
    { path: '/supplychain/sales', title: '销售管理' },
    { path: '/supplychain/inventory', title: '库存管理' }
  ] },
  { path: '/production', title: '生产制造管理', children: [
    { path: '/production/plan', title: '生产计划' },
    { path: '/production/order', title: '生产订单' },
    { path: '/production/job', title: '生产作业' },
    { path: '/production/bom', title: '物料清单' },
    { path: '/production/routing', title: '工艺路线' },
    { path: '/production/quality', title: '质量管理' }
  ] },
  { path: '/hr', title: '人力资源管理', children: [
    { path: '/hr/employee', title: '员工信息管理' },
    { path: '/hr/recruitment', title: '招聘管理' },
    { path: '/hr/salary', title: '薪酬福利管理' },
    { path: '/hr/performance', title: '绩效考核管理' },
    { path: '/hr/training', title: '培训管理' }
  ] },
  { path: '/crm', title: '客户关系管理', children: [
    { path: '/crm/customer', title: '客户信息管理' },
    { path: '/crm/marketing', title: '市场营销管理' },
    { path: '/crm/service', title: '客户服务管理' }
  ] },
  { path: '/project', title: '项目管理', children: [
    { path: '/project/project-list', title: '项目列表' },
    { path: '/project/task', title: '任务管理' },
    { path: '/project/milestone', title: '里程碑管理' },
    { path: '/project/resource', title: '项目资源管理' }
  ] },
  { path: '/system', title: '系统设置', children: [
    { path: '/system/user', title: '用户管理' },
    { path: '/system/role', title: '角色管理' },
    { path: '/system/permission', title: '权限管理' },
    { path: '/system/menu', title: '菜单管理' },
    { path: '/system/log', title: '操作日志' },
    { path: '/system/config', title: '系统参数' }
  ] }
]

const breadcrumbList = computed(() => {
  const path = route.path
  if (path === '/' || path === '') return []
  for (const mod of routeMap) {
    if (path.startsWith(mod.path)) {
      if (path === mod.path) {
        return [{ title: mod.title, path: mod.path }]
      }
      if (mod.children) {
        const child = mod.children.find(c => c.path === path)
        if (child) {
          return [
            { title: mod.title, path: mod.path },
            { title: child.title, path: child.path }
          ]
        }
      }
    }
  }
  return []
})
</script>

<style scoped>
.el-header.header-custom {
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 0 24px;
}
.header-left {
  display: flex;
  align-items: center;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 8px;
}
.username {
  font-size: 15px;
  color: #333;
}
.aside-custom {
  background: #263445;
  color: #fff;
  box-shadow: 2px 0 8px #f0f1f2;
  display: flex;
  flex-direction: column;
  padding-top: 0;
}
.logo-area {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background: #1a2233;
  margin-bottom: 8px;
}
.logo-img {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.logo-title {
  font-size: 20px;
  font-weight: bold;
  color: #ffd04b;
  letter-spacing: 1px;
}
.el-menu {
  border-right: none;
}
.el-menu-item {
  border-radius: 4px;
  margin: 4px 8px;
  transition: background 0.2s;
}
.el-menu-item.is-active {
  background: #304156 !important;
  color: #ffd04b !important;
}
.el-menu-item:hover {
  background: #34495e !important;
}
.main-custom {
  background: #f7f8fa;
  min-height: 100%;
  padding: 24px;
}
.aside-custom {
  transition: width 0.3s cubic-bezier(.4,0,.2,1);
}
.aside-custom.collapsed {
  width: 64px !important;
}
.logo-title {
  transition: opacity 0.3s;
}
.menu-toggle-btn {
  margin-right: 16px;
  background: #f7f8fa;
  border: none;
  color: #263445;
}
.menu-toggle-btn:hover {
  background: #e6e8eb;
}
</style>