import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Ind from '@/components/ind'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
      	{
      		path:'ind',
      		name:'Ind',
      		component:Ind
      	}
      ],
      redirect:'/ind'
    }
  ]
})
