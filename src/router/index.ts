import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { menuList } from '@/layouts/menuList'
import { useUserStore } from '@/store/user'

const modules = import.meta.glob('../views/**/*.vue')

function getComponent(path: string) {
  const key = `../views${path}.vue`
  return modules[key] ? modules[key] : () => Promise.reject(new Error('Component not found: ' + key))
}

function generateRoutesFromMenu(menuList: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'Home',
      component: getComponent('/Home')
    },
    {
      path: '/login',
      name: 'Login',
      component: getComponent('/Login')
    }
  ]
  for (const menu of menuList) {
    const parentRoute: RouteRecordRaw = {
      path: menu.index,
      name: menu.title,
      component: getComponent(menu.index + '/index'),
      children: [] as RouteRecordRaw[]
    }
    if (menu.children) {
      for (const child of menu.children) {
        parentRoute.children!.push({
          path: child.index.replace(menu.index + '/', ''),
          name: child.title,
          component: getComponent(child.index)
        } as RouteRecordRaw)
      }
    }
    routes.push(parentRoute)
  }
  return routes
}

const routes = generateRoutesFromMenu(menuList)

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.path !== '/login' && !userStore.token) {
    next('/login')
  } else if (to.path === '/login' && userStore.token) {
    next('/')
  } else {
    next()
  }
})

export default router