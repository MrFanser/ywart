import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Ind from '@/components/ind'
import Kinds from '@/components/kinds'
import Arts from '@/components/arts'
import Car from '@/components/car'
import Me from '@/components/me'

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
      	},
      	{
      		path:'kinds',
      		name:'Kinds',
      		component:Kinds
      	},
      	{
      		path:'arts',
      		name:'Arts',
      		component:Arts
      	},
      	{
      		path:'car',
      		name:'Car',
      		component:Car
      	},
      	{
      		path:'me',
      		name:'Me',
      		component:Me
      	}
      ],
      redirect:'/ind'
    }
  ]
})
