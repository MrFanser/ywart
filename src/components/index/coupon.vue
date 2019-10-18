<template>
  <div class="coupon">
  	<header>
  		<span  @click="goback">&lt;</span>
  		<span>优惠券</span>
  		<span class="hid">&lt;</span>
  	</header>
  	<section>
  		<span class="couponTit">- 可使用的优惠券 -</span>
		<div class="couponBox" v-for="n in couponArr">
			<span class="couponMsg">
				<span class="money">&yen;{{n.Num}}</span>(98元代金券)
				<br>
				<span>使用条件：{{n.Msg}}</span>
			</span>
			<div class="useBtnBox"><span class="useBtn">立即使用</span></div>
		</div>
  	</section>
  </div>
</template>

<script>
export default {
  data(){
  	return{
  		couponArr:[
  			{
  				Num:98,
  				Msg:"满300元可用"
  			},
  			{
  				Num:120,
  				Msg:"无门槛"
  			},
  			{
  				Num:33,
  				Msg:"满199元可用"
  			}
  		]
  	}
  },
  methods:{
  	goback(){
  		history.back()
  	}
  },
}
</script>

<style scroped>
	*{
		margin: 0;
		padding: 0;
	}
	.hid{
		visibility: hidden;
	}
	header{
		max-width: 700px;
		width: 100%;
		display: flex;
	    justify-content: space-between;
	}
	section{
		margin-top:60px;
		max-width:700px;
		width: 100%;
		text-align: center;
	}
	.couponTit{
		max-width:700px;
		width: 100%;
		text-align: center;
	}
	.couponBox{
		margin: auto;
		max-width:700px;
		display: flex;
		justify-content: space-between;
		border-bottom: 3px dotted #ddd;
		margin: 0 10px;
		padding-left: 10px;
	}
	.money{
		color: red;
		font-size: 40px;
		font-weight: bolder;
	}
	.useBtnBox{
		position: relative;
	}
	.useBtn{
		color: red;
		border: 1px solid red;
		padding: 10px 6px;
		border-radius: 5px;
		position: absolute;
		top:35%;
		right: 10px;
		width: 70px;
	}
</style>