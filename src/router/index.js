import { createRouter, createWebHistory } from 'vue-router'
import Expenses from '@/pages/Expenses.vue'
import Employees from '@/pages/Employees.vue'
import Dashboard1 from '@/pages/Dashboard.vue'
import Apartments1 from '@/pages/Apartments.vue'
import RentedRooms1 from '@/pages/RentedRooms.vue'
import MyCalendar1 from '@/pages/MyCalendar.vue'

const routes = [
  { path: '/', component: Dashboard1 },
  { path: '/apartments', component: Apartments1 },
  { path: '/rentedRooms', component: RentedRooms1 },
  { path: '/calendar', component: MyCalendar1 },
  { path: '/expenses', component: Expenses },
  { path: '/employees', component: Employees },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router