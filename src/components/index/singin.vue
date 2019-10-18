<template>
	<div class="singin">
	    <form action="">
			<el-tabs v-model="activeName" @tab-click="handleClick">
		    	<el-tab-pane label="账号登录" name="second">
	    			<div class="tel">
	    				<div>
	    					<input type="text" v-model="tel" @blur="matchtel" placeholder="请输入手机号">
	    				</div>
	    				<span>{{errortel}}</span>
	    			</div>
	    			<div class="pwd">
	    				<div>
	    					<input type="text" v-model="pwd" @blur="matchpwd" placeholder="请输入密码">
	    				</div>
	    				<span>{{errorpwd}}</span>
	    			</div>
		    	</el-tab-pane>
	    		<el-tab-pane label="手机号登录" name="first">
	    			<div class="sixtel">
	    				<div>
	    					+86<input type="text" v-model="teler" @blur="matchteler" placeholder="请输入手机号">
	    				</div>
	    				<span>{{errorteler}}</span>
	    			</div>
	    			<div class="passpwd">
	    				<div>
	    					<input type="text" 
	    							placeholder="请输入验证码" 
	    							v-model="sending" 
	    							@blur="matchcode"> 
	    					| 
	    					<input type="button" value="发送验证码">
	    				</div>
	    				<span>{{codetit}}</span>
	    			</div>
	    		</el-tab-pane>
	  		</el-tabs>
	  		<input type="button" value="登录" @click="sign">
	  		<div class="fanhui" @click="goback"><img src="/static/image/index/public/back.png" alt=""></div>
	    </form>
	</div>
</template>
<script>
  	export default {
    	data() {
      		return {
        		activeName: 'second',
        		errortel:'',
        		errorteler:'',
        		tel:'',
        		teler:'',
        		errorpwd:'',
        		pwd:'',
        		codetit:'',
        		sending:''
      		}
    	},
    	methods: {
    		goback(){
    			history.back()
    		},
      		handleClick(tab, event) {
        		console.log(tab, event);
      		},
      		matchtel(){
      			let reg = /^1[3-9]\d{9}$/;
	      		if(reg.test(this.tel)){
	      			this.errortel=''
	      		}else{
	      			this.errortel="请输入正确手机号码"
	      		}
      		},
      		matchpwd(){
      			if(this.pwd.length<4){
	      			this.errorpwd="密码错误"
	      		}else{
	      			this.errorpwd=""
	      		}
      		},
      		sign(){
      			if((/^1[3-9]\d{9}$/.test(this.tel) && this.pwd.length>=4) || (/^1[3-9]\d{9}$/.test(this.teler) && this.sending.length==4)){
      				localStorage.setItem("isSing","ture");
      				open('/index/gallery','_self')
      			}
      		},
      		matchteler(){
      			let reg = /^1[3-9]\d{9}$/;
	      		if(reg.test(this.teler)){
	      			this.errorteler=''
	      		}else{
	      			this.errorteler="请输入正确手机号码"
	      		}
      		},
      		matchcode(){
      			if(!this.sending.length==4){
      				this.codetit="验证码错误"
      			}
      		}
    	},
    	mounted:function(){
    		let tempSing = localStorage.getItem("isSing");
    		if(tempSing === "ture"){
    			open('/index/gallery#/me','_self')
    		}
    	}
  	};
</script>

<style scroped lang="less">
input{
	outline:none;
	border:none;
}
.singin{
	margin:auto;
	max-width: 700px;
	width: 100%;
}
.tel,.pwd{
	margin:30px 0;
	div{
		border-bottom:1px solid #333;
	}
	input{
		width: 90%;
		height: 30px;
	}
	span{
		color:red;
	}
}
form{
	position: relative;
	text-align: center;
	&>input{
		position: relative;
		top:50px;
		width: 90%;
		height: 35px;
		background-color: #000000;
		color:#fff;
	}
	&>input:last-child{
		position: relative;
		border-radius:50%;
		width: 30px;
		height: 30px;
	}
	.sixtel,.passpwd{
		text-align: left;
		margin:30px 0;
		div{
			border-bottom:1px solid #333;
		}
		span{
			color:red;
		}
		input{
			padding:0px 0 5px 10px;
			background-color: #fff;
		}
	}
	.sixtel div input{
		font-size: 12px;
	}
	.fanhui{
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border:3px solid #333;
		margin:auto;
		position: relative;
		top:80px;
		img{
			width: 20px;
			height: 20px;
			padding:5px;
		}
	}
}
</style>