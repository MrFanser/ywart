<template>
  <div class="MeWorld">
  	<header>
  		<span class="UserName"><img src="../../static/image/index/public/cars.png" alt=""> <b>123</b></span>
  		<span><router-link to="/index/setting"><img src="../../static/image/index/public/car.png" alt=""></router-link></span>
  	</header>
  	<section class="VIPCard">
  		<div class="card">
  			<b>立即成为VIP</b>
  			<span>会员权益<img src="" alt=""></span>
  		</div>
  		<div class="UnderCard">
  			<span>
  				<router-link to="">
	  				<img src="../../static/image/index/public/cars.png" alt="">
	  				<br>
	  				<span>订单</span>
  				</router-link>
  			</span>
  			<span>
  				<img src="../../static/image/index/public/cars.png" alt="">
  				<br>
  				<span>历史浏览</span>
  			</span>
  			<span>
  				<img src="../../static/image/index/public/cars.png" alt="">
  				<br>
  				<span>消息</span>
  			</span>
  			<span>
  				<img src="../../static/image/index/public/cars.png" alt="">
  				<br>
  				<span>客服</span>
  			</span>
  		</div>
  	</section>
  	<div class="other">
  		<div>
  			<span><img src="../../static/image/index/public/cars.png" alt=""><br><span>我的艺术品</span></span>
  			<span><img src="../../static/image/index/public/cars.png" alt=""><br><span>我喜欢的</span></span>
  			<span><img src="../../static/image/index/public/cars.png" alt=""><br><span>优惠券</span></span>
  			<span><img src="../../static/image/index/public/cars.png" alt=""><br><span>积分商城</span></span>
  		</div>
  		<div>
  			<span><img src="../../static/image/index/public/cars.png" alt=""><br><span>收货地址</span></span>
  			<span><img src="../../static/image/index/public/cars.png" alt=""><br><span>意见反馈</span></span>
  			<span><img src="../../static/image/index/public/cars.png" alt=""><br><span>关于我们</span></span>
  			<span class="hid"><img src="../../static/image/index/public/cars.png" alt=""><br><span></span></span>
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
	}
	.VIPCard{
		width: 450px;
		margin:40px auto;
		height: 270px;
		box-shadow: 0px 0px 10px 2px #999;
		border-radius: 5px;
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
	}
	.other{
		width: 500px;
	}
	.other div{
		height: 130px;
		display: flex;
		justify-content: space-around;
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