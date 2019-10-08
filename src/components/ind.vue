<template>
  <div class="ind">
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
		        <el-link href="" target="_self">推荐</el-link>
		    </el-col>
		    <el-col :span="6">
		    	<el-link href="" target="_self">入门收藏</el-link>
		    </el-col>
		    <el-col :span="6">
		    	<el-link href="" target="_self">潜力收藏</el-link>
		    </el-col>
		    <el-col :span="6">
		    	<el-link href="" target="_self">名作收藏</el-link>
		    </el-col>
		</el-row>
  	</header>
  	<div class="block">
  		  <span class="demonstration"></span>
  		  <el-carousel height="150px">
  		    <el-carousel-item v-for="item in 5" :key="item">
  		      <h3 class="small">{{ item }}</h3>
  		    </el-carousel-item>
  		  </el-carousel>
  		</div>
  </div>
</template>

<script>
export default {
  data(){
  	return {
  		item:[
  			'/static/image/index/la'
  		]
  	}
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
</style>