import Vue from 'vue'
import Router from 'vue-router'
import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import Movie from '../pages/Movie'
import ProfilePage from '../pages/ProfilePage'

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
 {
   path:'/movie/:id',
   name:'Movie',
   component:Movie
},
{
  path:'/profile',
  name:ProfilePage,
  component:ProfilePage
}
    
  ]
 ,
  mode:'history'
})
