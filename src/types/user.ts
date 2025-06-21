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