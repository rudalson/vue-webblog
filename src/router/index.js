import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../Home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users'),
    children: [
      {
        path: ":id",
        name: "users-detail",
        component: () => import(/* webpackChunkName: "users-detail" */ '../views/UsersDetail'),
      },
      {
        path: ":id/edit",
        name: "users-edit",
        component: () => import(/* webpackChunkName: "users-editl" */ '../views/UsersEdit'),
      }
    ]
  },
  {
    path: '/redirect-me',
    redirect: { name: 'users'}
  },
  {
    path: '/*',
    redirect: { name: 'home'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
