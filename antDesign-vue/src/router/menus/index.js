export default [
  {
    path: '/workplace',
    name: 'Workplace',
    component: () => import(/* webpackChunkName: "workplace" */ '@/views/Home.vue'),
    meta: { title: '工作台', menuIcon: 'appstore', keepAlive: true }
  },
  {
    path: '/company',
    name: 'company',
    redirect: '/company/comList',
    component: () => import(/* webpackChunkName: "company" */ '@/views/company/companyHome.vue'),
    meta: { title: '公司列表', menuIcon: 'appstore'},
    children: [
      {
        path: '/company/comList',
        name: 'comList',
        component: () => import(/* webpackChunkName: "company" */ '@/views/company/companyList.vue'),
        meta: { title: '公司列表', menuIcon: 'dribbble'}
      },
      {
        path: '/comList/comDetail',
        name: 'comDetail',
        component: () => import(/* webpackChunkName: "company" */ '@/views/company/comDetail.vue'),
        meta: { title: '公司详情页', menuIcon: 'dribbble'}
      }
    ]
  }
]