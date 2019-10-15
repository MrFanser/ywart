<template>
  <div class="MeWorld">
  	<header>
  		<span class="UserName"><img src="/static/image/index/latent/art/gui.jpg" alt=""> <b></b></span>
  		<span><router-link to="/index/setting"><img src="/static/image/me/1.png" alt=""></router-link></span>
  	</header>
  	<section class="VIPCard">
  		<div class="card cardbg">
  			<b>立即成为VIP</b>
  			<span>会员权益</span>
  		</div>
  		<div class="UnderCard">
  			<span>
  				<router-link to="">
	  				<img src="/static/image/me/order.png" alt="">
	  				<br>
	  				<span>订单</span>
  				</router-link>
  			</span>
  			<span>
  				<router-link to="">
	  				<img src="/static/image/me/history.png" alt="">
	  				<br>
	  				<span>历史浏览</span>	
  				</router-link>
  			</span>
  			<span>
  				<router-link to="">
	  				<img src="/static/image/me/message.png" alt="">
	  				<br>
	  				<span>消息</span>
	  			</router-link>
  			</span>
  			<span>
  				<router-link to="">
	  				<img src="/static/image/me/service.png" alt="">
	  				<br>
	  				<span>客服</span>
	  			</router-link>
  			</span>
  		</div>
  	</section>
  	<div class="other">
  		<div>
  			<router-link to="">
  				<span><img src="/static/image/me/mygoods.png" alt=""><br><span>我的艺术品</span></span>
  			</router-link>
  			<router-link to="">
  				<span><img src="/static/image/me/heart.png" alt=""><br><span>我喜欢的</span></span>
  			</router-link>
  			<router-link to="">
  				<span><img src="/static/image/me/voucher.png" alt=""><br><span>优惠券</span></span>
  			</router-link>
  			<router-link to="index/shop">
  				<span><img src="/static/image/me/mall.png" alt=""><br><span>积分商城</span></span>
  			</router-link>
  		</div>
  		<div>
  			<router-link to="/index/dress">
  				<span><img src="/static/image/me/addr.png" alt=""><br><span>收货地址</span></span>
  			</router-link>
  			<router-link to="/index/suggest">
  				<span><img src="/static/image/me/suggest.png" alt=""><br><span>意见反馈</span></span>
  			</router-link>
  			<router-link to="">
  				<span><img src="/static/image/me/about.png" alt=""><br><span>关于我们</span></span>
  			</router-link>
  			<router-link to="">
  				<span class="hid"><img src="/static/image/me/cars.png" alt=""><br><span></span></span>
  			</router-link>
  		</div>
  	</div>
  	<router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>
<style scroped lang="less">
	*{
		margin:0;
		padding:0;
	}
	.UserName img{
		vertical-align: middle;
	}
	.UserName b{
		vertical-align: middle;
		font-size: 30px;
	}
	header{
		display: flex;
		justify-content: space-between;
		margin:20px 0;
		img:first-child{
			width: 50px;
			margin:auto 30px;
		}
	}
	.VIPCard{
		width: 450px;
		margin:90px auto 40px auto;
		height: 270px;
		box-shadow: 0px 0px 10px 2px #999;
		border-radius: 5px;
		text-align: center;
		a{
			color:#333;
			text-decoration: none;
		}
	}
	.cardbg{
		background-image: url('/static/image/me/vipbg.png');
		background-size: contain;
		background-repeat: no-repeat;
		color:#d1a46a;
	}
	.card{
		display: flex;
		justify-content: space-between;
		height: 200px;
		line-height: 200px;
		padding: 0 10px;
	}
	.card b{
		font-weight: bolder;
		font-size: 30px;
	}
	.UnderCard{
		display: flex;
		justify-content: space-around;
		position: relative;
		bottom:20px;
	}
	.other{
		width: 500px;
		text-align: center;
		a{
			color:#333;
			text-decoration: none;
		}
	}
	.other div{
		height: 130px;
		display: flex;
		justify-content: space-around;
		align-content: space-around;
		flex-wrap: wrap;
		align-items: center;
		background-color: #eee;
	}
	.other div>span{
		width: 120px;
		background-color: #fff;
		height: 120px;
	}
	.other div>span img{
		margin:15px;
	}
	.hid{
		visibility: hidden;
	}
</style>