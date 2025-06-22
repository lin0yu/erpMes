export const menuList = [
  {
    index: '/finance',
    icon: 'el-icon-wallet',
    title: '财务管理',
    children: [
      { index: '/finance/general-ledger', title: '总账' },
      { index: '/finance/receivables', title: '应收管理', children: [
        { index: '/finance/receivables/collection', title: '客户收款' },
        { index: '/finance/receivables/notes', title: '应收票据管理' },
        { index: '/finance/receivables/writeoff', title: '应收账款核销' },
        { index: '/finance/receivables/aging', title: '账龄分析' }
      ] },
      { index: '/finance/payables', title: '应付管理' },
      { index: '/finance/fixed-assets', title: '固定资产' },
      { index: '/finance/cost-accounting', title: '成本核算' },
      { index: '/finance/budget', title: '预算管理' }
    ]
  },
  {
    index: '/supplychain',
    icon: 'el-icon-truck',
    title: '供应链管理',
    children: [
      { index: '/supplychain/purchase', title: '采购管理' },
      { index: '/supplychain/sales', title: '销售管理' },
      { index: '/supplychain/inventory', title: '库存管理' }
    ]
  },
  {
    index: '/production',
    icon: 'el-icon-collection',
    title: '生产制造管理',
    children: [
      { index: '/production/plan', title: '生产计划' },
      { index: '/production/order', title: '生产订单' },
      { index: '/production/job', title: '生产作业' },
      { index: '/production/bom', title: '物料清单' },
      { index: '/production/routing', title: '工艺路线' },
      { index: '/production/quality', title: '质量管理' }
    ]
  },
  {
    index: '/hr',
    icon: 'el-icon-user',
    title: '人力资源管理',
    children: [
      { index: '/hr/employee', title: '员工信息管理' },
      { index: '/hr/recruitment', title: '招聘管理' },
      { index: '/hr/salary', title: '薪酬福利管理' },
      { index: '/hr/performance', title: '绩效考核管理' },
      { index: '/hr/training', title: '培训管理' }
    ]
  },
  {
    index: '/crm',
    icon: 'el-icon-phone',
    title: '客户关系管理',
    children: [
      { index: '/crm/customer', title: '客户信息管理' },
      { index: '/crm/marketing', title: '市场营销管理' },
      { index: '/crm/service', title: '客户服务管理' }
    ]
  },
  {
    index: '/project',
    icon: 'el-icon-notebook-2',
    title: '项目管理',
    children: [
      { index: '/project/project-list', title: '项目列表' },
      { index: '/project/task', title: '任务管理' },
      { index: '/project/milestone', title: '里程碑管理' },
      { index: '/project/resource', title: '项目资源管理' }
    ]
  },
  {
    index: '/system',
    icon: 'el-icon-setting',
    title: '系统设置',
    children: [
      { index: '/system/user', title: '用户管理' },
      { index: '/system/role', title: '角色管理' },
      { index: '/system/permission', title: '权限管理' },
      { index: '/system/menu', title: '菜单管理' },
      { index: '/system/log', title: '操作日志' },
      { index: '/system/config', title: '系统参数' }
    ]
  }
]