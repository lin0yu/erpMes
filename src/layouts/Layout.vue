<template>
  <el-container style="height: 100vh">
    <el-aside :width="collapsed ? '64px' : '220px'" class="aside-custom" :class="{collapsed}" v-if="userStore.token">
      <div class="logo-area">
        <img src="/vite.svg" class="logo-img" />
        <span class="logo-title" v-if="!collapsed">ERP MES</span>
      </div>
      <el-menu :default-active="$route.path" router background-color="#263445" text-color="#fff" active-text-color="#ffd04b" :collapse="collapsed">
        <el-menu-item index="/">
          <i class="el-icon-house"></i>
          <span v-if="!collapsed">首页</span>
        </el-menu-item>
        <template v-for="menu in menuList" :key="menu.index">
          <el-sub-menu :index="menu.index">
            <template #title>
              <i :class="menu.icon"></i>
              <span v-if="!collapsed">{{ menu.title }}</span>
            </template>
            <el-menu-item v-for="item in menu.children" :key="item.index" :index="item.index">{{ item.title }}</el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="header-custom">
        <div class="header-left">
          <el-button circle size="small" @click="toggleMenu" class="menu-toggle-btn">
            <Expand v-if="collapsed" style="width: 2em; height: 2em; margin-right: 8px" />
            <Fold v-else style="width: 2em; height: 2em; margin-right: 8px" />
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
          <el-avatar size="small" :src="userStore.avatar || 'https://avatars.githubusercontent.com/u/1?v=4'" />
          <span class="username">{{ userStore.username }}</span>
          <span class="role">({{ userStore.role }})</span>
        </div>
      </el-header>
      <el-main class="main-custom">
        <el-tabs v-if="currentMainMenu" v-model="activeSubMenu" @tab-click="onTabClick" class="submenu-tabs">
            <el-tab-pane v-for="sub in currentMainMenu.children" :key="sub.index" :label="sub.title" :name="sub.index"></el-tab-pane>
          </el-tabs>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Fold, Expand } from '@element-plus/icons-vue'
import { menuList } from './menuList'
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
const collapsed = ref(false)
function toggleMenu() {
  collapsed.value = !collapsed.value
}
const route = useRoute()
const router = useRouter()

// 当前主菜单
const currentMainMenu = computed(() => {
  return menuList.find(menu => route.path.startsWith(menu.index))
})
// 当前二级菜单 index
const activeSubMenu = ref('')
watch(
  () => route.path,
  (newPath) => {
    if (currentMainMenu.value && currentMainMenu.value.children) {
      const found = currentMainMenu.value.children.find(sub => newPath.startsWith(sub.index))
      activeSubMenu.value = found ? found.index : (currentMainMenu.value.children[0]?.index || '')
    }
  },
  { immediate: true }
)
function onTabClick(tab: any) {
  router.push(tab.paneName)
}

// 用 menuList 生成面包屑映射
function findBreadcrumb(path:string) {
  for (const menu of menuList) {
    if (menu.index === path) {
      return [{ title: menu.title, path: menu.index }]
    }
    if (menu.children) {
      for (const child of menu.children) {
        if (child.index === path) {
          return [
            { title: menu.title, path: menu.index },
            { title: child.title, path: child.index }
          ]
        }
      }
    }
  }
  return []
}

const breadcrumbList = computed(() => {
  const path = route.path
  if (path === '/' || path === '') return []
  return findBreadcrumb(path)
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