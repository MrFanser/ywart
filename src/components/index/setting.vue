<template>
  <div class="setting">
  	<header>
  		<span></span>
  		<span>账户设置</span>
  		<span class="hid"></span>
  	</header>
  	<section>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="头像" name="1">
          <div><span>昵称</span><span>{{nickname}}<span>&gt;</span></span></div>
          <div><input type="text"><input type="button" value="确认" v-on:click="makeSureAvatar"></div>
        </el-collapse-item>
        <!-- <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item> -->
      </el-collapse>
  		<ol>
  			<li>
  				<span>头像</span><span><img></span>
  			</li>
  			<li>
  				<input type="text"><input type="button" value="确认" v-on:click="makeSureAvatar">
  			</li>
  			<li>
  				<span>昵称</span><span>{{nickname}}<span>&gt;</span></span>
  			</li>
  			<li>
  				<input type="text" v-model="inputNickname"><input type="button" value="确认" v-on:click="makeSureNickname">
  			</li>
  			<li>
  				<span>真实姓名</span><span>{{yourName}}<span>&gt;</span></span>
  			</li>
  			<li>
  				<input type="text" v-model="inputYourName"><input type="button" value="确认" v-on:click="makeSureYourName">
  			</li>
  			<li>
  				<span>性别</span><span>{{sex}}<span>&gt;</span></span>
  			</li>
  			<li>
  				<input type="text" v-model="inputSex"><input type="button" value="确认" v-on:click="makeSureSex">
  			</li>
  			<li>
  				<span>出生日期</span><span>{{birthDate}}<span>&gt;</span></span>
  			</li>
  			<li>
  				<input type="text" v-model="inputBirthDate"><input type="button" value="确认" v-on:click="makeSureBirthDate">
  			</li>
  		</ol>
  		<ol>
  			<li>
  				<span>手机</span><span>{{phoneNum}}<span>&gt;</span></span>
  			</li>
  			<li>
  				<input type="text" v-model="inputPhoneNum"><input type="button" value="确认" v-on:click="makeSurePhoneNum">
  			</li>
  			<li>
  				<span>邮件</span><span>{{mail}}<span>&gt;</span></span>
  			</li>
  			<li>
  				<input type="text" v-model="inputMail"><input type="button" value="确认" v-on:click="makeSureMail">
  			</li>
  			<li>
  				<span>绑定微信</span><span>{{bindWeiXin}}<span>&gt;</span></span>
  			</li>
  			<li>
  				<input type="text" v-model="inputBindWeiXin"><input type="button" value="确认" v-on:click="makeSureBindWeiXin">
  			</li>
  			<li>
  				<span>绑定微博</span><span>{{bingWeiBo}}<span>&gt;</span></span>
  			</li>
  			<li>
  				<input type="text" v-model="inputBingWeiBo"><input type="button" value="确认" v-on:click="makeSureBingWeiBo">
  			</li>
  		</ol>
  	</section>
  	<p class="logOut"><span>退出登录</span></p>
  </div>



</template>

<script>
export default {
  data(){
  	return{
      activeNames: ['0'],
  		Avatar:"",
  		nickname:"未设置",
  		yourName:"未设置",
  		sex:"未设置",
  		birthDate:"未设置",
  		phoneNum:"未设置",
  		mail:"未设置",
  		bindWeiXin:"未设置",
  		bingWeiBo:"未设置",
  		inputNickname:"",
  		inputYourName:"",
  		inputSex:"",
  		inputBirthDate:"",
  		inputPhoneNum:"",
  		inputMail:"",
  		inputBindWeiXin:"",
  		inputBingWeiBo:"",
  	}
  },
  methods:{
  	makeSureAvatar:function(){
  		this.nickname=this.inputNickname
  	},
  	makeSureNickname:function(){
  		this.nickname=this.inputNickname
  	},
  	makeSureYourName:function(){
  		this.yourName=this.inputYourName
  	},
  	makeSureSex:function(){
  		this.sex=this.inputSex
  	},
  	makeSureBirthDate:function(){
  		this.birthDate=this.inputBirthDate
  	},
  	makeSurePhoneNum:function(){
  		this.phoneNum=this.inputPhoneNum
  	},
  	makeSureMail:function(){
  		this.mail=this.inputMail
  	},
  	makeSureBindWeiXin:function(){
  		this.bindWeiXin=this.inputBindWeiXin
  	},
  	makeSureBingWeiBo:function(){
  		this.bingWeiBo=this.inputBingWeiBo
  	},
    handleChange(val) {
      console.log(val);
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
	ol,li{
		list-style-type: none;
		background-color: #fff;
		padding: 5px; 
	}
	ol{
		margin-top: 10px;
	}
	.setting{
		background-color: #eee;
	}
	header{
		width: 500px;
		background-color: #fff;
	}
	header,li,.logOut{
		display: flex;
		justify-content: space-between;
	}
	.logOut{
		color: red;
		text-align: center;
		background-color: #fff;
	}
	.logOut span{
		margin: auto;
	}
</style>