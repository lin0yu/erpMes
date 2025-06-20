import { defineStore } from 'pinia'

export enum UserRole {
  Admin = 1,
  Manager = 2,
  Staff = 3
}

export interface UserInfo {
  id: string
  username: string
  avatar: string
  role: UserRole | number
  menus: any[]
  token: string
}

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
  }
})