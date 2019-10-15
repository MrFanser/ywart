<template>
  	<div class="shopping">
		<div class="header">
			<el-row>
			  <el-col :span="4"><div class="grid-content bg-purple-dark"><img src="/static/image/index/public/back.png" alt="" @click="goback"></div></el-col>
			  <el-col :span="16"><div class="grid-content bg-purple-dark"><h2>加冕</h2></div></el-col>
			  <el-col :span="4"><div class="grid-content bg-purple-dark"><img src="/static/image/index/public/kefu.png" alt=""></div></el-col>
			</el-row>
		</div>
		<section>
			<div class="onlypic">
				<img src="/static/image/index/latent/guan/guan1.jpg" alt="">
			</div>
			<div class="induce">
				<span>加冕</span><br>
				<span>￥46.800</span><br>
				<span>布面丙烯，150.0&times;150.0</span>	
			</div>
			<div class="coast">
				<span>运费：￥490</span>
				<span>装裱费：免费</span>	
			</div>
			<div class="about">
				<img src="/static/image/index/public/art.jpg" alt="">
				<img src="/static/image/index/public/ysjt.png" alt="">
				<div class="aboutart">
					<span><b>王加诺</b></span><br><br>
					<span>出生于中国沈阳 <br> 2010年考入英国伦敦艺术大学温布尔登学院 <br>2013年考入伦敦艺术大学切尔西学院攻读硕士学位</span>	
				</div>
			</div>
			<div class="message">
				<div class="tit">
					<h3>艺术品信息</h3>
					<span>ARTWORK INFORMATION</span>	
				</div>
				<img src="/static/image/index/latent/guan/guan1.jpg" alt="">
				<div class="crowned">
					<h3>加冕</h3>
					<span>尺寸：150.0&times;150.0cm</span><br>
					<span>材质：布面丙烯</span><br>
					<span>作品材质：油画</span><br>
					<span>创作时间：2015</span>	
				</div>
			</div>
			<div class="evaluate">
				<div class="tit">
					<h3>艺术评析</h3>
					<span>ART REVIEW</span>	
				</div>
				<span>涂鸦与拼贴是王加诺最常用的方法，这也是波普艺术常用的方式，其作品中更多的是对代际情怀和过往记忆的积极肯定。”然而进一步观察其作品背后的含义，却能引发出许多的思考：“当我们触及文化的主体性、艺术与消费之关系、人与人之关系等命题时，当我们面对着一系列诸如个人情结在多大程度上是个体的，在多大程度上个体仅仅是个体化的效果，消费与文化记忆之间又是何种关系等问题上。</span>
			</div>
			<div class="details">
				<div class="tit">
					<h3>艺术品细节</h3>
					<span>ARTWO PKDETAILS</span>	
				</div>
				<img src="/static/image/index/latent/guan/guan2.jpg" alt="">
				<span>创作本身所包含的艺术肯定与创作上的自我肯定合二为一，构成了肯定之肯定的持续需要和独特创作品质。</span>
				<img src="/static/image/index/latent/guan/guan3.jpg" alt="">
				<span>艺术品细节</span>
				<img src="/static/image/index/latent/guan/guan4.jpg" alt="">
				<span>艺术家个性签名。</span>
			</div>
			<div class="bgcroom">
				<div class="tit">
					<h3>场景展示</h3>
					<span>SCENARIO SHOWS</span>	
				</div>
				<div class="room bgcroom1">
					<img src="/static/image/index/latent/guan/guan1.jpg" alt="">
				</div>
				<div class="room bgcroom2">
					<img src="/static/image/index/latent/guan/guan1.jpg" alt="">
				</div>
				<div class="room bgcroom3">
					<img src="/static/image/index/latent/guan/guan1.jpg" alt="">
				</div>
			</div>
			<div class="others tit">
				<h3>其他细节展示</h3>
				<span>OTHER DETAILS</span>
				<img src="/static/image/index/latent/guan/qtxjzs.png" alt="">

				<h3>购买须知</h3>
				<span>PURCHASE NOTES</span>
				<img src="/static/image/index/latent/guan/gmxz.png" alt="">

				<h3>艺网小贴士</h3>
				<span>YWART TIPS</span>
				<img src="/static/image/index/latent/guan/ywxtzsc.png" alt="">
			</div>
			<div class="tit">
				<h3>推荐作品</h3>
				<span>RECOMMEND</span>
				<div class="picflex">
					<div v-for="pic in picture">
						<img :src="pic.url" alt="">
						<span>{{pic.price}}</span><br>
						<span>{{pic.induce}}</span>
					</div>
				</div>
			</div>
			<div class="botm">
				<p>--已经到底啦--</p>
			</div>
		</section>
	  	<div class="pay">
	  		<div class="car"><img src="/static/image/index/public/wcar.png" alt=""><br>购物车</div>
	  		<div class="add" v-on:click="addcar"><h2>加入购物车</h2></div>
	  		<div class="payst"><h2>立即购买</h2></div>
	  	</div>
  	</div>
