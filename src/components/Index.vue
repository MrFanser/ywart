<template>
  <div class="index">
  	<header>
  		<router-link to="/">
	  		<el-row :gutter="0">
	  		    <el-col :span="4">
	  		        <img src="/static/image/index/public/headerKefuB.png" alt="">
	  		    </el-col>
	  		    <el-col :span="16">
	  		        <input type="search" placeholder="输入关键字搜索作品">
	  		    </el-col>
	  		    <el-col :span="4">
	  		        <img src="/static/image/index/public/znx.png" alt="">
	  		    </el-col>
	  		</el-row>
	  	</router-link>
		<el-row :gutter="0">
		    <el-col :span="6">
		    	<router-link to="/"></router-link>
		        <el-link href="" target="_blank">推荐</el-link>
		    </el-col>
		    <el-col :span="6">
		    	<el-link href="" target="_blank">入门收藏</el-link>
		    </el-col>
		    <el-col :span="6">
		    	<el-link href="" target="_blank">潜力收藏</el-link>
		    </el-col>
		    <el-col :span="6">
		    	<el-link href="" target="_blank">名作收藏</el-link>
		    </el-col>
		</el-row>
  	</header>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
header{
	background-color: black;
	opacity: .4;
}
input{
	width: 80%;
	height: 40px;
	margin:8px auto;
}
span{
	font-size: 20px;
	color:#fff;
	line-height: 50px;
}
span::actived{
	text-decoration: underline;
}
</style>