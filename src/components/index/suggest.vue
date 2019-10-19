<template>
  <div class="sg">
  	<header>
  		<span @click="goback">&lt;</span>
  		<span>意见反馈</span>
  		<span class="hid">&gt;</span>
  	</header>
  	<p class="phoneNumTit">电话/微信</p>
  	<div class="phoneNum">
  		<input type="text">
  	</div>
  	<p class="sgTit">您的意见</p>
  	<div class="sgArea">
  		<textarea cols="30" rows="10" placeholder="留下您的反=反馈意见，让我们做得更好"></textarea>
  	</div>
  	<p class="ps">留下您的宝贵意见，让我们做得更好...</p>
  	<div class="inputBox">
  		<input type="button" value="提交反馈">
  	</div>
  </div>
</template>

<script>
export default {
  	data(){
  		
  	},
  	methods:{
  		goback(){
  			history.back()
  		}
  	}
}
</script>
<style scoped>
	*{
		margin:0;
		padding: 0;
	}
	.hid{
		visibility: hidden;
	}
	.sg{
		max-width: 700px;
		width: 100%;
		margin:auto;
		/*background-color: #eee;*/
	}
	header{
		max-width: 700px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		padding: 5px;
	}
	.phoneNumTit,.sgTit{
		margin: 10px 25px;
	}
	.phoneNum{
		text-align: center;
	}
	.phoneNum input{
		width: 95%;
		height: 30px;
	}
	.sgArea{
		text-align: center;
	}
	.sgArea textarea{
		resize: none;
		margin: auto;
		width: 90%;
		/*height: 100px;*/
		/*max-height: 100px;*/
	}
	.ps{
		margin: 10px 25px;
		font-size: 12px;
		color: #333;
	}
	.inputBox{
		text-align: center;
	}
	[value="提交反馈"]{
		width: 90%;
		background-color: #000;
		color: #fff;
		padding: 10px;
	}
</style>