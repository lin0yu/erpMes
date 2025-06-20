<template>
  <div class="login-container">
    <el-form :model="loginForm" ref="loginFormRef" class="login-form" @submit.native.prevent="onSubmit">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'
import jwtDecode from 'jwt-decode'
import { menuList } from '@/layouts/menuList.ts'
const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)
const loginForm = ref({ username: '', password: '' })
const loginFormRef = ref()

async function onSubmit() {
  
  loading.value = true
  try {    
    // 模拟登录请求，实际应替换为真实 API
    const res = await fakeLogin(loginForm.value)
    const token = res.token
    
    // jwt 校验与解析
    const payload:Payload = jwtDecode(token)
    
    userStore.setUserInfo({
      id: payload.id,
      username: payload.username,
      avatar: payload.avatar,
      role: payload.role,
      menus: payload.menus,
      token
    })
    // 跳转首页
    router.push('/')
  } catch (e) {
    alert('登录失败')
  } finally {
    loading.value = false
  }
}

// 模拟登录接口，返回 jwt token
function fakeLogin({ username, password }: { username: string; password: string }) {
  return new Promise<{ token: string }>((resolve) => {
    setTimeout(() => {
      // 这里用明文 jwt，仅演示用
      const payload = {
        id: '1',
        username,
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
        role: 'admin',
        menus: [
          ...menuList
          // 可根据实际权限返回菜单
        ]
      }
      // 生成标准 JWT 格式（header.payload.signature），仅演示用
      function utf8ToBase64(str: string) {
        return btoa(unescape(encodeURIComponent(str)))
      }
      const header = { alg: 'HS256', typ: 'JWT' }
      const token = `${utf8ToBase64(JSON.stringify(header))}.${utf8ToBase64(JSON.stringify(payload))}.demo-signature`
      resolve({ ...payload, token })
    }, 1000)
  })
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
}
.login-form {
  width: 320px;
  padding: 32px 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>