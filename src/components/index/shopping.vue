<template>
  	<div class="shopping">
		<div class="header">
			<el-row>
			  	<el-col :span="4"><div class="grid-content bg-purple-dark"><img src="/static/image/index/public/back.png" alt="" @click="goback"></div></el-col>
			  	<el-col :span="16"><div class="grid-content bg-purple-dark"><h3>加冕</h3></div></el-col>
			  	<el-col :span="4"><div class="grid-content bg-purple-dark"><img src="/static/image/index/public/kefu.png" alt=""></div></el-col>
			</el-row>
		</div>
		<section>
			<div class="onlypic">
				<img src="/static/image/index/latent/guan/guan1.jpg" alt="">
			</div>
			<div class="induce">
				<span>{{proMsg.proName}}</span><br>
				<span>&yen;{{proMsg.price}}</span><br>
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
					<span><b>王加诺</b></span><br>
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
			<div class="others tit">
				<h3>其他细节展示</h3>
				<span>OTHER DETAILS</span><br>
				<img src="/static/image/index/latent/guan/qtxjzs.png" alt="">

				<h3>购买须知</h3>
				<span>PURCHASE NOTES</span><br>
				<img src="/static/image/index/latent/guan/gmxz.png" alt="">

				<h3>艺网小贴士</h3>
				<span>YWART TIPS</span><br>
				<img src="/static/image/index/latent/guan/ywxtzsc.png" alt="">
			</div>
			<div class="tit">
				<h3>推荐作品</h3>
				<span>RECOMMEND</span><br>
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
	  		<div class="car"><router-link to="/car"><img src="/static/image/index/public/wcar.png" alt=""></router-link></div>
	  		<div class="add" v-on:click="addcar"><h3>加入购物车</h3></div>
	  		<div class="payst"><h3>立即购买</h3></div>
	  	</div>
  	</div>
</template>

<script>
export default {
  	data(){
  		return{
  			proMsg:this.$route.params.dataObj,
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
  					author:'王加诺',
  					price:'12.230'
  				}
  			]
  		}
  	},
  	created(){
  		console.log(document.body.scrollTop)
  	},
  	methods:{
  		goback(){
  			history.back()
  		},
  		addcar:function(){
  			alert("成功添加到购物车");
  			if(localStorage.getItem("crowned")){
  				var temparr = localStorage.getItem("crowned");
  				var tempJson = JSON.parse(temparr);
  				tempJson.push(this.message[0]);
  				localStorage.setItem("crowned",JSON.stringify(tempJson));
  			}else{
  				JSON.stringify(this.message);
  				localStorage.setItem('crowned',JSON.stringify(this.message));
  			}
  		}
  	}
}
</script>

<style scroped lang="less">
*{
	margin:0;
	padding:0;
}
.shopping{
	max-width: 700px;
	width: 100%;
	.header{
		text-align: center;
		margin-top:5px;
		img{
			width: 30px;
		}
	}
	section{
		margin: auto;
		width: 100%;
		.onlypic{
			margin: auto;
			img{
				width:100%;
			}
		}
		.induce{
			margin:20px 0;
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
			margin:20px 0;
		}
		.about{
			position: relative;
			img{
				width:40%;
			}
			img:nth-child(1){
				box-shadow: -5px 5px 5px 0 #aeaeae;
			}
			img:nth-child(2){
				position: absolute;
			}
			.aboutart{
				width: 50%;
				position: absolute;
				top:30%;
				left: 45%;
			}
		}
		.message{
			position: relative;
			img{
				width:50%;
			}
			.crowned{
				position: absolute;
				bottom:10%;
				left: 55%;
			}
		}
		.tit{
			text-align: center;
			margin: 15px 0;
		}
		.evaluate>span{
			display: inline-block;
			width: 95%;
			line-height: 35px;
		}
		.details{
			max-width: 700px;
			width: 100%;
			img{
				width:100%;
			}
			>span{
				display: block;
				margin:20px auto;
			}
		}
		.others img{
			width: 100%;
		}
		.picflex{
			max-width: 700px;
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-content: space-around;
			flex-wrap: wrap;
			div{
				width: 40%;
				text-align: right;
				img{
					width: 100%;
				}
			}
		}
		.botm{
			max-width: 700px;
			width: 100%;
			text-align: center;
			margin: 0 auto 80px auto;
			height: 50px;
			line-height: 50px;
			background-color: #eeeeee;
		}
	}
		.pay{
			line-height: 40px;
			font-size: 13px;
			max-width: 700px;
			width: 100%;
			height:40px;
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
				width: 54%;
				color:#333333;
			}
			.payst{
				width: 30%;
				background-color: #ee403c;
				h3{
					color:#fff;
				}
			}
		}
}
</style>