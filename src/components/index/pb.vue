<template>
    <div class="pb">
  	  	<header>
  	  		<div v-bind:class="isShow?hidden:search">
  		  		<el-row :gutter="0">
  			  		<el-col :span="4">
  			  		    <img src="/static/image/index/public/headerKefuB.png" alt="">
  			  		</el-col>
  			  		<el-col :span="16">
  			  		    <input type="search" placeholder="输入关键字搜索作品">
  			  		</el-col>
  			  		<el-col :span="4">
  			  		    <img src="/static/image/index/public/znx.png" alt="">
  			  		</el-col>
  			  	</el-row>	
  	  		</div>
  	  		<div v-bind:class="isShow?visi:collect">
  		  		<el-row :gutter="0">
  		  			<el-col :span="6">
  		  			    <router-link to="/ind">推荐</router-link>
  		  			</el-col>
  		  			<el-col :span="6">
  		  			    <router-link to="/index/rudi">入门收藏</router-link>
  		  			</el-col>
  		  			<el-col :span="6">
  		  			    <router-link to="/index/latent">潜力收藏</router-link>
  		  			</el-col>
  		  			<el-col :span="6">
  		  			    <router-link to="/index/recoment">名作收藏</router-link>
  		  			</el-col>
  		  		</el-row>	
  	  		</div>
  	  	</header>
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
	  		<vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="fetchImgsData"></vue-waterfall-easy>
	  	</div>
    </div>
</template>

<script>
	import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
    data(){

    	return{
    		scrol:false,
    		visi:'visi',
    		hidden:'hidden',
    		search:'search',
    		collect:'collect',
    		isShow:"",
    		imgsArr: [], 
    		fetchImgsArr: [],
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
  		handleScroll(){
  			let scrollTop = window.pageYOffset;
  			if(scrollTop>30){
  				this.isShow=true;
  			}else{
  				this.isShow=false;
  			}
  		},
  		initImgsArr (n, m) {
  		    var arr = []
  		      　for (var i = n; i < m; i++) {
  		        	arr.push({ src: `/static/image/index/latent/gkj/${i + 1}.jpg`,
  		        		link: '', 
  		        		info: '一些图片描述文字' })
  		      　　　}
  		      　　　return arr
  		    　　 },
  		fetchImgsData () {
  		    this.imgsArr = this.imgsArr.concat(this.fetchImgsArr)
  		}
  	},
  	created () {
  	    this.imgsArr = this.initImgsArr(0, 10)
  	    this.fetchImgsArr = this.initImgsArr(10, 20)
  	},
  	components: {
  		vueWaterfallEasy
  	},
  	mounted(){
  		window.addEventListener('scroll',this.handleScroll)
  	}
}
</script>

<style scoped lang="less">
*{
	margin: 0;
	padding: 0;
}
.rudi{
	width: 500px;
}
.pb{
	height: 800px;
}
header{
	position: fixed;
	width:500px;
	top:0;
	text-align: center;
	z-index: 10000;
	.search{
		opacity: 0.8;
		margin-top: 8px;
		background-color: black;
	}
	.hidden{
		display: none;
	}
	input{
		width: 80%;
		height: 40px;
		margin:8px auto;
	}
	.visi{
		background-color: #fff;
		color: #333;
		padding:10px 0;
		a{
			font-size: 12px;
			color:#333;
			text-decoration: none;
			font-size: 15px;
		}
		a::actived{
			font-weight: bold;
			text-decoration: underline;
		}
		div div:first-child a{
			border-bottom: 2px solid #333;
		}
	}
	.collect{
		position: relative;
		background-color:  black;
		opacity: 0.8;
		padding: 10px 0;
		a{
			font-size: 12px;
			color:#fff;
			text-decoration: none;
		}
		a::actived{
			font-weight: bold;
			text-decoration: underline;
		}
		div div:nth-child(2) a{
			border-bottom: 2px solid #fff;
		}
	}
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