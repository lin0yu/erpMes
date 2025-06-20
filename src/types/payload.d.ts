declare interface Payload {
  id: string
  username: string
  avatar: string
  role: UserRole | number
  menus: any[]
  [key: string]: any
}