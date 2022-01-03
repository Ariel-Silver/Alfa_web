import Vue from 'vue'
import VueRouter from 'vue-router'
import Firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'Landing',
    component: () =>
      import(/* webpackChunkName: "landing" */'../views/Landing.vue')
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/LogIn.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/admin',
    name: 'Administracion',
    component: () =>
      import(/* webpackChunkName: "admin" */ '../views/Admin'),
    meta: {
      login: true
    }
  },
  {
    path: '/course-edit/:id',
    name: 'Edit',
    component: () =>
      import(/* webpackChunkName: "course-edit" */ '../views/Edit'),
    meta: {
      login: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    const user = Firebase.auth().currentUser
    if (user) {
      next()
    } else {
      next('login')
    }
  } else {
    next()
  }
})

export default router
