import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "@/pages/Home";
import StudentList from "@/pages/StudentList";
import TeacherList from "@/pages/TeacherList";
import ResultsManagement from "@/pages/ResultsManagement";
Vue.use(VueRouter)

const routes = [
  {
    path:"",
    component:home
  },
  {
    path: "/StudentList",
    component: StudentList
  },
  {
    path: "/TeacherList",
    component: TeacherList
  },
  {
    path: "/ResultsManagement",
    component: ResultsManagement
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
