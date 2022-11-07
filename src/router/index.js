import { createRouter, createWebHashHistory } from 'vue-router'
import IngeneerView from '../views/IngeneerView.vue'
import ConverterView from '../views/ConverterView.vue'
import WeightView from '../views/WeightView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IngeneerView
  },
  {
    path: '/converter',
    name: 'converter',
    component: ConverterView
  },
  {
    path: '/weight',
    name: 'weight',
    component: WeightView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
