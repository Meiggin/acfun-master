import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import searches from '@/components/searches'
import donghua from '@/components/donghua'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path:'/searches',
    	name:'search',
    	component:searches,
    
    },
    {
      path:'/donghua',
      name:'donghua',
      component:donghua
    },
    {
      path:'/error404',
      name:'error',
      component:error
    },
  ]
})
