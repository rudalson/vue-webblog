import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter);

const rejectAuthUser = (to, from, next) => {
    if (store.state.isLogin === true) {
        // 이미 로그인 된 유저
        alert("이미 로그인을 하였습니다.");
        next("/");
    } else {
        next();
    }
};

const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    // 아직 로그인이 안된 유저니까 막아야
    alert("로그인이 필요한 기능입니다.");
    next("/");
  } else {
    next();
  }
};

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../Home')
    },
    {
        path: '/login',
        name: 'login',
        beforeEnter: rejectAuthUser,
        component: () => import(/* webpackChunkName: "login" */ '../views/Login')
    },
    {
        path: '/mypage',
        name: 'mypage',
      beforeEnter: onlyAuthUser,
        component: () => import(/* webpackChunkName: "mypage" */ '../views/Mypage')
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
        redirect: {name: 'users'}
    },
    {
        path: '/*',
        redirect: {name: 'home'}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
