<template>
	<div class="public">
	  	<h1>热门作品</h1>
	  	<div class="flexpub">
	  		<div v-for="(pic,i) in picture" :key="i">
	  			<img :src="pic.url" alt="">
	  			<span><b>{{pic.b}}</b></span><br>
	  			<span>{{pic.ind}}</span><br>
	  			<span>{{pic.size}}</span>
	  		</div>
	  	</div>
	  	<div class="tit"><b>全部作品</b></div>
	  	<h1>热门艺术家</h1>
	  	<div class="flexpub">
	  		<div v-for="(s,d) in item" :key="d">
	  			<img :src="s.url" alt="">
	  			<span>{{s.name}}</span>
	  		</div>
	  	</div>
	  	<div class="tit"><b>全部作品</b></div>
	</div>
</template>

<script>
export default {
  	data(){
  		return{
		  	picture:[
			  	{
			  		url:'/static/image/index/latent/art/public/1.jpg',
			  		b:'陈尚昌',
			  		ind:'悠远的天空，2014',
			  		size:'布面油画，97.0x130.0cm'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/2.jpg',
			  		b:'凌贵元',
			  		ind:'樂千山15 ，2018',
			  		size:'纸本水墨，180.0x97.0cm'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/3.jpg',
			  		b:'Lau King',
					ind:'Colors & Lines - 4 ，2017',
			  		size:'哈內姆勒藝術微噴，30.0x40.0cm'
			  	},
				{
			  		url:'/static/image/index/latent/art/public/4.jpg',
			  		b:'申振夏',
			  		ind:'假装从你的世界经过，2019',
			  		size:'布面丙烯，60.0x80.0cm'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/5.jpg',
			  		b:'王袁丽',
			  		ind:'萤火5，2019',
			  		size:'纸本水墨，64.0x24.0cm'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/6.jpg',
			  		b:'万艺',
			  		ind:'雷诺阿的秋千，2015',
			  		size:'纸本水彩，51.5x51.5cm'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/7.jpg',
			  		b:'蔡江南',
			  		ind:'牧，2016',
			  		size:'玻璃钢烤漆，48.0x45.0x15.0cm'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/8.jpg',
			  		b:'李化帅',
			  		ind:'草廖地恋曲，2018',
			  		size:'数码版，38.0x56.0cm'
			  	},
		  	],
		  	item:[
			  	{
			  		url:'/static/image/index/latent/art/public/10.jpg',
			  		name:'陈志泽'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/11.jpg',
			  		name:'王袁丽'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/12.jpg',
			  		name:'张静雅'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/13.jpg',
			  		name:'柳立富'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/14.jpg',
			  		name:'袁嘉鹤'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/15.jpg',
			  		name:'马程友'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/16.jpg',
			  		name:'蔡承霖'
			  	},
			  	{
			  		url:'/static/image/index/latent/art/public/17.jpg',
			  		name:'侯泽苗'
			  	},
		  	]
		}
  	}
}
</script>

<style scroped lang="less">
.public{
	margin-top:100px;
	text-align: center;
	.flexpub{
		width: 500px;
		display: flex;
		justify-content: space-between;
		align-content: space-between;
		flex-wrap: wrap;
		div{
			width: 240px;
			text-align: right;
			margin: 20px 0;
			img{
				width: 100%;
				padding-bottom: 20px;
			}
		}
	}
	.tit{
		width:200px;
		height: 50px;
		line-height: 50px;
		font-size: 25px;
		background-color: #fec400;
		margin:50px auto;
	}	
}

</style>