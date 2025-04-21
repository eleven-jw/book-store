import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import(/* webpackChunkName: "Layout" */ '../views/Layout/LayoutView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "Login" */ '../views/Login/LoginView.vue'),
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import(/* webpackChunkName: "Detail" */ '../views/Detail/BookDetail.vue'),
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart/CartView.vue'),
    },
  ],
})
export default router
