import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: '首页 - 大连文化宣传网' },
    },
    {
      path: '/city-intro',
      name: 'city-intro',
      component: () => import('../views/CityIntroView.vue'),
      meta: { title: '城市介绍 - 大连文化宣传网' },
    },
    {
      path: '/culture-events',
      name: 'culture-events',
      component: () => import('../views/CultureEventsView.vue'),
      meta: { title: '文化活动 - 大连文化宣传网' },
    },
    {
      path: '/city-services',
      name: 'city-services',
      component: () => import('../views/CityServicesView.vue'),
      meta: { title: '城市服务 - 大连文化宣传网' },
    },
    {
      path: '/scenic-spots',
      name: 'scenic-spots',
      component: () => import('../views/ScenicSpotsView.vue'),
      meta: { title: '经典景区 - 大连文化宣传网' },
    },
    {
      path: '/travel-guides',
      name: 'travel-guides',
      component: () => import('../views/TravelGuidesView.vue'),
      meta: { title: '游记攻略 - 大连文化宣传网' },
    },
    {
      path: '/food-guide',
      name: 'food-guide',
      component: () => import('../views/FoodGuideView.vue'),
      meta: { title: '特色美食 - 大连文化宣传网' },
    },
    {
      path: '/traffic',
      name: 'traffic',
      component: () => import('../views/TrafficView.vue'),
      meta: { title: '交通路线 - 大连文化宣传网' },
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || '大连文化宣传网'
  next()
})

export default router
