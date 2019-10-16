<template>
  	<div class="shoppingCar">
	  	<header>
	  		<span><img src="../../static/image/index/public/Headerkefu.png" alt=""></span>
	  		<span>购物车</span>
	  		<span class="hid">1</span>
	  	</header>
	  	<div class="sumNum">
	  		<p><span>购物车</span><span>{{shoppingList.length}}</span></p>
	  	</div>
	  	<div class="shoppingPro" v-for="n in shoppingList">
	  		<input type="checkbox" >
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
	  	</div>
	  	<div class="recommendPro">
	  		<div class="tit">你可能会喜欢</div>
	  		<div class="proBox" >
	  			<div class="proUnit"  v-for="n in recommendPro">
	  				<img src="../../static/image/index/literary/6.jpg" alt="">
	  				<br>
	  				<span>
	  					<span>{{n.proName}}.{{n.author}}</span>
	  					<br>
	  					<span>&yen;{{n.price}}</span>
	  				</span>
	  			</div>
	  		</div>
	  	</div>
	  	<footer>
	  		<span>
	  			<span><input type="checkbox">全选</span>
	  			<span>移除</span>
	  		</span>
	  		<span>
	  			<span>（不含运费）合计<span class="sumCost">&yen;{{sumCost}}</span></span>
	  			<span class="sumitBtn">结算{{shoppingList.length}}</span>
	  		</span>
	  	</footer>
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
					size:"20cm*60cm"
				},
				{
					proName:"艺术就是爆炸",
					author:"ash",
					price:333,
					size:"90cm*90cm"
				},
				{
					proName:"blyat",
					author:"fuze",
					price:555,
					size:"100cm*100cm"
				},
				{
					proName:"nocknock",
					author:"calllllll",
					price:5555,
					size:"100cm*100cm"
				}],
		}
	},
	methods:{
		
	},
	watch:{
		checkPro:function(newValue){
			this.checkPro=newValue;
			console.log(this.checkPro);
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
		display: flex;
		justify-content: space-between;
		height: 30px;
		align-items: center;
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
		height: 100px;
		width: 500px;
		border:1px solid green;
	}
	.shoppingPro input{
		vertical-align: middle;
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
		height: 100px;
		width: 100px;
	}
	.recommendPro{
		width: 500px;
	}
	.tit{
		width: 500px;
		text-align: center;
		padding: 20px;
		font-weight: bold;
	}
	.proBox{
		width: 500px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		/*border: 1px solid green;*/
	}
	.proUnit{
		width: 230px;
		text-align: right;
		margin-bottom: 10px;
	}
	.proUnit img{
		width: 230px;
		height: 230px;
	}
	footer{
		display: flex;
		justify-content: space-between;
		background-attachment: fixed;
		bottom:60px;
		height: 30px;
		background-color: #fff;
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