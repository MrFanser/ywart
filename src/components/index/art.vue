<template>
 	<div class="art">
  		<header>
	        <div class="slide">
	            <el-row :gutter="0">
	              	<el-col :span="4">
	                 	<img src="/static/image/index/latent/art/neum.png" alt="">
	              	</el-col>
	              	<el-col :span="16">
	                  	<span class="aite"><b>AITE ONLINE艺术博览会</b></span>
	              	</el-col>
	              	<el-col :span="4">
	                  	<el-dropdown>
	                  	  <span class="el-dropdown-link"><img src="/static/image/index/latent/art/gui.jpg" alt="" class="two">
	                  	  </span>
	                  	  <el-dropdown-menu slot="dropdown" trigger="click">
	                  	    <router-link to=""><el-dropdown-item>个人中心</el-dropdown-item></router-link>
	                  	    <router-link to=""><el-dropdown-item>我的订单</el-dropdown-item></router-link>
	                  	    <router-link to=""><el-dropdown-item>退出登录</el-dropdown-item></router-link>
	                  	  </el-dropdown-menu>
	                  	</el-dropdown>
	              	</el-col>
	            </el-row> 
	        </div>
        </header>
		<div class="lun">
			<el-carousel height="500px">
			    <el-carousel-item v-for="i in item">
			      	<router-link :to="i.path"><img :src="i.url" alt=""></router-link>
			    </el-carousel-item>
			</el-carousel>
			<p class="big"><b>AITE ONLINE</b>艺术博览会</p>
			<p>主旨与理念</p>
			<span>AITE ONLINE艺术博览会，是中国首个在互联网上展览展示的艺术博览会，AITEONLINE艺术博览会旨在将传统的艺术博览会模式进行创新，通过互联网模式让当代艺术广泛传播，这将成为传统艺术博览会的重要补充环节，更是艺术博览会未来的发展趋势。AITE ONLINE艺术博览会，将为您呈现多家艺术机构的知名艺术家作品、联合多位著名策展人策展不同主题的专业展览，联手上千位潜力艺术家展示海量的优秀艺术作品。</span>
			<div class="btn"><router-link to="">了解更多</router-link></div>
			<div class="slide">
				<el-row :gutter="0">
				    <el-col :span="6">
				        <router-link to="">参展机构</router-link>
				    </el-col>
				    <el-col :span="6">
				        <router-link to="">策展单元</router-link>
				    </el-col>
				    <el-col :span="6">
				        <router-link to="">公共项目</router-link>
				    </el-col>
				    <el-col :span="6">
				        <router-link to="">艺术舍得</router-link>
				    </el-col>
				  	</el-row>
				 	<div class="btn"></div>
				<router-view/>
			</div>
			<div>
				<p class="big"><b>参展机构</b>GALLERY</p>
				<div class="btn"><router-link to="">浏览全部</router-link></div>
			</div>
			<div>
				<p class="big"><b>策展单元</b>CURATION</p>
				<div class="btn"><router-link to="">浏览全部</router-link></div>
			</div>
			<div>
				<p class="big"><b>公共项目</b>PUBLIC</p>
				<div class="slide">
					<div><router-link to="">油画</router-link></div>
					<div><router-link to="">水墨</router-link></div>
					<div><router-link to="">雕塑</router-link></div>
					<div><router-link to="">版画</router-link></div>
					<div><router-link to="">其他</router-link></div>
				</div>	
				<div class="btn"><router-link to="">浏览全部</router-link></div>
			</div>
			<div>
				<p class="big"><b>艺术舍得</b>SHEDE</p>
				<div class="pay">购买展览通票</div>
			</div>
			<div>
				<span><b>发布会回顾</b></span>
			</div>
		</div>
  	</div>
</template>

<script>
export default {
  	data(){
  		return{
  			item:[
  				{
  					url:'/static/image/index/latent/art/1.jpg',
  					path:'index/art'
  				},
  				{
  					url:'/static/image/index/latent/art/2.jpg',
  					path:'index/fall'
  				}
  			]
  		}
  	}
}
</script>

<style scroped lang="less">
.art{
	width: 500px;
	p{
		text-align: center;
	}
	.big{
		font-size: 25px;
	}
	.slide{
		height: 50px;
		position: relative;
		background-color: #fec400;
		img{
			height: 30px;
			margin-top: 10px;
		}
		.aite{
			display: block;
			padding-top: 15px;
		}
		.two{
			border-radius: 50%;
		}
	}
	.btn{
		border:1px solid #333;
	}
	.lun img{
		width: 500px;
	}
}

</style>