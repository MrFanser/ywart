<template>
  <div class="phil">
  	<div class="head">
  		<p>艺网微个展 李龙飞 | 理性、哲学、空灵</p>
  		<img src="/static/image/index/latent/phil/0.jpg" alt="">
  		<span>艺网微个展 李龙飞 | 理性、哲学、空灵</span>
  	</div>
  	<div>
      <span>”理性、哲学、空灵”——当被媒体问及会用怎样的关键词来概括自己的艺术时，李龙飞这样回答。同这个年轻艺术家对话，你会感觉到那种不加掩饰的坦率和自信，对于自我艺术创作冷静的路径规划，和某种宏观层面的创作格局。而从李龙飞作品当中散发出来的那些神秘而空灵的力量，则更加令人着迷。年轻不止要有荷尔蒙，还要有创造力，扔掉习惯有专属的符号</span>
      <h3> 艺术家自述</h3>
  		<span class="describe">真正开始艺术创作是从大二开始，那时候已经大概看完了中外美术史，我虽然那时候只能接受传统的具象的，从塞尚往后的一些代表人物我那时是接受不了的。几年前我就觉得自己是独立的，至于完整，我倒不希望现在就完整，或许活着就不会让它完整</span>
      <h3>2015作品</h3>
  		<div class="induc" v-for="i in item">
  			<img :src="i.url" alt="">
  			<span>{{i.thems}}</span>
  			<span>{{i.author}}</span>
  			<span>{{i.data}}</span>
  			<span>{{i.price}}</span>
  			<span>{{i.size}}</span>
  		</div>	
      <h3> 艺术家自述</h3>
  		<span class="describe">保持一种探索的态度，让每一个探索都变得成立，这个在我这里是很重要的事情。任何时代都是作品在第一位的，除此之外，敏锐度和情商加演技都高一些，会有助于被动的更优秀。只要心中有一把不灭的火，明白自己所做的一切就好。创作和生活一样重要。所以没有什么事情是一定要做的，也没有什么事情是一定不能做的，开心就好。</span>
      <h3>2016作品</h3>
  		<div class="induc" v-for="i in items">
  			<img :src="i.url" alt="">
  			<span>{{i.thems}}</span>
  			<span>{{i.author}}</span>
  			<span>{{i.data}}</span>
  			<span>{{i.price}}</span>
  			<span>{{i.size}}</span>
  		</div>	
  		<h3> 艺术家自述</h3>
      <span class="describe">真正开始艺术创作是从大二开始，那时候已经大概看完了中外美术史，我虽然那时候只能接受传统的具象的，从塞尚往后的一些代表人物我那时是接受不了的。几年前我就觉得自己是独立的，至于完整，我倒不希望现在就完整，或许活着就不会让它完整</span>
      <h3>2017作品</h3>
  		<div class="induc" v-for="i in good">
  			<img :src="i.url" alt="">
  			<span>{{i.thems}}</span>
  			<span>{{i.author}}</span>
  			<span>{{i.data}}</span>
  			<span>{{i.price}}</span>
  			<span>{{i.size}}</span>
  		</div>
  		<h3> 艺术家自述</h3>
      <span class="describe">“在日常生活中找到乐趣点是自我娱乐的导线。我不认为这个世界很可悲，只是我们还没有真正找到快乐的本质”。</span>
      <h3>2018作品</h3>
  		<div class="induc" v-for="i in goods">
  			<img :src="i.url" alt="">
  			<span>{{i.thems}}</span>
  			<span>{{i.author}}</span>
  			<span>{{i.data}}</span>
  			<span>{{i.price}}</span>
  			<span>{{i.size}}</span>
  		</div>
  	</div>
  	<div class="about">
  		<h3>关于艺术家</h3>
  		<img src="/static/image/index/latent/phil/1.png" alt="">
  		<p><b>李龙飞 </b></p>
  		<p>1988年出生于广西桂林</p>
  		<p>2012年毕业于华中师范大学油画系</p>
  		<p>现在北京职业创作</p>
  		<p>展览</p>
  		<p>2018</p>
  		<p>艺术北京，全国农展馆，北京</p>
  		<p>青年艺术+海外巡展，斯里兰卡中国文化中心，斯里兰卡</p>
  		<p>趣玩，先声画廊，北京</p>
  		<p>2017</p>
  		<p>启航，时代艺龙美术馆，北京</p>
  		<p>艺术厦门，厦门国际会展中心，厦门</p>
  		<p>穿越-青年艺术+优秀作品海外巡展，斯里兰卡中国文化中心，科伦坡，斯里兰卡</p>
  		<p>穿越-青年艺术+优秀作品海外巡展，曼谷中国文化中心，曼谷，泰国</p>
  		<p>中国新艺术，中国雕塑博物馆，大同</p>
  		<p>常青藤计划2017.中国青年艺术家年展，天津美术馆，天津</p>
  		<p>巴西库里蒂巴双年展，城市艺术博物馆，库里蒂巴，巴西</p>
  		<p>2016</p>
  		<p>中国创造力当代艺术交流展，桥舍画廊，北京</p>
  		<p>当代都市的游荡者，青研会画廊，北京</p>
  		<p>青年艺术100，全国农业展馆，北京</p>
  		<p>常青藤计划2016.全国青年艺术家年展，天津美术馆，天津</p>
  		<p>青年艺术+，宋庄当代艺术文献馆，北京</p>
  		<p>无界--第二届德中青年艺术家发展基金联展，Sans Titre美术馆，波茨坦，德国</p>
  		<p>2015</p>
  		<p>Goart艺术节,环球金融中心,北京</p>
  		<p>Hi21新锐艺术市集,兰境艺术中心,北京</p>
      <p>艺术北京,全国农展馆,北京</p>
      <p>保利十年青锋艺术博览会,全国农展馆,北京</p>
      <p>第二届保利学院之星,时间博物馆,北京</p>
      <p>常青藤计划2015.中国青年艺术家年展，今日美术馆，北京</p>
      <p>艺术广东，保利世界贸易中心博览馆，广州</p>
      <p>第二届南京国际美术展，南京国际展览中心，南京</p>
      <p>写生.梦想，天津美术馆，天津</p>
      <p>智象当代艺术展，悦.美术馆，北京</p>
  	</div>
  	<div class="more">
  		<h1>更多作品</h1>
  		<div>
	  		<div class="pic" v-for="i in more">
	  			<img :src="i.url" alt="">
	  			<span>{{i.author}}</span>
		  		<span>{{i.size}}</span>
		  		<h3>{{i.price}}</h3>	
	  		</div>	
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  data(){
  	return {
  		item:[
  			{
  				url:'/static/image/index/latent/phil/0.jpg',
  				thems:'歇息',
  				author:'郭柯君',
  				price:'￥10.560',
  				data:2018,
  				size:'油画 45.0*32.0cm'
  			},
  			{
  				url:'/static/image/index/latent/phil/2.jpg',
  				thems:'协奏曲2',
  				author:'郭柯君',
  				price:'￥11.860',
  				data:2018,
  				size:'油画 35.0*50.0cm'
  			},
  			{
  				url:'/static/image/index/latent/phil/3.jpg',
  				thems:'协奏曲6',
  				author:'郭柯君',
  				price:'￥15.760',
  				data:2018,
  				size:'油画 4885.0*48.0cm'
  			},
  		],
  		items:[
  			{
  				url:'/static/image/index/latent/phil/4.jpg',
  				thems:'协奏曲7',
  				author:'郭柯君',
  				price:'￥10.560',
  				data:2018,
  				size:'油画 68.0*68.0cm'
  			},
  			{
  				url:'/static/image/index/latent/phil/5.jpg',
  				thems:'协奏曲8',
  				author:'郭柯君',
  				price:'￥11.860',
  				data:2018,
  				size:'油画 96.0*90.0cm'
  			},
  			{
  				url:'/static/image/index/latent/phil/6.jpg',
  				thems:'协奏曲10',
  				author:'郭柯君',
  				price:'￥15.760',
  				data:2018,
  				size:'油画 138.0*68.0cm'
  			},
  			{
  				url:'/static/image/index/latent/phil/7.jpg',
  				thems:'协奏曲11',
  				author:'郭柯君',
  				price:'￥15.760',
  				data:2018,
  				size:'油画 138.0*35.0cm'
  			},
  		],
  		good:[
  			{
  				url:'/static/image/index/latent/phil/8.jpg',
  				thems:'协奏曲12',
  				author:'郭柯君',
  				price:'￥10.560',
  				data:2018,
  				size:'油画 138.0*35.0cm'
  			},
  			{
  				url:'/static/image/index/latent/phil/9.jpg',
  				thems:'协奏曲15',
  				author:'郭柯君',
  				price:'￥11.860',
  				data:2018,
  				size:'油画 48.0*45.0cm'
  			},
  			{
  				url:'/static/image/index/latent/phil/10.jpg',
  				thems:'协奏曲16',
  				author:'郭柯君',
  				price:'￥15.760',
  				data:2018,
  				size:'油画 68.0*55.0cm'
  			}
  		],
  		goods:[
  			{
  				url:'/static/image/index/latent/phil/11.jpg',
  				thems:'协奏曲18',
  				author:'郭柯君',
  				price:'￥10.560',
  				data:2018,
  				size:'油画 60.0*45.0cm'
  			},
  			{
  				url:'/static/image/index/latent/phil/12.jpg',
  				thems:'协奏曲17',
  				author:'郭柯君',
  				price:'￥11.860',
  				data:2018,
  				size:'油画 68.0*68.0cm'
  			}
  		],
  		more:[
  			{
  				url:'/static/image/index/latent/gkj/14.jpg',
  				author:'郭柯君',
  				price:'￥10.560',
  				size:'油画 60.0*45.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/15.jpg',
  				thems:'协奏曲17',
  				author:'郭柯君',
  				price:'￥11.860',
  				data:2018,
  				size:'油画 68.0*68.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/16.jpg',
  				thems:'协奏曲12',
  				author:'郭柯君',
  				price:'￥10.560',
  				data:2018,
  				size:'油画 138.0*35.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/17.jpg',
  				thems:'协奏曲15',
  				author:'郭柯君',
  				price:'￥11.860',
  				data:2018,
  				size:'油画 48.0*45.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/18.jpg',
  				thems:'协奏曲16',
  				author:'郭柯君',
  				price:'￥15.760',
  				data:2018,
  				size:'油画 68.0*55.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/9.jpg',
  				thems:'协奏曲8',
  				author:'郭柯君',
  				price:'￥11.860',
  				data:2018,
  				size:'油画 96.0*90.0cm'
  			}
  		]
  	}
  }
}
</script>

<style scoped lang="less">
.phil{
	width: 500px;
	position: relative;
  h3{
    text-align: center;
  }
	img{
		width: 497px;
	}
	span{
		margin: 30px 0;
		color: #666;
	}
	>div>span{
		position: relative;
		left: 25px;
		display: inline-block;
		
	}
	.head{
		text-align: center;
		span{
			position: relative;
			left: 0;
			font-size: 28px;
		}
	}
	.describe{
		display: block;
		width: 450px;
	}
	.induc{
		text-align: center;
		border: 1px solid #9a9a9a;
		padding: 20px 0 20px 0;
		margin-bottom: 50px; 
		span{
			display: block;
		}
	}	
	.more{
		position: relative;
		border-top: 2px dotted #666;
		margin: 80px 0;
		width: 500px;
		h1{
			position: relative;
			top:-45px;
			left:150px;
			width:200px;
			text-align: center;
			background-color: #fff;
			color: #666;
		}
		>div{
			display: flex;
			width: 500px;
			justify-content: space-between;
			align-content: space-between;
			flex-wrap: wrap;
		}
		.pic{
			width: 240px;
			img{
				width: 100%;
			}
			h3{
				color: green;
			}
		}
	}
}

</style>