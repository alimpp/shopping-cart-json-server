import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    name: "base",
    redirect:"/home",
    component: () => import("@/layout/base/index.vue"),
    children: [
      {
        path:"/home",
        name: "home page",
        component: () => import("@/pages/homePage.vue"),
      },
      {
        path:"/about",
        name: "about page",
        component: () => import("@/pages/aboutPage.vue"),
      },
      {
        path:"/products",
        name: "products page",
        component: () => import("@/pages/productsPage.vue"),
      },
      {
        path:"/contact",
        name: "contact page",
        component: () => import("@/pages/contactPage.vue"),
      },
    ]
  } , 
  {
    path:"/login",
    name: "login admin page",
    component: () => import("@/pages/loginAdminPage.vue"),
  },
  {
    path:"/admin",
    name: "admin pannel page",
    component: () => import("@/pages/adminPannelPage.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name : "error",
    component: () => import("@/layout/error/index.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
