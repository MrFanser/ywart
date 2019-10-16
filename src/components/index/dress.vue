<template>
  	<div class="local">
	  	<header>
	  		<span @click="goback">&lt;</span>
	  		<span>收货地址</span>
	  		<span class="hid">&gt;</span>
	  	</header>
	  	<div class="OwnMsg">
	  		<span>收件人</span><input type="text" placeholder="请输入姓名">
	  	</div>
	  	<div class="OwnMsg">
	  		<span>手机</span><input type="text" placeholder="请输入手机号码">
	  	</div>
	  	<div class="ChosseLocal">
	  		<span></span>
	  		<span></span>
	  		<span></span>
	  	</div>
	  	<textarea cols="30" rows="10" placeholder="填写收货地址"></textarea>
	  	<footer>
	  		<input type="button" value="保存">
	  	</footer>
  	</div>
</template>

<script>
export default {
  data(){
  	return{
  		city:["北京","济南","上海","南京","杭州"],
  		local:[],
  		area:[]
  	}
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
		margin: 0;
		padding: 0;
	}
	.hid{
		visibility: hidden;
	}
	textarea{
		resize:none;
	}
	.local{
		width: 500px;
		background: #eee;
	}
	header{
		display: flex;
		justify-content: space-between;
		padding: 10px;
		background-color: #fff;
	}
	.OwnMsg{
		width: 450px;
		margin: auto;
		background-color: #fff;
	}
	.OwnMsg span{
		display: inline-block;
		width: 50px;
	}
	.OwnMsg input{
		width: 390px;
		border: none;
	}
	textarea{
		margin-top: 30px;
		width: 500px;
		max-width: 500px;s
		max-height: 200px;
	}
	footer{
		background-attachment: fixed;
		bottom:0;
	}
</style>