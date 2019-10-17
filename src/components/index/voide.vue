<template>
  	<div class="voide">
  		<header class="head">
  			<img src="/static/image/index/public/back.png" alt="" @click="backer">
  			<span>购买门票</span>
  		</header>	
  		<section>
  			<h3>展览通票</h3>
  			<div class="bgcimg">
  				<span><b>正价票</b></span><br>
  				<span><b>￥38</b></span><br>
  				<span>将于2019年10月18日停售</span>
  			</div>
  			<div class="paymethod">
	  			<h3>购买方式</h3>
	  			<img src="/static/image/index/public/svg_file.svg" alt=""><p>支付宝支付</p>	
  			</div>
  			<div></div>
  			<h3>购票说明</h3>
  			<ul>
  				<li>本票为AITE线上艺术博览会2019 通票</li>
  				<li>购买通票后，可于2019年10月31日前，不限次浏览线上艺博会所有作品。</li>
  				<li>购买通票后，将与当前登录账号关联绑定。</li>
  			</ul>
  			<h3>常见问题</h3>
  			<div v-for="i in quest" class="questions">
  				<span>{{i.question}}</span><br>
  				<span>{{i.answer}}</span><br><br>
  			</div>
  		</section>
  		<div class="foot">
  			<p>总价：<span>￥38</span></p>
  			<div class="mai">立即购买</div>
  		</div>
  	</div>
</template>

<script>
export default {
  	data(){
  		return{
  			quest:[
	  			{
	  				question:'Q: 如何使用展览通票？',
	  				answer:'A: 购买成功后，自动与当前登录账号关联绑定。在线上艺术博览会期间，使用该账号登录，可浏览全部作品。'
	  			},
	  			{
	  				question:'Q: 更换账号后需要重新购票吗？',
	  				answer:'A: 账号作为线上艺术博览会看展资格，如您登录了其他账号，需购票看展，建议您登录已购展览通票的账号。'
	  			},
	  			{
	  				question:'Q: 购买展览通票后是立即生效吗？',
	  				answer:'A: 是的。'
	  			},
	  			{
	  				question:'Q: 展览通票有效期是多久？',
	  				answer:'A: 成功购买之日起至2019年10月31日。'
	  			},
	  			{
	  				question:'Q: 购票失败怎么办？',
	  				answer:'A: 如您无法成功支付或购票失败，以及其他问题，请您致电400-605-7033，或添加艺术顾问微信：yiwangkeji001'
	  			}
  			]
  		}
  	},
  	methods:{
  		backer(){
  			history.back()
  		}
  	}
}
</script>

<style scroped lang="less">
.voide{
	max-width: 700px;
	width: 100%;
	.head{
		height: 50px;
		img{
			height: 30px;
			margin: 10px 0;
		}
		span{
			width: 50%;
			display: block;
			font-weight: bold;
			font-size: 25px;
			position: relative;
			top: -45px;
			left: 40px;
		}
	}
	section{
		// margin:50px auto 0 10px;
		.paymethod{
			margin-top:30px;
			h3{
				margin:30px 0;
			}
			p{
				margin-top:15px;
			}
		}
		.bgcimg{
			width: 200px;
			height: 120px;
			background-image: url(/static/image/index/public/hm.png) ;
			background-size: contain;
			background-repeat: no-repeat;
			position: relative;
			text-align: center;
			span{
				position: relative;
			}
			span:first-child{
				top:20px;
				font-size: 20px;
			}
			span:nth-child(3){
				top:20px;
				font-size: 20px;
			}
			span:nth-child(5){
				top:35px;
			}
		}
		p{
			position: relative;
			bottom:45px;
			left:50px;
			width: 100px;
		}
		ul{
			margin-left: -10px;
			list-style-type: decimal;
			position: relative;
			li{
				position: relative;
			}
		}
		.questions{
			width:90%;
		}
	}
	.foot{
		background-color: #fff;
		display: flex;
		max-width: 700px;
		width: 100%;
		height: 50px;
		border-top:1px solid #cccccc;
		z-index:10;
		position: relative;
		p{
			width:60%;
			text-align: right;
			margin-right:30px;
			span{
				color: red;
				font-weight: bold;
			}
		}
		.mai{
			width: 140px;
			height:50px;
			line-height: 50px;
			text-align: center;
			background-color: #fec400;
			font-weight: bold;
			position: relative;
			right: 0;
		}
	}	
}
</style>