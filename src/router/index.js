import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Ind from '@/components/ind'
import Rudi from '@/components/index/rudi'
import Latent from '@/components/index/latent'
import Recoment from '@/components/index/recoment'
import Header from '@/components/index/header'
import Kinds from '@/components/kinds'
import Arts from '@/components/arts'
import Car from '@/components/car'
import Me from '@/components/me'
import Gkj from '@/components/index/gkj'
import Fall from '@/components/index/fall'
import Princess from '@/components/index/princess'
import Phil from '@/components/phil'
import Art from '@/components/index/art'
import Setting from '@/components/index/setting'
import Menu from '@/components/index/menu'
import Gallery from '@/components/index/gallery'
import Suggest from '@/components/index/suggest'
import Dress from '@/components/index/dress'
import Shop from '@/components/index/shop'
import Cezhan from '@/components/index/cezhan'
import Public from '@/components/index/public'
import Shede from '@/components/index/shede'
import About from '@/components/index/about'
import Shopping from '@/components/index/shopping'
import Voide from '@/components/index/voide'
import Singin from '@/components/index/singin'
import BrowsingHistory from '@/components/index/BrowsingHistory'
import MyArt from '@/components/index/MyArt'
import SystemMsg from '@/components/index/SystemMsg'
import coupon from '@/components/index/coupon'

Vue.use(Router)

export default new Router({
    routes: [
    	{
      	path: '/',
     	name: 'Index',
     	component: Index,
     	children:[
     		{
     		 	path:'/header',
     		 	name:'Header',
     		 	component:Header,
     		 	children:[
     		 		{
     		 			path:'/ind',
     		 			name:'Ind',
     		 			component:Ind
     		 		},
     		 		{
     		 			path:'/index/recoment',
     		 			name:'Recoment',
     		 			component:Recoment,
     		 		},
     		 		{
     		 			path:'/index/rudi',
     		 			name:'Rudi',
     		 			component:Rudi
     		 		},
     		 		{
     		 			path:'/index/latent',
     		 			name:'Latent',
     		 			component:Latent
     		 		},
     		 	],
     		 	redirect:'/ind'
     		},
     		{
     		 	path:'/kinds',
     		 	name:'Kinds',
     		 	component:Kinds
     		},
     		{
     		 	path:'/arts',
     		 	name:'Arts',
     		 	component:Arts
     		},
     		{
     		 	path:'/car',
     		 	name:'Car',
     		 	component:Car
     		},
     		{
     		 	path:'/me',
     		 	name:'Me',
     		 	component:Me
     		},
        ],
      	redirect:'/header'
	    },
	    
	    {
	    	path:'/index/gkj',
	    	name:'Gkj',
	    	component:Gkj
	    },
	    {
	    	path:'/index/fall',
	    	name:'Fall',
	    	component:Fall
	    },
	    {
	    	path:'/index/princess',
	    	name:'Princess',
	    	component:Princess
	    },
	    {
	    	path:'/phil',
	    	name:'Phil',
	    	component:Phil
	    },
	    {
	    	path:'/index/menu',
	    	name:'Menu',
	    	component:Menu,
	    	children:[
		    	{
		    		path:'/index/art',
		    		name:'Art',
		    		component:Art
		    	},
		    	{
		    		path:'/index/gallery',
		    		name:'Gallery',
		    		component:Gallery
		    	},
		    	{
		    		path:'/index/cezhan',
		    		name:'Cezhan',
		    		component:Cezhan
		    	},
		    	{
		    		path:'/index/public',
		    		name:'Public',
		    		component:Public
		    	},
		    	{
		    		path:'/index/shede',
		    		name:'Shede',
		    		component:Shede
		    	},
		    	{
		    		path:'/index/about',
		    		name:'About',
		    		component:About
		    	}
	    	],
	    	redirect:'/index/art'
	    },
    {
    	path:'/index/setting',
    	name:'Setting',
    	component:Setting
    },
    {
    	path:'/index/suggest',
    	name:'Suggest',
    	component:Suggest
    },
    {
    	path:'/index/dress',
    	name:'Dress',
    	component:Dress
    },
    {
    	path:'/index/shop',
    	name:'Shop',
    	component:Shop
    },
    {
    	path:'/index/shopping',
    	name:'Shopping',
    	component:Shopping
    },
	{
		path:'/index/voide',
    	name:'Voide',
		component:Voide
    },
    {
    	path:'/index/singin',
     	name:'Singin',
    	component:Singin
    },
    {
    	path:'/index/BrowsingHistory',
    	name:'BrowsingHistory',
    	component:BrowsingHistory
    },
    {
    	path:'/index/MyArt',
    	name:'MyArt',
    	component:MyArt
    },
    {
    	path:'/index/SystemMsg',
    	name:'SystemMsg',
    	component:SystemMsg
    },
    {
    	path:'/index/coupon',
    	name:'coupon',
    	component:coupon
    },
    // {
    // 	path:'/index/coupon',
    // 	name:'coupon',
    // 	component:coupon
    // }
  ]
})