</template>

<script>
export default {
  	data(){
  		return{
  			picture:[
  				{
  					url:'/static/image/index/latent/guan/1.jpg',
  					price:'¥3,380',
  					induce:'衍生工艺， 福 金'
  				},
  				{
  					url:'/static/image/index/latent/guan/2.jpg',
  					price:'¥3,380',
  					induce:'衍生工艺， 雷-神'
  				},
  				{
  					url:'/static/image/index/latent/guan/3.jpg',
  					price:'¥3,380',
  					induce:'衍生工艺， 步'
  				},
  				{
  					url:'/static/image/index/latent/guan/4.jpg',
  					price:'¥3,380',
  					induce:'衍生工艺， 戏法'
  				},
  				{
  					url:'/static/image/index/latent/guan/5.jpg',
  					price:'¥1.500',
  					induce:'其他， 阿利亚'
  				},
  				{
  					url:'/static/image/index/latent/guan/6.jpg',
  					price:'¥1.500',
  					induce:'其他， 园丁的时间'
  				},
  				{
  					url:'/static/image/index/latent/guan/7.jpg',
  					price:'¥3,380',
  					induce:'水彩（粉）， 无题3'
  				},
  				{
  					url:'/static/image/index/latent/guan/8.jpg',
  					price:'¥3,380',
  					induce:'其他， 文化融合-新八卦道'
  				},
  			],
  			message:[
  				{
  					id:'jiamian',
  					name:'加冕',
  					url:'/static/image/index/latent/guan/guan1.jpg',
  					author:'王加诺'
  				}
  			]
  		}
  	},
  	methods:{
  		goback(){
  			history.back()
  		},
  		addcar:function(){
  			JSON.stringify(this.message)
  			console.log(JSON.stringify(this.message))
  			localStorage.setItem('crowned',JSON.stringify(this.message))
  		}
  	}
}
</script>

<style scroped lang="less">
.shopping{
	width: 500px;
	.header{
		text-align: center;
		img{
			margin-top:15px;
		}
	}
	section{
		width: 100%;
		margin-left:25px;
		.onlypic{
			margin: auto;
			img{
				width:450px;
			}
		}
		.induce{
			margin:20px 25px;
			text-align: left;
			font-size: 20px;
			span:nth-child(3){
				color:red;
			}
			span:nth-child(5){
				font-size: 15px;
				color:#666;
			}
		}
		.coast{
			margin:20px 25px;
		}
		.about{
			position: relative;
			img{
				width:200px;
			}
			img:nth-child(1){
				box-shadow: -5px 5px 5px 0 #aeaeae;
			}
			img:nth-child(2){
				position: absolute;
			}
			.aboutart{
				width: 240px;
				position: absolute;
				top:100px;
				left: 250px;
			}
		}
		.message{
			position: relative;
			img{
				width:200px;
			}
			.crowned{
				position: absolute;
				bottom:60px;
				left: 225px;
			}
		}
		.tit{
			text-align: center;
			margin: 15px 0;
		}
		.evaluate>span{
			display: inline-block;
			width: 450px;
			line-height: 35px;
		}
		.details{
			width: 450px;
			img{
				width:450px;
			}
			>span{
				display: block;
				margin:20px auto;
			}
		}
		.bgcroom{
			img{
				width: 100px;
				height: 100px;
				position: absolute;
			}
			.room{
				width: 450px;
				height: 255px;
				background-size: contain;
				background-repeat: no-repeat;
				margin:10px 0;
				position: relative;
			}
			.bgcroom1{
				background-image: url('/static/image/index/latent/guan/guan5.jpg');
				img{
					top:50px;
					left: 250px;
				}
			}
			.bgcroom2{
				background-image: url('/static/image/index/latent/guan/guan6.jpg');
				img{
					top:50px;
					left: 190px;
				}
			}
			.bgcroom3{
				background-image: url('/static/image/index/latent/guan/guan7.jpg');
				img{
					top:50px;
					left: 120px;
				}
			}
		}
		.others img{
			width: 440px;
			margin-right: 30px;
		}
		.picflex{
			width: 500px;
			display: flex;
			justify-content: space-around;
			align-content: space-around;
			flex-wrap: wrap;
			margin-left: -20px;
			div{
				width: 200px;
				text-align: right;
				img{
					width: 100%;
				}
			}
		}
		.botm{
			background-color: #eeeeee;
			text-align: center;
			margin: 0 -35px 80px -35px;
			height: 50px;
			line-height: 50px;
		}
	}
		.pay{
			width: 100%;
			position: fixed;
			z-index:10;
			bottom:0;
			text-align: center;
			display: flex;
			background-color: #fff;
			.car{
				width: 80px;
			}
			.add{
				width: 270px;
				color:#333333;
			}
			.payst{
				width: 150px;
				background-color: #ee403c;
				h2{
					color:#fff;
				}
			}
		}
}
</style>