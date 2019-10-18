<template>
  <div class="pointWorld">
  	<header>
  		<span><router-link to="/me">&lt;</router-link></span>
  		积分商城
  		<span class="hid">&lt;</span>
  	</header>
  	<div class="point">
  		<span>
  			<p>您应有拥有积分</p>
  			<p>{{point}}</p>
  		</span>
  		<span><span>签到</span></span>
  	</div>
  	<div class="histroy">
  		<span>积分记录</span>
  		<span></span>
  		<span>兑换记录</span>
  	</div>
  	<div class="AnyType">
  		<span @click="allBtnActived" v-bind:class="allisActived?classActived:classNoActived">全部</span>
  		<span @click="vipBtnActived" v-bind:class="vipisActived?classActived:classNoActived">会员资格</span>
  		<span @click="cardBtnActived" v-bind:class="cardisActived?classActived:classNoActived">代金券</span>
  		<span @click="imgBtnActived" v-bind:class="imgisActived?classActived:classNoActived">版画</span>
  	</div>
  </div>
</template>
<script>
export default {
  data(){
  	return{
  		allisActived:true,
  		vipisActived:false,
  		cardisActived:false,
  		imgisActived:false,
  		classActived:"Actived",
  		classNoActived:"",
  		point:"7"
  	}
  },
  methods:{
  	allBtnActived:function(){
  		this.allisActived=true;
  		this.vipisActived=false;
  		this.cardisActived=false;
  		this.imgisActived=false;
  	},
  	vipBtnActived:function(){
  		this.allisActived=false;
  		this.vipisActived=true;
  		this.cardisActived=false;
  		this.imgisActived=false;
  	},
  	cardBtnActived:function(){
  		this.allisActived=false;
  		this.vipisActived=false;
  		this.cardisActived=true;
  		this.imgisActived=false;  	
  	},
  	imgBtnActived:function(){
  		this.allisActived=false;
  		this.vipisActived=false;
  		this.cardisActived=false;
  		this.imgisActived=true;
  	}
  }
}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.hid{
		visibility: hidden;
	}
	.Actived{
		text-decoration: underline;
		font-weight: bold;
	}
	.pointWorld{
		max-width: 700px;
		width:100%;
		background-color: #bbb;
	}
	header{
		display: flex;
		justify-content: space-between;
		max-width: 700px;
		width:100%;
		height: 30px;
		line-height: 30px;
		background-color: #fff;
	}
	header a{
		text-decoration: none;
		color:#333;
	}
	.point{
		display: flex;
		justify-content: space-between;
		height: 50px;
		padding: 10px;
		background-color: #000;
	}
	.point span:first-child{
		height: 50px;
		line-height: 25px;
		color: #eeee77;
	}
	.point span:nth-child(2){
		line-height: 50px;
	}
	.point span:nth-child(2) span{
		line-height: 50px;
		background-color: #eeee77;
		 padding: 10px 15px;
		border-radius: 13px;
		color: #000;
	}
	.histroy{
		display: flex;
		background-color: #fff;
		justify-content: space-around;
	}
	.histroy span{
		padding: 10px;
	}
	.histroy span:nth-child(2){
		border: 1px solid #bbb;
		width: 0px;
		padding: 0;
	}
	.AnyType{
		display: flex;
		justify-content: space-around;
		margin: 3px 0z;
		background-color: #fff;
		height: 30px;
		line-height: 30px;
	}
</style>