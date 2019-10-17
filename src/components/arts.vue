<template>
  	<div class="arts">
	  	<div class="head"><img src="/static/image/index/public/ss.png" alt=""><input type="text" placeholder="搜索艺术家"></div>
	  	<div class="star">
	  		<p>艺网之星</p>
	  		<img src="/static/image/art/1.jpg" alt=""><br>
	  		<span><b>宿哲：</b>青春时代</span><br>
	  		<span>宿哲的作品采用的是写实主义手法，但表现出来的气质却不是传统写实作品可以等同的，他的作品似乎也预示了写实绘画的崭新前景。</span>
	  	</div>
	  	<div class="artactive">
	  		<p>艺术家动态</p>
			<div class="langactive">
				<div>
					<div v-for="(pic,o) in actived" :key="o">
						<img :src="pic.url" alt="">
						<span>{{pic.activeh3}}</span>
					</div>
				</div>
			</div>
	  	</div>
	  		<p>往期艺网之星</p>
	  	<div class="human" v-for="(item,i) in imgs" :key="i">
	  		<img :src="item.path" alt="">
	  		<div class="ind">
		  		<span>{{item.name}}</span><br>
		  		<span>{{item.introduce}}</span>	
	  		</div>
	  		<div class="lang">
	  			<div>
	  				<div v-for="(pic,j) in imgs[i].img" :key="j">
	  					<img :src="pic.url" alt="">
	  					<span>{{pic.price}}</span><br>
	  					<span>{{pic.tit}}</span>
	  				</div>
	  			</div>
	  		</div>
	  	</div>
	  	<div class="artsearch">
	  		<p>艺术家索引</p>
	  		<div class="search">
	  			<div><b>A</b><b>B</b><b>C</b><b>D</b><b>E</b><b>F</b><b>G</b><b>H</b><b>I</b><b>J</b></div>
	  			<div><b>K</b><b>L</b><b>M</b><b>N</b><b>O</b><b>P</b><b>Q</b><b>R</b><b>S</b><b>T</b></div>
	  			<div><b>U</b><b>V</b><b>W</b><b>X</b><b>Y</b><b>Z</b><b>#</b></div>
	  		</div>
	  	</div>
      <div class="last">
        <img src="/static/image/index/latent/art/ysjzpzj.png" alt="">
      </div>
  	</div>
</template>

