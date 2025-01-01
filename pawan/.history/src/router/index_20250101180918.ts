import {createRouter,createWebHistory} from 'vue-router'
const routes  =[
  {
    path:'/',component:()=>import('../views/HomeView.vue')
  },
    {
      path:'/about' ,componentL()=>import('../views/AboutView.vue')
    }, 
]

const router =createRouter({
  
})