<template>
  <div class="MeWorld">
  	<header>
  		<span class="UserName"><img src="/static/image/index/latent/art/gui.jpg" alt=""></span>
  		<span><router-link to="/index/setting"><img class="rig" src="/static/image/me/1.png" alt=""></router-link></span>
  	</header>
  	<section class="VIPCard">
  		<div class="card cardbg">
  			<b>立即成为VIP</b>
  			<span>会员权益</span>
  		</div>
  		<div class="UnderCard">
  			<span>
  				<router-link to="/car">
	  				<img src="/static/image/me/order.png" alt="">
	  				<br>
	  				<span>订单</span>
  				</router-link>
  			</span>
  			<span>
  				<router-link to="/index/BrowsingHistory">
	  				<img src="/static/image/me/history.png" alt="">
	  				<br>
	  				<span>历史浏览</span>	
  				</router-link>
  			</span>
  			<span>
  				<router-link to="/index/SystemMsg">
	  				<img src="/static/image/me/message.png" alt="">
	  				<br>
	  				<span>消息</span>
	  			</router-link>
  			</span>
  			<span @click="openService">
  				<router-link to="">
	  				<img src="/static/image/me/service.png" alt="">
	  				<br>
	  				<span >客服</span>
	  			</router-link>
  			</span>
  		</div>
  	</section>
  	<div class="other">
  		<div>
  			<router-link to="/index/MyArt">
  				<span><img src="/static/image/me/mygoods.png" alt=""><br><span>我的艺术品</span></span>
  			</router-link>
  			<router-link to="">
  				<span><img src="/static/image/me/heart.png" alt=""><br><span>我喜欢的</span></span>
  			</router-link>
  			<router-link to="/index/coupon">
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
  			<router-link to="/index/about">
  				<span><img src="/static/image/me/about.png" alt=""><br><span>关于我们</span></span>
  			</router-link>
  			<router-link to="">
  				<span class="hid"><img src="/static/image/me/cars.png" alt=""><br><span>一行文字</span></span>
  			</router-link>
  		</div>
  	</div>
  	<router-view/>
  	<div class="service" :class="CanShow?classShow:classHid">
  		<div class="serviceTit">
  			<span class="IntimateLittleHousekeeper">艺网贴心小管家</span>
  			<span @click="closer">关闭</span>
  		</div>
  		<div>
  			<span class="hisMsg">加载更多历史消息</span>
  			<div>
  				<img src="../../static/image/me/photo.png" class="gugugu">
  				<span class="Reply">我是艺网贴心小管家，有什么可以帮您？
  					<ol>
  						<li>可以开发票吗</li>
  						<li>作品定价</li>
  						<li>发货时间问题？</li>
  						<li>物流时间问题？</li>
  					</ol>
  				</span>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
	data(){
  		return{
  			CanShow:false,
  			classShow:"show",
  			classHid:"hidden"
  		}
  	},
  	methods:{
  		openService(){
  			this.CanShow=true;
  		},
  		closer(){
  			this.CanShow=false;
  		}
  	}
}
</script>
<style scroped lang="less">
	*{
		margin:0;
		padding:0;
	}
	span{
		font-size:12px;
	}
	.UnderCard img{
		height: 35px;
	}
	.MeWorld{
		max-width: 700px;
		width: 100%;
	}
	.UserName img{
		border-radius:50%;
		vertical-align: middle;
	}
	header{
		max-width: 700px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		img{
			position: absolute;
			width: 30px;
		}
		.rig{
			right: 0;
		}
	}
	.VIPCard{
		max-width: 700px;
		width: 95%;
		margin:30px auto 40px auto;
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
		margin-top:50px;
		display: flex;
		justify-content: space-between;
		height: 120px;
		line-height: 120px;
		padding: 0 0px;
	}
	.card b{
		font-weight: bolder;
		font-size: 20px;
	}
	.UnderCard{
		max-width: 700px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		position: relative;
		bottom:5px;
	}
	.other{
		max-width: 700px;
		width: 100%;
		text-align: center;
		margin-bottom:50px;
		a{
			color:#333;
			text-decoration: none;
		}
	}
	.other div{
		height: 100px;
		display: flex;
		justify-content: space-around;
		align-content: space-around;
		flex-wrap: wrap;
		align-items: center;
	}
	.other div>span{
		width: 120px;
		background-color: #fff;
		height: 120px;
	}
	.other div>span img{
		margin:15px;
		
	}
	.other img{
		width: 30px;
		height: 30px;
	}
	.hid{
		visibility: hidden;
	}
	.service{
		max-width: 700px;
		margin:auto;
		width: 100%;
		height: 90vh;
		position: absolute;
		bottom: 0px;
		z-index: 1;
		background-color: #fff;
	}
	.serviceTit{
		display: flex;
		justify-content: space-between;
		padding: 13px;
		color: #fff;
		background-color: #3c948b;
	}
	.show{
		display: block;
	}
	.hidden{
		display: none;
	}
	.hisMsg{
		display: inline-block;
		width: 100%;
		text-align: center;
		color: #999;
	}
	.Reply{
		float: left;
		padding: 10px;
	}
	.question{
		float: right;
		background-color: #3c948b;
		color: #fff;
		padding: 10px;
	}
	ol,li{
		margin-left: 10px;
		color: #6088e6;

	}
	.gugugu{
		height: 40px;
		float: left;
		margin: 3px;
	}
</style>