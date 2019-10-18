<template>
  	<div class="shoppingCar">
	  	<header>
	  		<span @click="goback"><img src="/static/image/index/public/back.png" alt=""></span>
	  		<span>购物车</span>
	  		<span class="hid">1</span>
	  	</header>
	  	<div class="sumNum">
	  		<p><span>购物车</span><span>{{shoppingList.length}}</span></p>
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
	  		<span @click='afterRemoPro'><input type="button" value="移除" @click="shoppingList.splice(i,1);"></span>
	  	</div>
	  	<div class="recommendPro">
	  		<div class="tit">你可能会喜欢</div>
	  		<div class="proBox" >
	  			<div class="proUnit"  v-for="n in recommendPro">
	  				<img :src="n.url" alt="">
	  				<br>
	  				<span>
	  					<span>{{n.proName}}.{{n.author}}</span>
	  					<br>
	  					<span>&yen;{{n.price}}</span>
	  				</span>
	  			</div>
	  		</div>
	  	</div>
	  	<div class="footer">
	  		<span>
	  			<span><input type="checkbox">全选</span>
	  			<span>移除</span>
	  		</span>
	  		<span>
	  			<span>（不含运费）合计<span class="sumCost">&yen;{{sumCost}}</span></span>
	  			<span class="sumitBtn">结算{{shoppingList.length}}</span>
	  		</span>
	  	</div>
  	</div>
</template>

<script>
export default {
	data(){
		return{
			sumCost:0,
			checkPro:'',
			shoppingList:[],
			recommendPro:[
				{
					proName:"欢迎光临",
					author:"foust",
					price:233,
					size:"20cm*60cm",
					url:'/static/image/index/latent/16.jpg'
				},
				{
					proName:"艺术就是爆炸",
					author:"ash",
					price:333,
					size:"90cm*90cm",
					url:'/static/image/index/latent/17.jpg'
				},
				{
					proName:"blyat",
					author:"fuze",
					price:555,
					size:"100cm*100cm",
					url:'/static/image/index/latent/18.jpg'
				},
				{
					proName:"nocknock",
					author:"calllllll",
					price:5555,
					size:"100cm*100cm",
					url:'/static/image/index/latent/7.jpg'
				}],
		}
	},
	methods:{
		afterRemoPro:function(){
			let tempmsg = this.shoppingList;
			let tempCost = 0;
			for(var i in tempmsg){
				tempCost += Number(tempmsg[i].price)
			};
			this.sumCost=tempCost;
			var tempNewProList = JSON.stringify(this.shoppingList);
			localStorage.setItem("crowned",tempNewProList)
		},
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
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.shoppingCar{
		margin:50px 0;
	}
	.hid{
		visibility: hidden;
	}
	header{
		background-color: #fff;
		display: flex;
		height: 30px;
		font-size: 20px;
	}
	header img{
		height: 25px;
	}
	.sumNum{
		height: 30px;
		text-align: center;
		line-height: 30px;
		font-weight: bold;
	}
	.shoppingPro{
		margin-top: 10px;
		padding: 10px 0;
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
	.recommendPro{
		max-width: 700px;
		width: 100%;
	}
	.tit{
		max-width: 700px;
		width: 100%;
		text-align: center;
		padding: 20px 0;
		font-weight: bold;
	}
	.proBox{
		max-width: 700px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.proUnit{
		width: 45%;
		text-align: right;
		margin-bottom: 10px;
	}
	.proUnit img{
		width: 100%;
	}
	.footer{
		display: flex;
		justify-content: space-between;
		background-attachment: fixed;
		bottom:60px;
		height: 30px;
		background-color: #fff;
		margin:30px auto 100px;
	}
	.sumCost{
		color: red;
		font-weight: bold;
	}
	.sumitBtn{
		background-color: red;
		color: #fff;
		padding: 10px;
	}
</style>