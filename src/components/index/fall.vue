<template>
  <div class="fall">
    <div class="backer" @click="goback"><img src="/static/image/index/public/back.png" alt=""></div>
  	<div class="head">
  		<p>艺礼 | 挑一副艺术佳作送给秋天出生的朋友</p>
  		<img src="/static/image/index/latent/fall/0.jpg" alt="">
  		<span>艺礼 | 挑一副艺术佳作送给秋天出生的朋友</span>
  	</div>
  	<div>
  		<span class="describe">
        秋风凉凉<br>
        把夏末的一丝热意悄然吹走<br>
        大地褪去盛夏青葱换新颜<br><br>
        金秋九月，月儿圆圆，风儿卷卷<br>
        天空湛蓝，白云悠闲，落日红叶<br>
        一径的花落悄然入画<br>
        把一份情意轻拈深藏<br><br>
        蟹黄肥美，秋虫浅呤，群鸟归巢<br>
        橙黄橘绿，瓜果累累，金桂飘香<br>
        满眼的丰收如痴如醉<br>
        携一幅丹青轻叩流年<br><br>
        秋天出生的人儿呀<br>
        最是情深意重的人儿<br>
        美图佳作配佳人，此物最撩人<br>
        </span>
      	<div class="induc" v-for="i in item">
            <div>
      			<img :src="i.url" alt="">
                <span>{{i.thems}}</span>
                <span>{{i.author}}</span>
                <span>{{i.data}}</span>
                <span>{{i.price}}</span>
                <span>{{i.size}}</span> 
            </div>
            <span>{{i.des}}</span>
        </div>
  	</div>
  	<div class="more">
  		<h3>更多作品</h3>
  		<div>
	  		<div class="pic" v-for="i in more">
	  			<img :src="i.url" alt="">
	  			<span>{{i.author}}</span><br>
		  		<span>{{i.size}}</span><br>
		  		<h4>{{i.price}}</h4>	
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
      				url:'/static/image/index/latent/fall/2.png',
      				thems:'歇息',
      				author:'郭柯君',
      				price:'￥10.560',
      				data:2018,
      				size:'油画 45.0*32.0cm',
                    des:'艺评：徐毛毛的作品中时常出现一些奇特怪诞而又朴实平凡的元素，构筑出童话般色彩绚烂的奇幻世界。看似鲜艳快乐的色彩下表达一种率性自由，平淡安静的思绪。'
      			},
      			{
      				url:'/static/image/index/latent/fall/3.jpg',
      				thems:'协奏曲2',
      				author:'郭柯君',
      				price:'￥11.860',
      				data:2018,
      				size:'油画 35.0*50.0cm',
                    des:'艺评：大片大片柔软的草地，盛满粉色的小花。作品《芬芳》有一种点装饰的重复味道，粉灰的色彩，内敛低调。画面有着想象空间的唯美，动人心扉，层次感强，赏心悦目。'
      			},
      			{
      				url:'/static/image/index/latent/fall/4.jpg',
      				thems:'协奏曲6',
      				author:'郭柯君',
      				price:'￥15.760',
      				data:2018,
      				size:'油画 4885.0*48.0cm',
                    des:'艺评：画中小小的马儿仿佛是我们自己，小小的马儿有着大大的世界，有山有水有秀丽的风景相伴，休憩的日子能够如此，也是美梦成真了。'
      			},
                {
                    url:'/static/image/index/latent/fall/5.jpg',
                    thems:'协奏曲7',
                    author:'郭柯君',
                    price:'￥10.560',
                    data:2018,
                    size:'油画 68.0*68.0cm',
                    des:'艺评：“花”无论是作为自然界植物形态的花，还是人文学科中艺术性的花，都和人有着非常密切的关系，尤其是女人，一生下来就注定与花有着不解之缘。花与女人好像有一种天然联系，一种生物形态的相似性，但似乎又是一种人文的结合、一种社会文化意义上的强加。'
               },
               {
                    url:'/static/image/index/latent/fall/6.jpg',
                    thems:'协奏曲8',
                    author:'郭柯君',
                    price:'￥11.860',
                    data:2018,
                    size:'油画 96.0*90.0cm',
                    des:'艺评：张占占的画，总能用最简单质朴的东西打动你，让你的情绪大起大落，先是会觉得它可爱又萌萌的，然后就是深沉又安静，之后又会生出一种柔软微妙的情绪，这些感触是很难得的，一幅画的成功之处，就是要让观赏者欣赏出自己的味道来，而张占占做到了。'
               },
               {
                    url:'/static/image/index/latent/fall/7.jpg',
                    thems:'协奏曲10',
                    author:'郭柯君',
                    price:'￥15.760',
                    data:2018,
                    size:'油画 138.0*68.0cm',
                    des:'艺评：艺术家郭泰来被称为艳彩艺术创始人，他的作品比油画还要鲜艳，因为里面有很多的荧光色/亮色，在室内空间的艺术品布置中，它是空间提亮，提升空间品位非常不错的选择。他的画，老少皆宜，被大众所喜爱着。'
               },
               {
                    url:'/static/image/index/latent/fall/8.jpg',
                    thems:'协奏曲11',
                    author:'郭柯君',
                    price:'￥15.760',
                    data:2018,
                    size:'油画 138.0*35.0cm',
                    des:'艺评：在创作过程中，我试图让每一幅作品都去探讨一个相对独立命题，基于一种自我的求真意识，用写实的语言方式来表达经过对身处时代的思考而产生的与现实语境相关联的、具有反思性的观念意识。'
               },
               {
                    url:'/static/image/index/latent/fall/9.jpg',
                    thems:'协奏曲18',
                    author:'郭柯君',
                    price:'￥10.560',
                    data:2018,
                    size:'油画 60.0*45.0cm',
                    des:'艺评：雕塑卡通而富于梦幻气质，细品时有淡淡的调侃意味。彩色地去生活，像是向着太阳吹肥皂泡泡，色彩斑斓，却是轻风就能吹破。'
               },
               {
                    url:'/static/image/index/latent/fall/10.jpg',
                    thems:'协奏曲17',
                    author:'郭柯君',
                    price:'￥11.860',
                    data:2018,
                    size:'油画 68.0*68.0cm',
                    des:'艺评：曹继才的作品充满童真，像在为我们讲述一个童话故事。作品致敬了经典的卡通形象，画面纯粹、干净，让我们的记忆在一瞬间回到童年。也许整个世界都在催促你成长，但是在这里，你可以永远不长大。'
               },
               {
                    url:'/static/image/index/latent/fall/11.jpg',
                    author:'郭柯君',
                    price:'￥10.560',
                    data:2018,
                    size:'油画 60.0*45.0cm',
                        des:'艺评：艺术家观看了大量的电影图像，并给她提供了一种重要的思考方式，这是在日常生活美学之后，依托于除绘画之外的他者文本来架构自我化的叙事。在创作过程中，艺术家可能选择的是在观影过程中打动自己的几帧画面，这种即瞬情绪的捕捉成为蒋漪涟日常察微的「浮标」，把电影中碎片感受度量成情感叙述的组成部分。'
                },
                {
                    url:'/static/image/index/latent/fall/12.jpg',
                    thems:'协奏曲17',
                    author:'郭柯君',
                    price:'￥11.860',
                    data:2018,
                    size:'油画 68.0*68.0cm',
                    des:'艺评：在艺术家张鑫的作品中不见纷繁世界的嘈杂与庸扰，一片纯粹静雅的淡蓝背景将观者的眼与心都细心照料，最后于一片无边遐想中给予缱绻温柔的思考，或瞬间清醒灵感如约而至，或沉静感叹将回忆细数一二。'
                },
                {
                    url:'/static/image/index/latent/fall/13.jpg',
                    thems:'协奏曲12',
                    author:'郭柯君',
                    price:'￥10.560',
                    data:2018,
                    size:'油画 138.0*35.0cm',
                    des:'艺评：曹继才的作品充满童真，像在为我们讲述一个童话故事。作品致敬了经典的卡通形象，画面纯粹、干净，让我们的记忆在一瞬间回到童年。也许整个世界都在催促你成长，但是在这里，你可以永远不长大。'
                },
                {
                    url:'/static/image/index/latent/fall/14.jpg',
                    thems:'协奏曲15',
                    author:'郭柯君',
                    price:'￥11.860',
                    data:2018,
                    size:'油画 48.0*45.0cm',
                    des:'艺评：红、黄、绿、蓝、黑、白，在画面上被平涂成一个个的色块，极具艺术家个人特色的结构穿插与密集涂绘，看起来，这些画自由、轻快、无拘无束。'
                },
                {
                    url:'/static/image/index/latent/fall/15.jpg',
                    thems:'协奏曲16',
                    author:'郭柯君',
                    price:'￥15.760',
                    data:2018,
                    size:'油画 68.0*55.0cm',
                    des:'艺评：沈周来的布面油画作品具有强烈的表现主义风格，他的作品在思想和人性之间与我展开对话。剖析人的复杂性以及对于道路、未来所展开的基于“我”这样一个命题，并非是情绪上的自由，而是在思想上的对于浩渺世界反馈到我的表现，对于命运和现实以及时间线索下的“我”。'
                },
                {
                    url:'/static/image/index/latent/fall/16.jpg',
                    thems:'协奏曲8',
                    author:'郭柯君',
                    price:'￥11.860',
                    data:2018,
                    size:'油画 96.0*90.0cm',
                    des:'艺评：艺术家的工笔花鸟画路亦颇宽，在白描、淡彩、重彩上颇有尝试。尤其白描一格己有个人面目，实属不易。他的画得益于楚地风物的滋养，题材面宽、雅致而不乏激情，工笔画结构严谨，注意追寻古法，且保持着个人风格的探索。'
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
    },
    methods:{
        goback(){
            history.back()
        }
    }
}
</script>

<style scoped lang="less">
.fall{
    .backer img{
        width: 20px;
        position: absolute;
    }
	max-width: 700px;
    width: 100%;
	position: relative;
	img{
		max-width: 700px;
    width: 100%;
	}
	span{
		margin: 30px 0;
		color: #666;
	}
	>div>span{
		position: relative;
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
		max-width: 700px;
        width: 100%;
        text-align: center;
	}
	.induc{
    >div{

  		border: 1px solid #9a9a9a;
  		padding: 20px 0 20px 0;
  		margin-bottom: 50px; 
        text-align: center;
    }
		span{
			display: block;
		}
	}	
	.more{
		position: relative;
		border-top: 2px dotted #666;
		margin: 80px 0;
		max-width: 700px;
        width: 100%;
        h3{
            margin:auto;
			position: relative;
			top:-15px;
			width:100px;
			text-align: center;
			background-color: #fff;
			color: #666;

		}
		>div{
			display: flex;
			max-width: 700px;
            width: 100%;
			justify-content: space-between;
			align-content: space-between;
			flex-wrap: wrap;
		}
		.pic{
			width: 45%;
			img{
				width: 100%;
			}
			h4{
				color: green;
			}
		}
	}
}

</style>