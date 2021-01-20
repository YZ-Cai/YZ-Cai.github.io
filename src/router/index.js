import Vue from 'vue'
import Router from 'vue-router'
import general from '@/components/general'
import welcome from '@/components/welcome'
import toys from '@/components/toys'
import photos from '@/components/photos'
import homepage from '@/components/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'general',
      component: general
    },
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/',
      name: 'photos',
      component: photos
    },
    {
      path: '/',
      name: 'toys',
      component: toys
    },
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
  ]
})
