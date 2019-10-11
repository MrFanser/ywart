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
			<div class="btn btnwhite"><router-link to="">了解更多</router-link></div>
			<div class="slide slidebgc slidefore">
				<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
				    <el-tab-pane label="参展机构" name="first">
						<div class="gallery">
						 	<img src="/static/image/index/latent/art/3.png" alt="">
						</div>
				    </el-tab-pane>
				    <el-tab-pane label="策展单元" name="second">
				    	<div class="gallery">
				    	 	<img src="/static/image/index/latent/art/4.png" alt="">
				    	</div>
				    </el-tab-pane>
				    <el-tab-pane label="公共项目" name="third">
				    	<div class="gallery">
				    	 	<img src="/static/image/index/latent/art/5.png" alt="">
				    	</div>
				    </el-tab-pane>
				    <el-tab-pane label="艺术舍得" name="fourth">
				    	<div class="gallery">
				    	 	<img src="/static/image/index/latent/art/6.jpg" alt="">
				    	</div>
				    </el-tab-pane>
				</el-tabs>
				<div class="btnall btnwhite">浏览全部作品</div>
			</div>
			<div class="kuang">
				<p class="big"><b>参展机构</b>GALLERY</p>
				<div class="flex">
					<div class="imgs" v-for="n in goods">
						<img :src="n.url" alt=""><br>
						<span>{{n.induce}}</span>
					</div>
				</div>
				<div class="btn"><router-link to="">浏览全部</router-link></div>
			</div>
			<div class="kuang kuangbgc">
				<p class="big"><b>策展单元</b>CURATION</p>
				<div class="flex">
					<div class="imgs imgbgc" v-for="n in good">
						<img :src="n.url" alt=""><br>
						<span>{{n.author}}</span><br>
						<span>{{n.induce}}</span>
					</div>
				</div>
				<div class="btn btnwhite"><router-link to="">浏览全部</router-link></div>
			</div>
			<div class="mide">
				<p class="big"><b>公共项目</b>PUBLIC</p>
				<el-tabs v-model="activeName3" type="card" @tab-click="handleClick">
					<el-tab-pane :label="n.label" :name="n.name" v-for="n in size">
						<div class="mideflex">
						  	<div class="imgs" v-for="(j,i) in n.infor" :key="i">
						  		<img :src="j.url" alt=""><br>
						  		<span>&yen;{{j.describe}}</span><br>
						  		<span>{{j.induce}}</span>
						  	</div>
						</div>
					</el-tab-pane>	
				</el-tabs>
				<div class="btn"><router-link to="">浏览全部</router-link></div>
			</div>
			<div>
			    <div class="kuang kuangbgc">
						<p class="big"><b>艺术舍得</b>SHEDE</p>
				    <div class="flex">
				        <div class="imgs imgbgc" v-for="n in gooder">
				        	<img :src="n.url" alt=""><br>
				        	<span>{{n.induce}}</span>
				        </div>
				    </div>
				    <div class="last">
				        <img src="/static/image/index/latent/art/19.png" alt="">
				        <img src="/static/image/index/latent/art/20.png" alt=""> 
				    </div>
					<div>
						<span><b>发布会回顾</b></span>
					</div>
					<div class="stion">
						<el-carousel :interval="4000" type="card" height="200px">
						    <el-carousel-item v-for="(i,k) in lbt" :key="k">
						    	<img :src="i" alt="">
						    </el-carousel-item>
						</el-carousel><br><br>
						<el-carousel :interval="4000" type="card" height="200px">
						    <el-carousel-item v-for="(i,ks) in lbts" :key="ks">
						    	<img :src="i" alt="">
						    </el-carousel-item>
						</el-carousel>
					</div>
			    </div>
			    <img src="/static/image/index/latent/art/all.png" alt="">
				<div class="pay">购买展览通票</div>
				<div class="footer">
					<span><h3>联系我们</h3>CONTACT US</span>
					<p>Tel : 400-605-7033</p>
					<p>E-mail : ywart@ywart.com</p>
					<hr color="#e4ab10">
					<span>CopyRight © 艺网科技YWART.COM 2015 - 2019</span>
				</div>
			</div>
		</div>
  	</div>
