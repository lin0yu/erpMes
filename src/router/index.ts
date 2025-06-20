import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  // 财务管理
  {
    path: '/finance',
    name: 'Finance',
    component: () => import('@/views/finance/index.vue'),
    children: [
      { path: 'general-ledger', name: 'GeneralLedger', component: () => import('@/views/finance/general-ledger.vue') },
      { path: 'receivables', name: 'Receivables', component: () => import('@/views/finance/receivables.vue') },
      { path: 'payables', name: 'Payables', component: () => import('@/views/finance/payables.vue') },
      { path: 'fixed-assets', name: 'FixedAssets', component: () => import('@/views/finance/fixed-assets.vue') },
      { path: 'cost-accounting', name: 'CostAccounting', component: () => import('@/views/finance/cost-accounting.vue') },
      { path: 'budget', name: 'Budget', component: () => import('@/views/finance/budget.vue') }
    ]
  },
  // 供应链管理
  {
    path: '/supplychain',
    name: 'SupplyChain',
    component: () => import('@/views/supplychain/index.vue'),
    children: [
      { path: 'purchase', name: 'Purchase', component: () => import('@/views/supplychain/purchase.vue') },
      { path: 'sales', name: 'Sales', component: () => import('@/views/supplychain/sales.vue') },
      { path: 'inventory', name: 'Inventory', component: () => import('@/views/supplychain/inventory.vue') }
    ]
  },
  // 生产制造管理
  {
    path: '/production',
    name: 'Production',
    component: () => import('@/views/production/index.vue'),
    children: [
      { path: 'plan', name: 'ProductionPlan', component: () => import('@/views/production/plan.vue') },
      { path: 'order', name: 'ProductionOrder', component: () => import('@/views/production/order.vue') },
      { path: 'job', name: 'ProductionJob', component: () => import('@/views/production/job.vue') },
      { path: 'bom', name: 'ProductionBOM', component: () => import('@/views/production/bom.vue') },
      { path: 'routing', name: 'ProductionRouting', component: () => import('@/views/production/routing.vue') },
      { path: 'quality', name: 'ProductionQuality', component: () => import('@/views/production/quality.vue') }
    ]
  },
  // 人力资源管理
  {
    path: '/hr',
    name: 'HR',
    component: () => import('@/views/hr/index.vue'),
    children: [
      { path: 'employee', name: 'Employee', component: () => import('@/views/hr/employee.vue') },
      { path: 'recruitment', name: 'Recruitment', component: () => import('@/views/hr/recruitment.vue') },
      { path: 'salary', name: 'Salary', component: () => import('@/views/hr/salary.vue') },
      { path: 'performance', name: 'Performance', component: () => import('@/views/hr/performance.vue') },
      { path: 'training', name: 'Training', component: () => import('@/views/hr/training.vue') }
    ]
  },
  // 客户关系管理
  {
    path: '/crm',
    name: 'CRM',
    component: () => import('@/views/crm/index.vue'),
    children: [
      { path: 'customer', name: 'Customer', component: () => import('@/views/crm/customer.vue') },
      { path: 'marketing', name: 'Marketing', component: () => import('@/views/crm/marketing.vue') },
      { path: 'service', name: 'Service', component: () => import('@/views/crm/service.vue') }
    ]
  },
  // 项目管理
  {
    path: '/project',
    name: 'Project',
    component: () => import('@/views/project/index.vue'),
    children: [
      { path: 'project-list', name: 'ProjectList', component: () => import('@/views/project/project-list.vue') },
      { path: 'task', name: 'ProjectTask', component: () => import('@/views/project/task.vue') },
      { path: 'milestone', name: 'Milestone', component: () => import('@/views/project/milestone.vue') },
      { path: 'resource', name: 'ProjectResource', component: () => import('@/views/project/resource.vue') }
    ]
  },
  // 系统设置
  {
    path: '/system',
    name: 'System',
    component: () => import('@/views/system/index.vue'),
    children: [
      { path: 'user', name: 'User', component: () => import('@/views/system/user.vue') },
      { path: 'role', name: 'Role', component: () => import('@/views/system/role.vue') },
      { path: 'permission', name: 'Permission', component: () => import('@/views/system/permission.vue') },
      { path: 'menu', name: 'Menu', component: () => import('@/views/system/menu.vue') },
      { path: 'log', name: 'Log', component: () => import('@/views/system/log.vue') },
      { path: 'config', name: 'Config', component: () => import('@/views/system/config.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router