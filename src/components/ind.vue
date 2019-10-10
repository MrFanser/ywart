<template>
  	<div class="ind">
	  	<div class="block">
	  		<el-carousel>
	  		    <el-carousel-item v-for="i in item">
	  		      	<router-link :to="i.path"><img :src="i.url" alt=""></router-link>
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
  			<div>
	  			<h4>AITE ONLINE艺术博览会</h4>
		  		<span class="">为艺术爱好者传到艺术的新变革与新理念</span>	
  			</div>
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
  		<div class="tit show">
  			<h4>热门原创/POPULAR</h4>
	  		<span class="">独一无二，唯你独享</span>
  		</div>
  		<nav>
	  		<div class="imgs" v-for="(n,i) in goods" :key="i">
	  			<img :src="n.url" alt=""><br>
	  			<span>&yen;{{n.price}}</span><br>
	  			<span>{{n.induce}}</span>
	  		</div>	
  		</nav>
  		<div class="tit gif">
  			<div>
	  			<h4>艺居生活/HOME DECORATION</h4>
		  		<span class="">让艺术成为生活，让生活成为艺术</span>	
  			</div>
  			<router-link to="">
  				<img src="/static/image/index/recommend/1.gif" alt="">
  				<span>点击查看
  				<img src="/static/image/index/public/indexjt.png" alt="">
  				</span>
  			</router-link>
  		</div>
  		<div class="tit art">
  			<div>
	  			<h4>甄选艺礼/GIFTS</h4>
		  		<span class="">送礼物，从未如此称心</span>	
  			</div>
  			<router-link to="">
  				<img src="/static/image/index/recommend/good.gif" alt="">
  				<span>点击查看
  				<img src="/static/image/index/public/indexjt.png" alt="">
  				</span>
  			</router-link>
  		</div>
  		<div class="tit bespoke">
  			<div>
	  			<h4>尊享定制/BESPOKE</h4>
		  		<span class="">空间艺术顾问，尊享定制服务</span>	
  			</div>
  			<router-link to="">
  				<img src="/static/image/index/recommend/10.jpg" alt="">
  				<span>点击查看
  				<img src="/static/image/index/public/indexjt.png" alt="">
  				</span>
  			</router-link>
  		</div>
  		<div class="fot">
  			<img src="/static/image/index/recommend/11.jpg" alt="">
  		</div>
  		<div class="footer">
  			<img src="/static/image/index/public/appicon.png" alt="">
  			<h3>有艺网，你的APP圈更具艺术范儿</h3>
  			<h5>海量作品 购买便捷 实景体验</h5>
  			<img src="/static/image/index/public/IOS.png" alt=""><br>
  			<img src="/static/image/index/public/Andro.png" alt="">
  		</div>
  		<div class="links">
	  		<el-collapse>
		  		<el-collapse-item title="YWART.com" name="1">
		  		    <router-link to="/">推荐</router-link><br>
		  		    <router-link to="/index/latent">潜力收藏</router-link><br>
		  		    <router-link to="/index/rudi">入门收藏</router-link><br>
		  		    <router-link to="">名作收藏</router-link><br>
		  		    <router-link to="">艺居生活</router-link><br>
		  		    <router-link to="">我的珍藏</router-link>
		  		</el-collapse-item>
		  		<el-collapse-item title="了解艺网" name="2">
		  		    <router-link to="">关于我们</router-link><br>
		  		    <router-link to="">工作机会</router-link><br>
		  		    <router-link to="">网站地图</router-link>
		  		</el-collapse-item>
		  		<el-collapse-item title="支持与帮助" name="3">
		  		    <router-link to="">如何购买</router-link><br>
		  		    <router-link to="">物流说明</router-link><br>
		  		    <router-link to="">联系我们</router-link>
		  		</el-collapse-item>
		  		<el-collapse-item title="合作" name="4">
		  		    <router-link to="">作品征集</router-link>
		  		</el-collapse-item>
	  		</el-collapse>
  		</div>
  		<div class="induce">
	  		<span>京JCP备16003461号Copyright &copy; 2015-2019艺网</span><br>
	  		<span>YWART.COM版权所有</span>	
  		</div>
 		<router-view/>
 	</div>
</template>

<script>
export default {
    data(){
  		return {
	  		item:[
	  			{
	  				url:'/static/image/index/recommend/1.jpg',
	  				path:'index/art'
	  			},
	  			{
	  				url:'/static/image/index/recommend/2.jpg',
	  				path:'index/fall'
	  			},
	  			{
	  				url:'/static/image/index/recommend/12.jpg',
	  				path:'index/princess'
	  			},
	  			{
	  				url:'/static/image/index/recommend/13.png',
	  				path:'index/gkj'
	  			},
	  			{
	  				url:'/static/image/index/recommend/4.jpg',
	  				path:'phil'
	  			}
	  		],
	  		goods:[
	  			{
	  				url:'/static/image/index/recommend/14.jpg',
	  				price:'48.000',
	  				induce:'王少帅|梦系列1号'
	  			},
	  			{
	  				url:'/static/image/index/recommend/15.jpg',
	  				price:'14.560',
	  				induce:'全俊杰|绘画83'
	  			},
	  			{
	  				url:'/static/image/index/recommend/16.jpg',
	  				price:'2.760',
	  				induce:'凌贵元|樂干山14'
	  			},
	  			{
	  				url:'/static/image/index/recommend/8.jpg',
	  				price:'10.470',
	  				induce:'蒋小余|LOVE'
	  			},
	  		]
  		}
  	}
}
</script>

<style scoped lang="less">
*{
	margin:0;
	padding: 0;
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
	margin: 50px 0;
	span{
		display: block;
		font-size: 14px;
		color: grey;
		top: 20px;
		text-align: center;
		line-height: 20px;
	}
	img{
		width:500px;
	}
}
.tit div{
	margin: 50px 0;
}
.ecpa{
	width:500px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-around;
	img{
		width: 245px;
	}
}
.show{
	text-align: center;
	position: relative;
}
nav{ 
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-around;
	.imgs{
		width: 45%;
		img{
			width: 100%;
		}
		span{
			display: block;
			text-align: right; 
		}
		span:last-child{
			margin-top: -20px;
			color: grey;
		}
	}
}
.gif{ 
	img{
		width: 100%;
	}
	a{
		line-height: 50px;
		text-decoration: none;
		color: #777777;
	}
	img:last-child{
		height: 8px;
		width: 8px;
		display: inline-block;
	}
}
.art{ 
	img{
		width: 100%;
	}
	a{
		line-height: 50px;
		text-decoration: none;
		color: #777777;
	}
	img:last-child{
		height: 8px;
		width: 8px;
		display: inline-block;
	}
}
.bespoke{ 
	img{
		width: 100%;
	}
	a{
		line-height: 50px;
		text-decoration: none;
		color: #777777;
	}
	img:last-child{
		height: 8px;
		width: 8px;
		display: inline-block;
	}
}
.fot img{
	width: 500px;
}
.footer{
	text-align: center;
	margin-top: 50px;
	img:first-child{
		width:100px;
		border-radius: 10px;
		margin: 30px 0;
	}
	img:not(:first-child){
		height: 40px;
		margin-top: 30px;
	}
}
.induce{
	margin-bottom: 50px;
	span{
		font-size: 12px;
		color:#777;
	}
}
.links a{
	text-decoration: none;
	color: #777;
}
</style>