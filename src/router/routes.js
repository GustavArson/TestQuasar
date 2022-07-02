
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '' ,redirect: '/home'},
      { path: '/home', component: () => import('pages/IndexPage.vue') },
      { path: 'PageTest.vue', component: () => import('pages/PageTest.vue') }
    ]
  },

  {
    path: '/nouvellePage',
    name: 'NouvellePage',
    component: () => import('components/cardRestaurant.vue')
  },

  {
    path: '/restaurant',
    name: 'Restaurant',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Restaurant.vue') },
      { path: ':nom',name: 'detailRestaurant', component: () => import('components/DetailRestaurant.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
