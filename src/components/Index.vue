<template>
  <div class="index">
  	<header>
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
		<el-row :gutter="0">
		    <el-col :span="6">
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

  	<section>
  		
  	</section>

  	<footer>
  		<!-- <div class="box">
  			<router-link to="/ind">
  				<img src="/static/image/index/public/index.png" alt=""><br>
  				首页
  			</router-link>
  		</div>
  		<div class="box">
  			<router-link to="">
  				<img src="/static/image/index/public/fl.png" alt=""><br>
	  			分类
  			</router-link>
  		</div>
  		<div class="box">
  			<router-link to="">
	  			<img src="/static/image/index/public/ys.png" alt=""><br>
	  			艺术家	
  			</router-link>
  		</div>
  		<div class="box">
  			<router-link to="">
	  			<img src="/static/image/index/public/car.png" alt=""><br>
	  			购物车
  			</router-link>
  		</div>
  		<div class="box">
  			<router-link to="">
	  			<img src="/static/image/index/public/me.png" alt=""><br>
	  			我	
  			</router-link>
  		</div> -->
  	</footer>
  	<router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.index{
	width: 500px;
	height: 100%;
}
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
footer{
	display: flex;
}
.box{
	width: 20%;
}
.box img{
	width: 35px;
}
.box a{
	font-size: 12px;
	color:black;
	text-decoration: none;
}
.box a::actived{
	font-weight: bold;
}
</style>