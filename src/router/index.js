import { createRouter, createWebHistory } from 'vue-router'
import TwoDim from '../views/TwoDim.vue'
import ThreeDim from '../views/ThreeDim.vue'
import Login from '../views/login.vue';
import Register from '../views/register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '2d',
      component: TwoDim
    },{
      path: '/3d',
      name: '3d',
      component: ThreeDim
    },{
      path: '/login',
      name: 'login',
      component: Login 
    },{
      path: '/register',
      name: 'register',
      component: Register 
    }
    // ,
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