</template>
<script>
export default {
  	data(){
  		return{
  			activeName2: 'first',
  			activeName3: '1',
  			item:[
  				{
  					url:'/static/image/index/latent/art/1.jpg',
  					path:'index/art'
  				},
  				{
  					url:'/static/image/index/latent/art/2.jpg',
  					path:'index/fall'
  				}
  			],
  			goods:[
  				{
  					url:'/static/image/index/latent/art/7.jpg',
  					induce:'TONG GALLERY+PROJECTS'
  				},
  				{
  					url:'/static/image/index/latent/art/8.jpg',
  					induce:'星空间'
  				},
  				{
  					url:'/static/image/index/latent/art/9.jpg',
  					induce:'逸空间'
  				},
  				{
  					url:'/static/image/index/latent/art/10.jpg',
  					induce:'博而励画廊'
  				},
  				{
  					url:'/static/image/index/latent/art/11.jpg',
  					induce:'当代唐人艺术中心'
  				},
  				{
  					url:'/static/image/index/latent/art/12.jpg',
  					induce:'艺·凯旋画廊'
  				},
  			],
  			good:[
  				{
  					url:'/static/image/index/latent/art/13.jpg',
  					author:'朱彤',
  					induce:'目光所及-中国新绘画'
  				},
  				{
  					url:'/static/image/index/latent/art/14.jpg',
  					author:'姬忠鹏',
  					induce:'自在语境-当代青年绘画邀请展'
  				},
  				{
  					url:'/static/image/index/latent/art/15.jpg',
  					author:'李玉军',
  					induce:'无形之态-当下的抽象与新表现艺术展'
  				},
  				{
  					url:'/static/image/index/latent/art/16.jpg',
  					author:'李超',
  					induce:'调和-学院青年水墨展'
  				},
  				{
  					url:'/static/image/index/latent/art/17.jpg',
  					author:'杨彪',
  					induce:'似是而非-新雕塑邀请展'
  				},
  				{
  					url:'/static/image/index/latent/art/18.jpg',
  					author:'葛亚楠',
  					induce:'棱镜-反看内部的切面'
  				},
  			],
  			gooder:[
	  			{
	  			    url:'/static/image/index/latent/art/20.png',
	  			    induce:'舍得生态'
	  			},
	  			{
	  			    url:'/static/image/index/latent/art/21.png',
	  			    induce:'舍得艺术中心'
	  			}
  			],
  			size:[
	  			{
	  				label:'油画',
	  				name:'1',
	  				infor:[
		  				{
			  				url:'/static/image/index/latent/art/youhua/1.jpg',
			  				author:'陈尚昌',
			  				describe:'悠远的天空',
			  				induce:'布面油画 97.0*130.0cm'
			  			},
			  			{
			  				url:'/static/image/index/latent/art/youhua/2.jpg',
			  				author:'王笃涛',
			  				describe:'52赫兹的绝唱',
			  				induce:'布面油画 60.0*80.0cm'
			  			},
			  			{
			  				url:'/static/image/index/latent/art/youhua/3.jpg',
			  				author:'李龙飞',
			  				describe:'一盘樱桃',
			  				induce:'布面油画 30.0*30.0cm'
			  			},
			  			{
			  				url:'/static/image/index/latent/art/youhua/4.jpg',
			  				author:'曹继才',
			  				describe:'从你的全世界路过',
			  				induce:'布面油画 80.0*80.0cm'
			  			}
	  				]
	  			},
	  			{
	  				label:'水墨',
	  				name:'2',
	  				infor:[
		  				{
		  					url:'/static/image/index/latent/art/shuimo/1.jpg',
		  					author:'陈尚昌',
		  					describe:'悠远的天空',
		  					induce:'布面油画 97.0*130.0cm'
		  				},
		  				{
		  					url:'/static/image/index/latent/art/shuimo/2.jpg',
		  					author:'王笃涛',
		  					describe:'52赫兹的绝唱',
		  					induce:'布面油画 60.0*80.0cm'
		  				},
		  				{
		  					url:'/static/image/index/latent/art/shuimo/3.jpg',
		  					author:'李龙飞',
		  					describe:'一盘樱桃',
		  					induce:'布面油画 30.0*30.0cm'
		  				},
		  				{
		  					url:'/static/image/index/latent/art/shuimo/4.jpg',
		  					author:'曹继才',
		  					describe:'从你的全世界路过',
		  					induce:'布面油画 80.0*80.0cm'
		  				}
	  				]
	  			},
	  			{
	  				label:'雕塑',
	  				name:'3',
	  				infor:[
		  				{
		  					url:'/static/image/index/latent/art/diaosu/1.jpg',
		  					author:'陈尚昌',
		  					describe:'悠远的天空',
		  					induce:'布面油画 97.0*130.0cm'
		  				},
		  				{
		  					url:'/static/image/index/latent/art/diaosu/2.jpg',
		  					author:'王笃涛',
		  					describe:'52赫兹的绝唱',
		  					induce:'布面油画 60.0*80.0cm'
		  				},
		  				{
		  					url:'/static/image/index/latent/art/diaosu/3.jpg',
		  					author:'李龙飞',
		  					describe:'一盘樱桃',
		  					induce:'布面油画 30.0*30.0cm'
		  				},
		  				{
		  					url:'/static/image/index/latent/art/diaosu/4.jpg',
		  					author:'曹继才',
		  					describe:'从你的全世界路过',
		  					induce:'布面油画 80.0*80.0cm'
		  				}
	  				]
	  			},
	  			{
	  				label:'版画',
	  				name:'4',
	  				infor:[
	  					{
	  						url:'/static/image/index/latent/art/banhua/1.jpg',
	  						author:'陈尚昌',
	  						describe:'悠远的天空',
	  						induce:'布面油画 97.0*130.0cm'
	  					},
	  					{
	  						url:'/static/image/index/latent/art/banhua/2.jpg',
	  						author:'王笃涛',
	  						describe:'52赫兹的绝唱',
	  						induce:'布面油画 60.0*80.0cm'
	  					},
	  					{
	  						url:'/static/image/index/latent/art/banhua/3.jpg',
	  						author:'李龙飞',
	  						describe:'一盘樱桃',
	  						induce:'布面油画 30.0*30.0cm'
	  					},
	  					{
	  						url:'/static/image/index/latent/art/banhua/4.jpg',
	  						author:'曹继才',
	  						describe:'从你的全世界路过',
	  						induce:'布面油画 80.0*80.0cm'
	  					}
	  				]
	  			},
	  			{
	  				label:'其他',
	  				name:'5',
	  				infor:[
	  					{
	  						url:'/static/image/index/latent/art/qita/1.jpg',
	  						author:'陈尚昌',
	  						describe:'悠远的天空',
	  						induce:'布面油画 97.0*130.0cm'
	  					},
	  					{
	  						url:'/static/image/index/latent/art/qita/2.jpg',
	  						author:'王笃涛',
	  						describe:'52赫兹的绝唱',
	  						induce:'布面油画 60.0*80.0cm'
	  					},
	  					{
	  						url:'/static/image/index/latent/art/qita/3.jpg',
	  						author:'李龙飞',
	  						describe:'一盘樱桃',
	  						induce:'布面油画 30.0*30.0cm'
	  					},
	  					{
	  						url:'/static/image/index/latent/art/qita/4.jpg',
	  						author:'曹继才',
	  						describe:'从你的全世界路过',
	  						induce:'布面油画 80.0*80.0cm'
	  					}
	  				]
	  			}
  			],
  			lbt:[
  				'/static/image/index/latent/art/l1.jpg',
  				'/static/image/index/latent/art/l2.jpg',
  				'/static/image/index/latent/art/l3.jpg',
  				'/static/image/index/latent/art/l4.jpg',
  				'/static/image/index/latent/art/l5.jpg',
  				'/static/image/index/latent/art/l6.jpg',
  				'/static/image/index/latent/art/l7.jpg',
  				'/static/image/index/latent/art/l8.jpg'
  			],
  			lbts:[
  				'/static/image/index/latent/art/l9.jpg',
  				'/static/image/index/latent/art/l10.jpg',
  				'/static/image/index/latent/art/l11.jpg',
  				'/static/image/index/latent/art/l12.jpg',
  				'/static/image/index/latent/art/l13.jpg',
  				'/static/image/index/latent/art/l14.jpg'
  			]
  		}
  	},
  	methods: {
  	    handleClick(tab, event) {
  	       console.log(tab, event);
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
	[tabindex="0"]{
		background-color:  #fec400;
	}
	.big{
		padding-top: 30px;
		font-size: 25px;
	}
	header{
		width: 500px;
		height: 50px;
		z-index: 10;
		background-color: #fec400;
		position: fixed;
		top:0;
	}
	.slide{
		position: relative;
		text-align: center;
		a{
			line-height: 50px;
			text-decoration: none;
			padding: 10px 30px;
			color:#333;
			background-color: #eeeeee;
		}
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
	.slidefore{
		height: 370px;
		.el-tabs__item{
			width: 124px;
			color: #333;
		}
		.gallery{
			width: 500px;
			height: 350px;
			background-color: #fec400;
		}
		img{
			height: 250px;
		}
	}
	.slidebgc{
		.view{
			height: 400px;
			background-color: #fec400;
			img{
				height: 250px;
				width: 480px;
				margin-top: 20px;
				background-color: #cb9d00;
			}
		}
	}
	.btn{
		width: 80px;
		padding:10px 20px;
		background-color: #fec400;
		position: relative;
		text-align: center;
		left:190px;
		a{
			text-decoration: none;
			color:#333;
			font-weight: bold;	
		}
	}
	.btnall{
		width:100px;
		padding:10px 20px;
		position: relative;
		bottom:70px;
		left: 180px;
	}
	.btnwhite{
		background-color: #fff;
	}
	.pay{
		width:100px;
		padding: 10px;
		border-radius: 5px;
		background-color: #fec400;
		position: relative;
		bottom:100px;
		left: 180px;
		display: none;
	}
	.lun{
		img{
			width: 500px;
		}
		.mide{
			.btn{
				margin: 30px 0;
			}
			.el-tabs__item{
				width: 99px;
				text-align: center;
				color: #333;
			}
			.mideflex{
				display: flex;
				justify-content: space-between;
				align-content: space-between;
				flex-wrap: wrap;
				.imgs{
					width: 230px;
					img{
						width: 100%;
					}
				}
			}
		}
		.kuang{
			text-align: center;
			.btn{
				left:190px;
				margin: 30px 0;
			}
			.flex{
				display: flex;
				justify-content: space-around;
				align-content: space-around;
				flex-wrap: wrap;
				.imgs{
					width: 240px;
					img{
						width:100%;
					}
				}
			}	
		}
		.last{
			width: 480px;
			margin:auto;
			img{
				margin: 10px 0 30px 0;
				width: 460px;
				height: 250px;
			}
		}
		.kuangbgc{
			span{
				display: block;
				padding-bottom: 30px;
				font-size:25px;
			}
			background-color: #fec400;
			.btn{
				bottom:20px;
			}
			.imgbgc{
				margin: 10px 0;
				text-align: left;
				font-size: 12px;
				background-color: #fff;
				padding-bottom: 30px;
			}
		}
		.footer{
			background-color: #fec400;
			padding:30px 0 0 30px ;
			h3{
				display: inline-block;
			}
			p{
				text-align: left;
			}
			hr{
				width: 500px;
				position: relative;
				left: -32px;
			}
			span{
				line-height: 50px;
				text-align: center;
			}
			span:first-child{
				font-size: 20px;
			}
		}
		.slideflex{
			display: flex;
			justify-content: space-between;
			a{
				padding: 10px 30px;
			}
		}
	} 
}
</style>