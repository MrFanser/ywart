<template>
  	<div class="ind">
	  	<header>
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
			<el-row :gutter="0">
			    <el-col :span="6">
			    	<router-link to="">推荐</router-link>
			    </el-col>
			    <el-col :span="6">
			    	<router-link to="">入门收藏</router-link>
			    </el-col>
			    <el-col :span="6">
			    	<router-link to="">潜力收藏</router-link>
			    </el-col>
			    <el-col :span="6">
			    	<router-link to="">名作收藏</router-link>
			    </el-col>
			</el-row>
	  	</header>
	  	<div class="block">
	  		<span class="demonstration"></span>
	  		<el-carousel>
	  		    <el-carousel-item v-for="(i,g) in item" :key="g">
	  		      	<img :src="i" alt="">
	  		    </el-carousel-item>
	  		</el-carousel>
  		</div>
  		<div class="lis">
  			<router-link to="">
  				<img src="/static/image/index/recommend/youhua.png" alt="">
  			</router-link>
  			<router-link to="">
  				<img src="/static/image/index/recommend/shuimo.png" alt="">
  			</router-link>
  			<router-link to="">
  				<img src="/static/image/index/recommend/banhua.png" alt="">
  			</router-link>
  			<router-link to="">
  				<img src="/static/image/index/recommend/sheying.png" alt="">
  			</router-link>
  			<router-link to="">
  				<img src="/static/image/index/recommend/diaosu.png" alt="">
  			</router-link>
  		</div>
  		<div class="tit">
	  		<h4>AITE ONLINE艺术博览会</h4>
	  		<span class="">为艺术爱好者传到艺术的新变革与新理念</span>	
	  		<router-link to="">
	  			<img src="/static/image/index/recommend/6.jpg" alt="">
	  		</router-link>
  		</div>
  		<div class="ecpa">
  			<router-link to="">
  				<img src="/static/image/index/recommend/lt.jpg" alt="">
  			</router-link>
  			<router-link to="">
  				<img src="/static/image/index/recommend/rt.jpg" alt="">
  			</router-link>
  			<router-link to="">
  				<img src="/static/image/index/recommend/ld.jpg" alt="">
  			</router-link>
  			<router-link to="">
  				<img src="/static/image/index/recommend/rd.jpg" alt="">
  			</router-link>
  		</div>
  		<div class="show">
  			<h4>热门原创/POPULAR</h4>
	  		<span class="">独一无二，唯你独享</span>
  		</div>
 	</div>
</template>

<script>
export default {
    data(){
  		return {
	  		item:[
	  			'/static/image/index/recommend/1.jpg',
	  			'/static/image/index/recommend/2.jpg',
	  			'/static/image/index/recommend/12.jpg',
	  			'/static/image/index/recommend/13.png',
	  			'/static/image/index/recommend/4.jpg'
	  		],
	  		goods:[
	  			{
	  				url:'/static/image/index/recommend/14.jpg',
	  				price:48.000,
	  				induce:'王少帅|梦系列1号'
	  			},
	  			{
	  				url:'/static/image/index/recommend/15.jpg',
	  				price:14.560,
	  				induce:'全俊杰|绘画83'
	  			},
	  			{
	  				url:'/static/image/index/recommend/16.jpg',
	  				price:2.760,
	  				induce:'凌贵元|樂干山14'
	  			},
	  			{
	  				url:'/static/image/index/recommend/8.jpg',
	  				price:10.470,
	  				induce:'蒋小余|LOVE'
	  			},
	  		]
  		}
  	}
}
</script>

<style scoped lang="less">
header{
	background-color: black;
	opacity: 0.4;
	padding:5px;
	input{
		width: 80%;
		height: 40px;
		margin:8px auto;
	}
	a{
		font-size: 12px;
		color:#fff;
		text-decoration: none;
	}
	a::actived{
		font-weight: bold;
	}
}
.el-carousel__item img{
	width: 100%;
	height: 100%;
}
.lis{
	display: flex;
		img{
		width: 80%;
	}
}
.tit{	
	text-align: center;
	position: relative;
	span{
		display: block;
		font-size: 14px;
		color:grey;
		top: 20px;
		text-align: center;
		line-height: 20px;
	}
	img{
		width:500px;
	}
}
.ecpa{
	width:500px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-around;
	img{
		width:245px;
	}
}
.show{
	text-align: center;
	position: relative;
	span{
		display: block;
		font-size: 14px;
		color:grey;
		top: 20px;
		text-align: center;
		line-height: 20px;
	}
}
</style>