<script>
export default {
  	data(){
  		return{
  			imgs:[
  				{
  					path:'/static/image/art/zx.jpg',
  					name:'张鑫',
  					introduce:'出生于天津天津美术学院油画系，硕士现居北京',
  					img:[
  						{
  							url:'/static/image/art/3.jpg',
  							price:'￥13.070',
  							tit:'施洗',
  						},
  						{
  							url:'/static/image/art/4.jpg',
  							price:'￥22.830',
  							tit:'无我之境'
  						},
  						{
  							url:'/static/image/art/4.jpg',
  							price:'￥23.210',
  							tit:'一瞬'
  						},
  						{
  							url:'/static/image/art/5.jpg',
  							price:'￥7.870',
  							tit:'逐'
  						},
  						{
  							url:'/static/image/art/6.jpg',
  							price:'￥9.260',
  							tit:'新生'
  						},
  						{
  							url:'/static/image/art/7.jpg',
  							price:'￥22.830',
  							tit:'时光'
  						},
  						{
  							url:'/static/image/art/8.jpg',
  							price:'￥15.600',
  							tit:'非空'
  						},
  						{
  							url:'/static/image/art/9.jpg',
  							price:'￥13.460',
  							tit:'畅游'
  						},
  						{
  							url:'/static/image/art/10.jpg',
  							price:'￥19.960',
  							tit:'幻世'
  						}
  					]
  				},
  				{
  					path:'/static/image/art/wys.jpg',
  					name:'王韫琛',
  					introduce:'出生于天津天津美术学院油画系，硕士现居北京',
  					img:[
  						{
  							url:'/static/image/art/3.jpg',
  							price:'￥13.070',
  							tit:'施洗',
  						},
  						{
  							url:'/static/image/art/4.jpg',
  							price:'￥22.830',
  							tit:'无我之境'
  						},
  						{
  							url:'/static/image/art/4.jpg',
  							price:'￥23.210',
  							tit:'一瞬'
  						},
  						{
  							url:'/static/image/art/5.jpg',
  							price:'￥7.870',
  							tit:'逐'
  						},
  						{
  							url:'/static/image/art/6.jpg',
  							price:'￥9.260',
  							tit:'新生'
  						},
  						{
  							url:'/static/image/art/7.jpg',
  							price:'￥22.830',
  							tit:'时光'
  						},
  						{
  							url:'/static/image/art/8.jpg',
  							price:'￥15.600',
  							tit:'非空'
  						},
  						{
  							url:'/static/image/art/9.jpg',
  							price:'￥13.460',
  							tit:'畅游'
  						},
  						{
  							url:'/static/image/art/10.jpg',
  							price:'￥19.960',
  							tit:'幻世'
  						}
  					]
  				},
  				{
  					path:'/static/image/art/mlt.jpg',
  					name:'牟林童',
  					introduce:'出生于天津天津美术学院油画系，硕士现居北京',
  					img:[
  						{
  							url:'/static/image/art/3.jpg',
  							price:'￥13.070',
  							tit:'施洗',
  						},
  						{
  							url:'/static/image/art/4.jpg',
  							price:'￥22.830',
  							tit:'无我之境'
  						},
  						{
  							url:'/static/image/art/4.jpg',
  							price:'￥23.210',
  							tit:'一瞬'
  						},
  						{
  							url:'/static/image/art/5.jpg',
  							price:'￥7.870',
  							tit:'逐'
  						},
  						{
  							url:'/static/image/art/6.jpg',
  							price:'￥9.260',
  							tit:'新生'
  						},
  						{
  							url:'/static/image/art/7.jpg',
  							price:'￥22.830',
  							tit:'时光'
  						},
  						{
  							url:'/static/image/art/8.jpg',
  							price:'￥15.600',
  							tit:'非空'
  						},
  						{
  							url:'/static/image/art/9.jpg',
  							price:'￥13.460',
  							tit:'畅游'
  						},
  						{
  							url:'/static/image/art/10.jpg',
  							price:'￥19.960',
  							tit:'幻世'
  						}
  					]
  				},
  				{
  					path:'/static/image/art/wsy.jpg',
  					name:'吴思雨',
  					introduce:'出生于天津天津美术学院油画系，硕士现居北京',
  					img:[
  						{
  							url:'/static/image/art/3.jpg',
  							price:'￥13.070',
  							tit:'施洗',
  						},
  						{
  							url:'/static/image/art/4.jpg',
  							price:'￥22.830',
  							tit:'无我之境'
  						},
  						{
  							url:'/static/image/art/4.jpg',
  							price:'￥23.210',
  							tit:'一瞬'
  						},
  						{
  							url:'/static/image/art/5.jpg',
  							price:'￥7.870',
  							tit:'逐'
  						},
  						{
  							url:'/static/image/art/6.jpg',
  							price:'￥9.260',
  							tit:'新生'
  						},
  						{
  							url:'/static/image/art/7.jpg',
  							price:'￥22.830',
  							tit:'时光'
  						},
  						{
  							url:'/static/image/art/8.jpg',
  							price:'￥15.600',
  							tit:'非空'
  						},
  						{
  							url:'/static/image/art/9.jpg',
  							price:'￥13.460',
  							tit:'畅游'
  						},
  						{
  							url:'/static/image/art/10.jpg',
  							price:'￥19.960',
  							tit:'幻世'
  						}
  					]
  				}
  			],
  			actived:[
  				{
  					url:'/static/image/art/3.jpg',
  					activeh3:'由“轻装修，重装饰”引发的家装行业“从艺”思考'
  				},
  				{
  					url:'/static/image/art/4.jpg',
  					activeh3:'艺网微个展 宿哲 | 保持自省，赋予时代意义'
  				},
  				{
  					url:'/static/image/art/4.jpg',
  					activeh3:'艺网微个展 陈尚昌 | 触动灵魂的感悟及思考'
  				},
  				{
  					url:'/static/image/art/5.jpg',
  					activeh3:'艺 网 微 个 展 黄 运 长 | 万物与我合而为一'
  				},
  				{
  					url:'/static/image/art/6.jpg',
  					activeh3:'艺网微个展 李少白 | 神秘的紫禁城，看不见的故宫'
  				}
  			]
  		}
  	}
}
</script>

<style scroped lang="less">
.arts{
	margin-bottom:80px;
	p{
		text-align: center;
		font-size: 30px;
	}
	.star{
		max-width: 700px;
		width: 100%;

		img{
			max-width: 700px;
    		width: 100%;
		}
		span{
			display: inline-block;
			font-size: 20px;
			line-height: 40px;
		}
	}
	.head{
		height: 70px;
		position: relative;
		img{
			margin-top: 10px;
			position: absolute;
			left:20px;
		}
		input{
			position: absolute;
			left: 80px;
			top:20px;
			width:230px;
			height:30px;
			outline: none;
			border:none;
		}
	}
	.lang{
		max-width: 700px;
		width: 100%;
		overflow-x:auto;
		&>div{
			width:1550px; 
			div{
				display: inline-block;
				width:150px;
				height: 220px;
				text-align: right;
				margin:  0 10px;
				img{
					width: 150px;
				}
			}
		}
	}
	.langactive{
		max-width: 700px;
		width: 100%;
		overflow-x:auto;
		&>div{
			width:1600px;
			div{
				display: inline-block;
				width:300px;
				margin:  0 10px;
				img{
					width: 300px;
				}
			}
		}
	}
	.human{
		position: relative;
		img{
			width: 50px;
			margin-left: 3px;
		}
		.ind{
			width: 75%;
			position: absolute;
			top:0;
			left:70px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	.search{
		max-width: 700px;
		width: 100%;
		div{
			display: flex;
			margin-left:20px;
			b{
				display: block;
				width: 10%;
				margin:10px 0;
			}
		}
	}
    .last{
        max-width: 700px;
        width: 100%;
        img{
            width: 100%;
        }
    }
}
</style>