<template>
    <div class="art">
  	  	<header>
  	       	<div class="slide">
  	            <el-row :gutter="0">
  	              	<el-col :span="4">
  	              		<el-radio-group v-model="direction">
  		              		<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
  		              		    <img src="/static/image/index/latent/art/neum.png" alt="">
  		              		</el-button>
  		              	</el-radio-group>
  		              	<div>
  			              	<el-drawer
  			              		:visible.sync="drawer"
  			              		:direction="direction">
  			              		<div @click="drawer = false"><router-link to="/ind">首页</router-link></div>
  			              		<div class="jump">
  			              		  	<el-button type="text" @click="dialogVisible = true">全部作品</el-button>
  			              		  	<el-dialog
  			              		  	  title="购票即看艺博会全部作品"
  			              		  	  :visible.sync="dialogVisible"
  			              		  	  width="350px">
	  			              		  	<p>一次购票，不限次看展</p>
	  			              		  	<p>免费获赠30天艺网VIP会员</p>
	  			              		  	<span slot="footer" class="">
	  			              		  	    <el-button type="primary" @click="dialogVisible = false">立即购票</el-button>
	  			              		  	</span>
  			              		  	</el-dialog>
  			              		</div>
  			              		<div v-for="(m,n) in item" @click="pay(m.name)">
	  			              		<div @click="drawer = false">
	  			              		  	<router-link :to="m.path">{{m.name}}</router-link>
	  			              		</div>
	  			              	</div>
  			              	</el-drawer>	
  		              	</div>
  		            </el-col>
  		            <el-col :span="16">
  		                <span class="aite"><b>{{tit}}</b></span>
  		            </el-col>
  		            <el-col :span="4">
  		                <el-dropdown>
  		                  	<span class="el-dropdown-link"><img src="/static/image/index/latent/art/gui.jpg" alt="" class="two">
  		                  	</span>
  		                  	<el-dropdown-menu slot="dropdown" trigger="click">
  		                  	    <router-link to=""><el-dropdown-item>个人中心</el-dropdown-item></router-link>
  		                  	    <router-link to=""><el-dropdown-item>我的订单</el-dropdown-item></router-link>
  		                  	    <router-link to=""><el-dropdown-item>退出登录</el-dropdown-item></router-link>
  		                  	</el-dropdown-menu>
  		                </el-dropdown>
  		            </el-col>
  		        </el-row> 
  		    </div>
  	    </header>
  	    <router-view/>
  	    <div>
  	    	<div class="pay">购买展览通票</div>
  	    	<div class="footer">
  	    		<span><h3>联系我们</h3>CONTACT US</span>
  	    		<p>Tel : 400-605-7033</p>
  	    		<p>E-mail : ywart@ywart.com</p>
  	    		<hr color="#e4ab10">
  	    		<span>CopyRight © 艺网科技YWART.COM 2015 - 2019</span>
  	    	</div>
  	    </div>    
    </div>
</template>

<script>
export default {
    data(){
    	return{
    		drawer: false,
    		direction: 'ttb',
    		dialogVisible: false,
    		tit:"AITE ONLINE艺博会",
    		item:[
    			{
    				name:'参展机构',
    				path:'/index/gallery'
    			},
    			{
    				name:'策展单元',
    				path:'/index/cezhan'
    			},
    			{
    				name:'公共项目',
    				path:'/index/public'
    			},
    			{
    				name:'艺术舍得',
    				path:'/index/shede'
    			},
    			{
    				name:'关于AITE ONLINE艺博会',
    				path:'/index/about'
    			},
    			{
    				name:'购买展览通票',
    				path:'/index/voide'
    			},
    		]
    	}
    },
    methods:{
    	pay(n){
    		this.tit = n
    	}
    }
}
</script>

<style scroped lang='less'>
.el-drawer{
	background-color: transparent;
	box-shadow: none;
	margin-top: 50px;
	header{
		max-width: 700px;
		width: 100%;
		display: none;
		background-color: #fff;
	}
	section{
		text-align: center;
		background-color: #eee;
		max-width: 700px;
		width: 100%;
		position: relative;
		padding-bottom: 10px;
		span{
			color:#333;
		}
 		a{
			display: block;
			padding:0px 0;
			color:#333;
			text-decoration: none;
			z-index: 3000;
		}
		.router-link-active{
			color:#fecf31;
		}
	}
}
.v-modal{
	display: none;
}
.jump .el-dialog__footer{
	margin:auto;
	position: relative;
	button{
		background-color: #fec400;
		border:none;
	}
}
.art{
	max-width: 700px;
	width: 100%;
	header{
		max-width: 700px;
		width: 100%;
		height: 50px;
		z-index: 10;
		background-color: #fec400;
		position: fixed;
		top:0;
		text-align: center;
	}
	.slide{
		position: relative;
		text-align: center;
		img{
			height: 30px;
			margin-top: 10px;
		}
		.aite{
			display: block;
			padding-top: 15px;
		}
		.two{
			border-radius: 50%;
		}
		.el-button{
			background-color: transparent;
			width: 120px;
			height: 30px;
			padding:0;
			position: relative;
			left:-20px;
			border:none;
		}
	}
	.pay{
		width:100px;
		padding: 10px;
		border-radius: 5px;
		background-color: #fec400;
		position: relative;
		bottom:100px;
		left: 180px;
		display: none;
	}
	.footer{
		background-color: #fec400;
		padding:30px 0 0 30px ;
		h3{
			display: inline-block;
		}
		p{
			text-align: left;
		}
		hr{
			max-width: 700px;
			width: 100%;
			position: relative;
			left: -32px;
		}
		span{
			line-height: 50px;
			text-align: center;
		}
		span:first-child{
			font-size: 20px;
		}
	}		
}
</style>