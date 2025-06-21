<template>
  <el-container style="height: 100vh">
    <el-aside :width="collapsed ? '64px' : '220px'" class="aside-custom" :class="{collapsed}" v-if="userStore.token">
      <div class="logo-area">
        <img src="/vite.svg" class="logo-img" />
        <span class="logo-title" v-if="!collapsed">ERP MES</span>
      </div>
      <el-menu :default-active="$route.path" router background-color="#263445" text-color="#fff" active-text-color="#ffd04b" :collapse="collapsed">
        <el-menu-item index="/">
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
          <el-dropdown trigger="hover">
            <span class="avatar-dropdown-trigger">
              <el-avatar size="small" :src="userStore.avatar || 'https://avatars.githubusercontent.com/u/1?v=4'" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="onChangePassword">修改密码</el-dropdown-item>
                <el-dropdown-item divided @click="onLogout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span class="username">{{ userStore.username }}</span>
          <span class="role">({{ userStore.role }})</span>
        </div>
      </el-header>
      <!-- <el-tabs v-if="currentMainMenu" v-model="activeSubMenu" @tab-click="onTabClick" class="submenu-tabs" style="margin-bottom: 0; border-bottom: 1px solid #eee;">
        <el-tab-pane v-for="sub in currentMainMenu.children" :key="sub.index" :label="sub.title" :name="sub.index"></el-tab-pane>
      </el-tabs> -->
      <el-main class="main-custom">
        <router-view />
      </el-main>
    </el-container>
    <el-dialog v-model="showPwdDialog" title="修改密码" width="400px">
      <el-form :model="pwdForm" :rules="pwdRules" ref="pwdFormRef" label-width="90px">
        <el-form-item label="旧密码" prop="oldPwd">
          <el-input v-model="pwdForm.oldPwd" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="新密码" prop="newPwd">
          <el-input v-model="pwdForm.newPwd" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="确认新密码" prop="confirmPwd">
          <el-input v-model="pwdForm.confirmPwd" type="password" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showPwdDialog = false">取消</el-button>
        <el-button type="primary" @click="submitPwd">确定</el-button>
      </template>
    </el-dialog>
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
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const showPwdDialog = ref(false)
const pwdFormRef = ref()
const pwdForm = reactive({
  oldPwd: '',
  newPwd: '',
  confirmPwd: ''
})
const pwdRules = {
  oldPwd: [
    { required: true, message: '请输入旧密码', trigger: 'blur' }
  ],
  newPwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, message: '新密码至少6位', trigger: 'blur' }
  ],
  confirmPwd: [
    { required: true, message: '请再次输入新密码', trigger: 'blur' },
    { validator: (rule: any, value: string, callback: any) => {
        if (value !== pwdForm.newPwd) {
          callback(new Error('两次输入的新密码不一致'))
        } else {
          callback()
        }
      }, trigger: 'blur' }
  ]
}
function onChangePassword() {
  showPwdDialog.value = true
}
function submitPwd() {
  pwdFormRef.value.validate((valid: boolean) => {
    if (valid) {
      // TODO: 调用后端接口修改密码
      ElMessage.success('密码修改成功')
      showPwdDialog.value = false
      pwdForm.oldPwd = ''
      pwdForm.newPwd = ''
      pwdForm.confirmPwd = ''
    }
  })
}
function onLogout() {
  userStore.logout()
  router.push('/login')
}
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
.submenu-tabs{
  padding: 0 16px;
  background-color: transparent;
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
  padding:0 24px 0;
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
