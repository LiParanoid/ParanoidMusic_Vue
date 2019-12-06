import Vue from 'vue'
import Router from 'vue-router'
import MusicComp from '@/components/MusicComp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MusicComp',
      component: MusicComp
    }
  ]
})
