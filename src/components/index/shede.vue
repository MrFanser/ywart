<template>
    <div class="shede">
    	<img src="/static/image/index/latent/art/shede/1.jpg" alt="">
  		<div v-for="(pic,d) in good">
  			<h3>{{pic.tit}}</h3>
  			<span>{{pic.span}}</span>
  			<div class="fleximg">
  				<img :src="pic.img1" alt="">
  				<img :src="pic.img2" alt="">
  			</div>
  			<div class="more">查看更多</div>
  		</div>
  		<div class="she">
  			<h3>舍得艺术酒</h3>
  			<span>舍得酒业致力于“文化国酒”的打造，在艺术领域的探索将内化为恒久的价值追求。艺术舍得酒：酒中艺趣，舍得之中。</span>
  			<img src="/static/image/index/latent/art/shede/2.jpg" alt="">
  			<img src="/static/image/index/latent/art/shede/3.jpg" alt="">
  		</div>
    </div>
</template>

<script>
export default {
  	data(){
  		return{
  			good:[
	  			{
	  				tit:'舍得酒业股份有限公司',
	  				span:'中国文化的传播者、生态酿酒的缔造者。四川沱牌舍得酒业股份有限公司位于素有“观音故里，诗酒之乡”美称的四川省遂宁市射洪县沱牌镇，地处北纬30.9°——世界佳酿酒集中地带，是“中国名酒”企业和川酒“六朵金花”之一。1996年，公司成为白酒行业第三家上市公司；2009年，成为第三家荣获“全国质量奖”的白酒企业。',
	  				img1:'/static/image/index/latent/art/shede/1.png',
	  				img2:'/static/image/index/latent/art/shede/2.png'
	  			},
	  			{
	  				tit:'舍得艺术中心',
	  				span:'舍得酒业倾力打造，力求将中国酒文化、中国白酒匠心工艺，通过艺术表现形式的再创作，于大众传播中获得更多生命力。舍得艺术中心由当代艺术知名策展人朱彤携手多位国内国际知名艺术家联袂设计，形成当地酒文化地标性符号的同时，更将大众、白酒与艺术结合，舍得飘香，无酒自醉。',
	  				img1:'/static/image/index/latent/art/shede/3.png',
	  				img2:'/static/image/index/latent/art/shede/4.png'
	  			}
  			]
  		}
  	}
}
</script>

<style scroped lang="less">
.shede{
	max-width: 700px;
	width: 100%;
	h3{
		margin:10px 0;
	}
	>img{
		max-width: 700px;
		width: 100%;
	}
	.fleximg{
		display: flex;
		justify-content: space-around;
		img{
			width: 45%;
			margin: 20px 0;

		}
	}
	.more{
		width: 150px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 25px;
		background-color: #fec400;
		margin: 20px auto 50px;
	}
	.she{
		img{
			max-width: 700px;
			width: 100%;
		}
		span{
			display: block;
			margin: 30px 0;
		}
	}
}
</style>