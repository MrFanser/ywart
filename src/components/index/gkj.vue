<template>
  <div class="gkj">
  	<div class="head">
  		<p>艺网微个展 郭柯君 | 在秋日收获宁静与喜悦</p>
  		<img src="/static/image/index/latent/gkj/1.jpg" alt="">
  		<span>艺网微个展 郭柯君 | 在秋日收获宁静与喜悦</span>
  	</div>
  	<div>
  		<span class="describe">“回想小时候种南瓜、收南瓜的那种喜悦，是我画这些画的初衷，现在每次带着自己的孩子去农场采摘时候，仍然对南瓜有一种满满的情感，它给人一种祥和、满足、喜庆之感”。</span>
  		<div class="induc" v-for="i in item">
  			<img :src="i.url" alt="">
  			<span>{{i.thems}}</span>
  			<span>{{i.author}}</span>
  			<span>{{i.data}}</span>
  			<span>{{i.price}}</span>
  			<span>{{i.size}}</span>
  		</div>	
  		<span class="describe">“绘画对我来说是件很有意思的事情，它能反映自己各个阶段的状态，也会随着内心世界、价值取向的改变而改变。记得自己刚来北京的时候，满怀激情准备施展拳脚大干一场，可残酷的现实让我很快清醒过来，前途茫茫让我内心充满了各种怀疑与挣扎，生活没有方向，看不到未来，那时的画基本上也是这样一种状态，很浮躁，很痛苦。后来是信仰改变了我，也可以说是我遇见了生命中的光，当被开启，被点燃的时候，是一次重生，也是一种反转，就像硬件还是原来的硬件，但系统已经换成全新的了”。</span>
  		<div class="induc" v-for="i in items">
  			<img :src="i.url" alt="">
  			<span>{{i.thems}}</span>
  			<span>{{i.author}}</span>
  			<span>{{i.data}}</span>
  			<span>{{i.price}}</span>
  			<span>{{i.size}}</span>
  		</div>	
  		<span class="describe">“人在生命的每一个阶段，情绪都会有些不一样的。总不能一直痛苦，一直欢喜。大多时候还是需要一些平静。所以我的作品用了大量的蓝色，希望营造一种宁静安稳的感觉”。</span>
  		<div class="induc" v-for="i in good">
  			<img :src="i.url" alt="">
  			<span>{{i.thems}}</span>
  			<span>{{i.author}}</span>
  			<span>{{i.data}}</span>
  			<span>{{i.price}}</span>
  			<span>{{i.size}}</span>
  		</div>
  		<span class="describe">“我的画选择的材料是宣纸，经过各种尝试，还是觉得纸最适合我的表达，宣纸光而不滑、洁白稠密、润墨性强，当画笔用水调和颜料遇到纸面的那一刻，水多水少会直接影响最后呈现的效果，有时会出现一些意外的惊喜。至于内容方面，也没有所谓的大主题，更不想发明一个符号来回复制，我就凭感动而画，生活的点点滴滴都是创作的材料与源泉，当热爱生活的心重新拾起，随处都是感动，回到儿时起初最熟悉的体念与环境：青石绿水、古松明月、翠竹山林、虫鸣鸟叫、毛线萌猫。最初创作时可能并没有想那么多，就是用最适合自己的方式表达一些美好的东西，让人感到一些趣味与希望，印象派画家雷偌阿说过这样的话：“这个世界已经够多黑暗丑陋的东西了，我不想再添加”。　</span>
  		<div class="induc" v-for="i in goods">
  			<img :src="i.url" alt="">
  			<span>{{i.thems}}</span>
  			<span>{{i.author}}</span>
  			<span>{{i.data}}</span>
  			<span>{{i.price}}</span>
  			<span>{{i.size}}</span>
  		</div>
  		<span class="describe">“我希望创作是有感而发、自然而然的流露出来，画面表达的想要更加的单纯、更加的直接一些，没有一劳永逸，只有让它自由生长，也许会停滞不前，哪怕是后退几步，那也是整个过程经过的一部分，都有其意义与价值”。</span>
  	</div>
  	<div class="about">
  		<h3>关于艺术家</h3>
  		<img src="/static/image/index/latent/gkj/13.png" alt="">
  		<p><b>郭柯君</b></p>
  		<p>1982年生于湖南益阳</p>
  		<p>2015年本科毕业于湖南文理学院美术系</p>
  		<p>现工作生活于北京</p>
  		<p>个展</p>
  		<p>《微-光》个展   hiart space   上海</p>
  		<p>群展</p>
  		<p>2019  </p>
  		<p>金猪纳吉  当代艺术展    杨国际艺术中心  北京</p>
  		<p>Hi21   艺术展  北京</p>
  		<p>2018</p>
  		<p>旺财报安当代艺术展   杨国际艺术中心   北京</p>
  		<p>春季Hi21新锐艺术市集   艺术北京</p>
  		<p>5周年Hi21新锐艺术市集   上海宝龙艺术中心</p>
  		<p>2017</p>
  		<p>春季新锐艺术市集   北京</p>
  		<p>2016</p>
  		<p>保利澳门酒店艺术博览会   澳门</p>
  		<p>春季Hi21新锐艺术市集   北京</p>
  		<p>hiart space上海空间开幕展   上海</p>
  		<p>冬季Hi21新锐艺术市集   北京</p>
  		<p>2015</p>
  		<p>春季Hi21新锐艺术市集   北京</p>
  		<p>秋季Hi21新锐艺术市集   北京</p>
  		<p>上海城市艺术博览会   上海</p>
  		<p>2014</p>
  		<p>首届Hi21新锐艺术市集   北京</p>
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
  				url:'/static/image/index/latent/gkj/0.jpg',
  				thems:'歇息',
  				author:'郭柯君',
  				price:'￥10.560',
  				data:2018,
  				size:'油画 45.0*32.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/2.jpg',
  				thems:'协奏曲2',
  				author:'郭柯君',
  				price:'￥11.860',
  				data:2018,
  				size:'油画 35.0*50.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/3.jpg',
  				thems:'协奏曲6',
  				author:'郭柯君',
  				price:'￥15.760',
  				data:2018,
  				size:'油画 4885.0*48.0cm'
  			},
  		],
  		items:[
  			{
  				url:'/static/image/index/latent/gkj/4.jpg',
  				thems:'协奏曲7',
  				author:'郭柯君',
  				price:'￥10.560',
  				data:2018,
  				size:'油画 68.0*68.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/5.jpg',
  				thems:'协奏曲8',
  				author:'郭柯君',
  				price:'￥11.860',
  				data:2018,
  				size:'油画 96.0*90.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/6.jpg',
  				thems:'协奏曲10',
  				author:'郭柯君',
  				price:'￥15.760',
  				data:2018,
  				size:'油画 138.0*68.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/7.jpg',
  				thems:'协奏曲11',
  				author:'郭柯君',
  				price:'￥15.760',
  				data:2018,
  				size:'油画 138.0*35.0cm'
  			},
  		],
  		good:[
  			{
  				url:'/static/image/index/latent/gkj/8.jpg',
  				thems:'协奏曲12',
  				author:'郭柯君',
  				price:'￥10.560',
  				data:2018,
  				size:'油画 138.0*35.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/9.jpg',
  				thems:'协奏曲15',
  				author:'郭柯君',
  				price:'￥11.860',
  				data:2018,
  				size:'油画 48.0*45.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/10.jpg',
  				thems:'协奏曲16',
  				author:'郭柯君',
  				price:'￥15.760',
  				data:2018,
  				size:'油画 68.0*55.0cm'
  			}
  		],
  		goods:[
  			{
  				url:'/static/image/index/latent/gkj/11.jpg',
  				thems:'协奏曲18',
  				author:'郭柯君',
  				price:'￥10.560',
  				data:2018,
  				size:'油画 60.0*45.0cm'
  			},
  			{
  				url:'/static/image/index/latent/gkj/12.jpg',
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
.gkj{
	width: 500px;
	position: relative;
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