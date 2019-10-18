<template>
  <div class="MyArt">
  	<header>
  		<span  @click="goback">&lt;</span>
  		<span>我的艺术品</span>
  		<span class="hid">&lt;</span>
  	</header>
  	<section>
  		<div class="proTit">
	  		<span>藏品</span>
	  		<span>心愿单</span>
	  		<span>艺网之旅</span>
  		</div>
  		<div class="shoppingPro" v-for="(n,i) in shoppingList">
  			<img :src="n.url" alt="">
  			<p class="proMsg">
  				<span>{{n.proName}}</span>
  				<br>
  				<span>{{n.author}}</span>
  				<br>
  				<span class="proStyle">{{n.size}}</span>
  				<br>
  				<span class="proStyle">边框</span>
  				<br>
  				<span>&yen;{{n.price}}</span>
  			</p>
  			<span class="hid"><input type="button" value="移除"></span>
  		</div>
  	</section>
  </div>
</template>

<script>
export default {
	data(){
		return{
			shoppingList:[],
		}
	},
	methods:{
		goback(){
			history.back()
		}
	},
	mounted:function(){
		let asd=localStorage.getItem("crowned");
		console.log(asd);
		let tempmsg = JSON.parse(asd);
		console.log(tempmsg);
		this.shoppingList=tempmsg;
		console.log(this.shoppingList);
		let tempCost=0;
		for(var i in tempmsg){
			tempCost += Number(tempmsg[i].price)
		};
		this.sumCost=tempCost;
	}
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
		max-width: 700px;
		width: 100%;
	}
	.proTit{
		display:flex;
		justify-content: space-around; 
	}
	.shoppingPro{
		margin-top: 10px;
		padding: 10px 10px;
		height: 30%;
		max-width: 700px;
		width: 100%;
		position: relative;
	}
	.shoppingPro input{
		vertical-align: middle;
		width: 100px;
		height: 45px;
		position: relative;
		left: 20%;
		border:none;
		background-color: #ff4201;
		color: #fff;
		font-size: 20px;
		border-radius:5px;
	}
	.shoppingPro img{
		vertical-align: middle;
	}
	.proMsg{
		vertical-align: middle;
		display: inline-block;
	}
	.proStyle{
		color: #999;
	}
	.shoppingPro img{
		width: 25%;
	}
</style>