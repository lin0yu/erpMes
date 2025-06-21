import type { UserInfo } from '@/types/user'
import { defineStore } from 'pinia'
// @ts-ignore
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


export const useUserStore = defineStore('user', {
  state: (): UserInfo => ({
    id: '',
    username: '',
    avatar: '',
    role: 0,
    menus: [],
    token: ''
  }),
  actions: {
    setUserInfo(user: Partial<UserInfo>) { 
      Object.assign(this, user)
    },
    logout() {
      this.id = ''
      this.username = ''
      this.avatar = ''
      this.role = 0
      this.menus = []
      this.token = ''
    }
  },
  persist: true
})