
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/ajustes', component: () => import('src/pages/Ajustes.vue') },
      { path: '/favoritos', component: () => import('src/pages/Favoritos.vue') },
      { path: '/ordenar', component: () => import('src/pages/Ordenar.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
