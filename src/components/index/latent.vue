<template>
    <div class="latent">
	  	<div class="only">
	  		<img src="/static/image/index/latent/1.jpg" alt="">
	  	</div>
	  	<div>
	  		<h3>今日推荐</h3>
	  		<div class="block">
	  		  	<span class="demonstration"></span>
	  		  	<el-carousel height="300px">
	  		  		<el-carousel-item v-for="(i,g) in item" :key="g">
	  		  		    <img :src="i" alt="">
	  		  		</el-carousel-item>
	  		  	</el-carousel>
	  		</div>
	  	</div>

      <div class="dividing"></div>

	  	<div class="select">
	  		<h3>专题精选</h3>
	  		<el-carousel height="300px">
	  			<el-carousel-item v-for="(i,g) in items" :key="g">
	  			    <img :src="i" alt="">
	  			</el-carousel-item>
	  		</el-carousel>
	  		<router-link to="">
	  			<span>查看往期 </span>
	  		</router-link>
	  	</div>

      <div class="dividing"></div>

	  	<h3>最新上架</h3>
	  	<div class="new">
	  		<div class="hot" v-for="(i,j) in goods" :key="j">
	  			<img :src="i.url" alt="">
	  			<div>
			  		<span>{{i.price}}</span><br>
			  		<span>{{i.describe}}</span>
	  			</div>
	  		</div>
	  	</div>

      <div class="dividing"></div>

	  	<h3>油画/OILS</h3>
	  	<div class="oils">
	  		<div class="hot" v-for="(i,j) in good" :key="j">
	  			<img :src="i.url" alt="">
	  			<div>
			  		<span>{{i.price}}</span><br>
			  		<span>{{i.describe}}</span>
	  			</div>
	  		</div>
	  	</div>

      <div class="dividing"></div>

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
 	</div>
</template>

<script>
export default {
  	data(){
  		return{
  			item:[
  				'/static/image/index/latent/19.jpg',
  				'/static/image/index/latent/20.jpg',
  				'/static/image/index/latent/21.jpg',
  				'/static/image/index/latent/3.jpg',
  			],
  			items:[
  				'/static/image/index/latent/6.png',
  				'/static/image/index/latent/11.jpg',
  				'/static/image/index/latent/12.jpg',
  				'/static/image/index/latent/13.jpg',
  				'/static/image/index/latent/14.jpg',
  				'/static/image/index/latent/15.jpg',
  				'/static/image/index/latent/7.jpg',
  				'/static/image/index/latent/8.jpg',
  				'/static/image/index/latent/9.jpg',
  				'/static/image/index/latent/10.jpg',
  			],
  			goods:[
  				{
  					url:'/static/image/index/latent/8.jpg',
  					price:'￥46.000',
  					describe:'雕塑，等风来'
  				},
  				{
  					url:'/static/image/index/latent/7.jpg',
  					price:'￥2.600',
  					describe:'版画，风'
  				},
  				{
  					url:'/static/image/index/latent/9.jpg',
  					price:'￥13.000',
  					describe:'雕塑，聆.葵'
  				},
  				{
  					url:'/static/image/index/latent/10.jpg',
  					price:'￥1.850',
  					describe:'油画，夕阳下的桥'
  				},
  			],
  			good:[
  				{
  					url:'/static/image/index/latent/11.jpg',
  					price:'￥46.000',
  					describe:'雕塑，等风来'
  				},
  				{
  					url:'/static/image/index/latent/12.jpg',
  					price:'￥2.600',
  					describe:'版画，风'
  				},
  				{
  					url:'/static/image/index/latent/13.jpg',
  					price:'￥13.000',
  					describe:'雕塑，聆.葵'
  				},
  				{
  					url:'/static/image/index/latent/14.jpg',
  					price:'￥1.850',
  					describe:'油画，夕阳下的桥'
  				},
  				{
  					url:'/static/image/index/latent/15.jpg',
  					price:'￥1.850',
  					describe:'油画，夕阳下的桥'
  				},
  				{
  					url:'/static/image/index/latent/16.jpg',
  					price:'￥1.850',
  					describe:'油画，夕阳下的桥'
  				},
  				{
  					url:'/static/image/index/latent/23.jpg',
  					price:'￥1.850',
  					describe:'油画，夕阳下的桥'
  				},
  				{
  					url:'/static/image/index/latent/17.jpg',
  					price:'￥1.850',
  					describe:'油画，夕阳下的桥'
  				},
  				{
  					url:'/static/image/index/latent/18.jpg',
  					price:'￥1.850',
  					describe:'油画，夕阳下的桥'
  				},
  				{
  					url:'/static/image/index/latent/6.png',
  					price:'￥1.850',
  					describe:'油画，夕阳下的桥'
  				}
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
.latent{
  max-width: 700px;
  width: 100%;
  h3{
  	text-align: center;
    margin:20px auto;
  }
  .only img:first-child{
  	max-width: 700px;
    width: 100%;
  }
  .block img{
    width: 100%;
  }
  .select{ 
    img{
      width: 100%;
      height: 100%;
    }
    a{
      text-decoration: none;
      color: #777;
      display: block;
      text-align: center;
  }
  }
  .new{
  	display: flex;
  	justify-content: space-between;
  	flex-wrap: wrap;
  	.hot{
  		width: 45%;
  		img{
  			height: 150px;
  			width:100%;
  		}
  		div{
  			text-align: right;
  		}

  	}
  }
  .oils{
  	display: flex;
  	justify-content: space-between;
  	flex-wrap: wrap;
  	.hot{
  		width: 45%;
  		img{
  			height: 150px;
  			width:100%;
  		}
  		div{
  			text-align: right;
  		}

  	}
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
  	margin-bottom: 100px;
  	span{
  		font-size: 12px;
  		color:#777;
  	}
  }
  .links a{
  	text-decoration: none;
  	color: #777;
  }
  .dividing{
    margin: 30px 0;
    width: 100%;
    height: 10px;
    background-color: #eeeeee;
    // background-color: red;
  }
}
</style>