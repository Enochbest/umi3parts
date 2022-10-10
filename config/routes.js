export default [
  {
    path: '/',
    component: '@/layouts/base-layouts',
    routes:[
      { path: '/login', component: '@/pages/Login' },
      { path: '/reg', component: '@/pages/Reg' },
      { path: '/dva', component: '@/pages/dva' },

      {
        path: '/goods',
        wrappers:['@/wrappers/auth.tsx'],
        component: '@/layouts/aside',
        routes:[
          { path: '/goods', component: '@/pages/goods' },
          { path: '/goods/:id', component: '@/pages/goods/goods-detail' },
          { path: '/goods/:id/comment', component: '@/pages/goods/comment' },
        ]
      },
      { path: '/', redirect: '/login' },
      { component: '@/pages/404' },
    ]
  },
  { component: '@/pages/404' },
]
