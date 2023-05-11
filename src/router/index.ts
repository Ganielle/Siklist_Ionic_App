import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'getstarted',
    component: () => import('@/views/Splashscreen.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/Welcome/Welcome.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard/Dashboard.vue'),
    redirect: '/dashboard/settings',
    children: [
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/Dashboard/Pages/Settings.vue')
      },
      {
        path: 'settings/aboutapp',
        name: 'aboutapp',
        component: () => import('@/views/Dashboard/Pages/Settings/Information/Aboutapp.vue')
      },
      {
        path: 'settings/termsofuse',
        name: 'termsofuse',
        component: () => import('@/views/Dashboard/Pages/Settings/Information/Termsofuse.vue')
      },
      {
        path: 'settings/privacypolicy',
        name: 'privacypolicy',
        component: () => import('@/views/Dashboard/Pages/Settings/Information/Privacypolicy.vue')
      },
      {
        path: 'settings/contactus',
        name: 'contactus',
        component: () => import('@/views/Dashboard/Pages/Settings/Information/Contactus.vue')
      }
    ]
  }
  // {
  //   path: '/',
  //   redirect: '/tabs/tab1'
  // },
  // {
  //   path: '/tabs/',
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: '',
  //       redirect: '/tabs/tab1'
  //     },
  //     {
  //       path: 'tab1',
  //       component: () => import('@/views/Tab1Page.vue')
  //     },
  //     {
  //       path: 'tab2',
  //       component: () => import('@/views/Tab2Page.vue')
  //     },
  //     {
  //       path: 'tab3',
  //       component: () => import('@/views/Tab3Page.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
