<template>
  <div class="sg">
  	<header>
  		<span>&lt;</span>
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
		width: 500px;
		background-color: #eee;
	}
	header{
		width: 500px;
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
		width: 450px;
		height: 30px;
	}
	.sgArea{
		text-align: center;
	}
	.sgArea textarea{
		margin: auto;
		width: 450px;
		max-width: 450px;
		height: 100px;
		max-height: 100px;
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
		width: 450px;
		background-color: #000;
		color: #fff;
		padding: 10px;
	}
</style>