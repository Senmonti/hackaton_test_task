import { createRouter, createWebHistory } from 'vue-router'
import App from "@/App";
import TotalCount from "@/views/TotalCount";
import RegionCount from "@/views/RegionCount";

const routes = [
  {
    path: '/total',
    name: 'TotalCount',
    component: TotalCount
  },
  {
    path: '/region',
    name: 'RegionCount',
    component: RegionCount
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
