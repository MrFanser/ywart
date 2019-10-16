<template>
    <div class="rudi">
	  	<div class="only">
	  		<img src="/static/image/index/rudiments/1.jpg" alt="">
	  	</div>
	  	<nav>
		  	<div class="pic" v-for="(i,j) in good" :key="j">
		  		<img :src="i.url" alt="">
		  		<p>{{i.price}}{{i.newprice}}</p>
		  	</div>	
	  	</nav>
	  	<div class="all">
	  		<h3>热门作品</h3>
	  		<div class="hot" v-for="(i,j) in goods" :key="j">
	  			<img :src="i.url" alt=""><br>
		  		<span>{{i.price}}</span><br>
		  		<span>{{i.induce}}</span>
	  		</div>
	  		<router-link to="">
	  			<span>全部入门收藏作品 <img src="/static/image/index/public/indexjt.png" alt=""></span>
	  		</router-link>
	  	</div>
	  	<div class="all">
	  		<h3>艺术家</h3>
	  		<div class="block">
	  		  	<span class="demonstration"></span>
	  		  	<el-carousel height="650px">
	  		  		<el-carousel-item v-for="(i,g) in item" :key="g">
	  		  		    <img :src="i" alt="">
	  		  		</el-carousel-item>
	  		  	</el-carousel>
	  	  	</div>  			  	
	  	</div>
	  	<div class="pb">
	  		<vue-waterfall-easy :imgsArr="imgsArr"><span><b>&yen;1.172</b></span><br><span>泛太克美术志，动与静</span></vue-waterfall-easy>
	  	</div>
    </div>
</template>

<script>
	import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
    data(){
    	return{
    		imgsArr: [],
    		good:[
    			{
    				url:'/static/image/index/rudiments/20.png',
    				price:'￥1-',
    				newprice:'￥599'
    			},
    			{
    				url:'/static/image/index/rudiments/21.png',
    				price:'￥600-',
    				newprice:'￥1.099'
    			},
    			{
    				url:'/static/image/index/rudiments/22.png',
    				price:'￥1.100以上',
    			},
    		],
    		goods:[
    			{
    				url:'/static/image/index/rudiments/23.jpg',
    				price:'￥550',
    				induce:'石开元|黑花与陶罐'
    			},
    			{
    				url:'/static/image/index/rudiments/25.jpg',
    				price:'￥1200',
    				induce:'吴思雨|水精灵'
    			},
    			{
    				url:'/static/image/index/rudiments/24.jpg',
    				price:'￥550',
    				induce:'陈斌|happy的感觉'
    			},
    		],
    		item:[
    			'/static/image/index/rudiments/13.png',
    			'/static/image/index/rudiments/14.png',
    			'/static/image/index/rudiments/15.png',
    			'/static/image/index/rudiments/16.png',
    			'/static/image/index/rudiments/17.png',
    			'/static/image/index/rudiments/18.png'
    		]
    	}
    },
  	methods:{
  		initImgsArr (n, m) {
  		      　　　　var arr = []
  		      　　　　for (var i = n; i < m; i++) {
  		        　　　　　　 arr.push({ src: `/static/image/index/latent/gkj/${i + 1}.jpg`,
  		        			link: '', 
  		        			info: '一些图片描述文字' })
  		      　　　　}
  		      　　　　return arr
  		    　　　},
  	},
  	created () {
  	    　　　　 this.imgsArr = this.initImgsArr(0, 18)
  	},
	components: {
	    vueWaterfallEasy
	},
}
</script>

<style scoped lang="less">
*{
	margin: 0;
	padding: 0;
}
.pb{
	height: 2400px;
	width: 500px;
}
.rudi{
	width: 500px;
}
h3{
	text-align: center;
}
.only img:first-child{
	width: 500px;
	height: 500px;
}
nav{
	display: flex;
	margin: 20px 10px 20px -25px; 
	justify-content: space-around;
		img{
			height:120px;
		}
		p{
			text-align: center;
		}
}
.all{
	.hot{
		img{
			width: 500px;
		}
		span{
			display: block;
			text-align: right;
		}
		span:last-child{
			margin-top: -15px;
			margin-bottom: 15px;

		}
	}
	span{
		display: block;
		text-align: center;
	}
	a{
		text-decoration:none;
		color:#777;
	}
	.block img{
		width:500px;
		// height: 500px;
	}
}


</style>