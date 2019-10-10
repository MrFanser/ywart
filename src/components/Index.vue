<template>
  <div class="index">
  	<section>
  		<router-view/>
  	</section>

  	<footer>
  		<div class="box">
  			<router-link to="/header">
  				<img src="/static/image/index/public/index.png" alt=""><br>
  				首页
  			</router-link>
  		</div>
  		<div class="box">
  			<router-link to="/kinds">
  				<img src="/static/image/index/public/fl.png" alt=""><br>
	  			分类
  			</router-link>
  		</div>
  		<div class="box">
  			<router-link to="/arts">
	  			<img src="/static/image/index/public/ys.png" alt=""><br>
	  			艺术家	
  			</router-link>
  		</div>
  		<div class="box">
  			<router-link to="/car">
	  			<img src="/static/image/index/public/car.png" alt=""><br>
	  			购物车
  			</router-link>
  		</div>
  		<div class="box">
  			<router-link to="/me">
	  			<img src="/static/image/index/public/me.png" alt=""><br>
	  			我	
  			</router-link>
  		</div>
  	</footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="less">
.index{
	width: 500px;
	height: 100%;
	overflow:hidden;
}
footer{
	display: flex;
  position: fixed;
  bottom: 0;
  width: 500px;
  text-align: center;
  background-color: #fff;
  z-index: 1000000;
}
.box{
	width: 20%;
	img{
		width: 35px;
	}
	a{
		font-size: 12px;
		color:black;
		text-decoration: none;
	}
	a::actived{
		font-weight: bold;
	}
} 
</style>