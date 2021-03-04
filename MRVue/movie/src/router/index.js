import Vue from 'vue'
import Router from 'vue-router'
import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:"HomePage",
      component:HomePage
    },
    {
      path: '/signup',
     name: 'Signup',
     component: SignUpPage
   },
   {
    path: '/login',
   name: 'Login',
   component: LoginPage
 },
     
  ]
 ,
  mode:'history'
})
