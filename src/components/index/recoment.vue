<template>
  	<div class="recoment">
	  	<div class="only">
	  		<img src="/static/image/index/literary/1.jpg" alt="">
	  		<div v-bind:class="posi?lt:btn">
	  			<a href="">浏览全部名作收藏作品</a>
	  			<img src="/static/image/index/public/indexjt.png" alt="">
	  		</div>
	  	</div>
	  	<div>
	  		<h3>专业推荐</h3>
	  		<div class="ind vipdetail" v-for="(i,j) in items" :key="j">
	  			<img :src="i.url" alt="">
	  			<p><b>{{i.author}}</b></p><br>
	  			<i>{{i.describe}}</i><br>
	  			<i>{{i.size}}</i>
	  			<div>
	  				{{i.vip}}
	  				<img src="/static/image/index/literary/lock.png" alt="">
	  			</div>
	  		</div>
	  	</div>
	  	<div class="more">
	  		<h2>还有更多...</h2>
	  		<h1>虚拟空间在线观展</h1>
	  		<img src="/static/image/index/literary/6.jpg" alt="">
	  		<div class="duce">
	  			<span>艺网数字美术馆 首展</span><br>
	  			<span>YWART VIRTUAL MUSEUM FIRST SHOW</span><br>

	  			<span>無間</span><br>
	  			<span>UNLIMITED</span><br>

	  			<span>参展艺术家</span><br>

	  			<span>艾妮莎 蔡磊 付豫 董鹤 牟昱桥  马文婷 马灵丽 李昌龙 李宝荀 罗荃木 张庸 普鹏 张洪立 张琳 钟飙 </span>
	  		</div>
	  		<div class="noted">
		  		<h1>知名画廊鼎力支持</h1>
		  		<img src="/static/image/index/literary/5.png" alt="">	
	  		</div>
	  	</div>
	</div>
</template>

<script>
export default {
  	data(){
  		return{
  			lt:'lt',
  			btn:'btn',
  			posi:"",
    		items:[
    			{
    				url:'/static/image/index/literary/2.jpg',
    				author:'吴冠中',
    				describe:'龟 , 1977',
    				size:'纸本设色 48.0x49.0cm',
    				vip:'VIP可见详情'
    			},
    			{
    				url:'/static/image/index/literary/3.jpg',
    				author:'赵无极',
    				describe:'构图 , 1957',
    				size:'纸本水彩 36.0x30.0cm',
    				vip:'VIP可见详情'
    			},
    			{
    				url:'/static/image/index/literary/4.jpg',
    				author:'李真',
    				describe:'烟花 , 2013',
    				size:'铜雕 49.0x148.0x50.0cm',
    				vip:'VIP可见详情'
    			}
    		]
  		}
  	},
  	methods:{
  		handleScroll(){
  			let scrollTop = window.pageYOffset;
  			if(scrollTop>350){
  				this.posi=true;
  			}else{
  				this.posi=false;
  			}
  		}
  	},
  	mounted(){
  		window.addEventListener('scroll',this.handleScroll)
  	}
}
</script>

<style scoped lang="less">
*{
	margin:0;
	padding: 0;
}
.recoment{
	max-width: 700px;
	width: 100%;
	h3{
		text-align: center;
	}
	.only{ 
		text-align: center;
		img:first-child{
			max-width: 700px;
			width: 100%;
			height: 50%;
		}
	}
	.btn{
		width:250px;
		height: 30px;
		line-height: 30px;
		background-color: #fff;
		border-radius: 15px;
		position: relative;
		top:-100px;
		margin: auto;
		opacity: 0.7;
		a{
			text-decoration: none;
			color: #333;
		}
	}
	.lt{
		transition: all 1s;
		width:250px;
		height: 30px;
		line-height: 30px;
		background-color: #fff;
		border-radius: 15px;
		position: fixed;
		top:100px;
		left: -20px;
		margin: auto;
		opacity: 0.7;
		a{
			text-decoration: none;
			color: #333;
		}
	}
	.ind{ 
		>img{
			margin: 30px 0;
			}
			div{
				margin-top: 15px;
				img{
				position: relative;
				top:5px;
			} 
		}
	}
	.more{
		margin-top: 30px;
		border-top: 1px solid #666;
		h2{
			margin: 30px 0;
			color: #3c948b;
		}
		h1{
			margin-bottom: 10px;
		}
		img{
			max-width: 700px;
			width: 100%;
		}
		.duce{
			max-width: 700px;
			width: 100%;
			text-align: center;
			font-weight: bold;
			position: relative;
			bottom:200px;
			color:#fff;
			span:nth-child(1){
				font-size: 20px;
			}
			span:nth-child(4){
				font-size: 20px;
			}
			span:nth-child(5){
				font-size: 20px;
			}
			span{
				display: inline-block;
				width: 70%;
				font-size: 13px;
			}
		}
		.noted{
			max-width: 700px;
			width: 100%;
			position: relative;
			bottom: 100px;
			img{

				max-width: 700px;
				width: 100%;
			}
		}
	}
	.vipdetail{
		max-width: 700px;
		width: 100%;
		&>img{
			width: 100%;
		}
	}
}
</style>