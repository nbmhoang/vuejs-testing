import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/Home.vue'
import Create from "@/views/Create.vue";
import Edit from "@/views/Edit.vue";
import Index from "@/views/Index.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Test.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
