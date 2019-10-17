<template>
    <div class="princess">
        <div class="backer" @click="goback"><img src="/static/image/index/public/back.png" alt=""></div>
      	<div class="head">
      		<p>姚文爽｜让一下！卷卷公主驾到！</p>
      		<img src="/static/image/index/latent/princess/0.jpg" alt="">
      		<span>姚文爽｜让一下！卷卷公主驾到！</span>
      	</div>
      	<div>
      		<span class="describe">艺术家姚文爽创作了“卷卷公主”，他也常被称为“卷爸”。那长着一个大大的脑袋，两边晃动着小卷毛和一双豌豆眼的卷卷公主，传达给观赏者很多奇思妙想，充满灵气的卷卷公主就这样走进了人们的心头。现在，卷卷公主有了自己的漫画和周边，被孩子们喜爱，卷卷公主的形象也通过姚文爽的油画作品，有了更多新奇的内涵。</span>
      		<div class="induc" v-for="i in item">
      			<img :src="i.url" alt="">
      			<span>{{i.thems}}.{{i.data}}</span>
      			<span>{{i.size}}</span>
      		</div>	
      		<span class="describe">欣赏卷卷公主，就像是和曾经的自己对话。毕竟，谁不怀念无拘无束的童年，谁不向往开心烂漫的日子呢？退一万步讲，谁还不是个小公主呢？ </span>
      		<div class="induc" v-for="i in items">
      			<img :src="i.url" alt="">
      			<span>{{i.thems}}.{{i.data}}</span>
      			<span>{{i.size}}</span>
      		</div>
        </div>
      	<div class="more">
      		<h3>更多作品</h3>
      		<div>
    	  		<div class="pic" v-for="i in more">
    	  			<img :src="i.url" alt="">
    	  			<span>{{i.author}}</span>
    		  		<span>{{i.size}}</span>
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
  				url:'/static/image/index/latent/princess/1.jpg',
  				thems:'会走路的心情',
  				data:2018,
  				size:'油画 45.0*32.0cm'
  			},
  			{
  				url:'/static/image/index/latent/princess/2.jpg',
  				thems:'协奏曲2',
  				data:2018,
  				size:'油画 35.0*50.0cm'
  			},
  			{
  				url:'/static/image/index/latent/princess/3.jpg',
  				thems:'协奏曲6',
  				data:2018,
  				size:'油画 4885.0*48.0cm'
  			},
  		],
  		items:[
  			{
  				url:'/static/image/index/latent/princess/4.jpg',
  				thems:'协奏曲7',
  				data:2018,
  				size:'油画 68.0*68.0cm'
  			},
  			{
  				url:'/static/image/index/latent/princess/5.jpg',
  				thems:'协奏曲8',
  				data:2018,
  				size:'油画 96.0*90.0cm'
  			},
  			{
  				url:'/static/image/index/latent/princess/6.jpg',
  				thems:'协奏曲10',
  				data:2018,
  				size:'油画 138.0*68.0cm'
  			},
  			{
  				url:'/static/image/index/latent/princess/7.png',
  				thems:'协奏曲11',
  				data:2018,
  				size:'油画 138.0*35.0cm'
  			},
        {
          url:'/static/image/index/latent/princess/8.jpg',
          thems:'协奏曲11',
          data:2018,
          size:'油画 138.0*35.0cm'
        },
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
.princess{
	max-width: 700px;
    width: 100%;
	position: relative;
    .backer{
        position: absolute;
        img{
            width: 20px;
            height: 20px;
        }
    }
	img{
		max-width: 700px;
        width: 100%;
	}
	span{
		margin: 30px 0;
		color: #666;
	}
	&>div>span{
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
		max-width: 700px;
        width: 100%;
		h3{
			position: relative;
			top:-15px;
			left:150px;
			width:100px;
			text-align: center;
			background-color: #fff;
			color: #666;

		}
		&>div{
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