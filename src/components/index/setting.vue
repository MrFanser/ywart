<template>
  <div class="setting">
    <header>
      <span></span>
      <span>账户设置</span>
      <span class="hid"></span>
    </header>
    <section>
      <ol>
        <li v-on:click="AvatarIsActived">
          <span>头像</span><span><img></span>
        </li>
        <li v-bind:class="AvatarCanShow?classShow:classHid" class="ani">
          <input type="text"><input type="button" value="确认" v-on:click="makeSureAvatar">
        </li>
        <li v-on:click="nicknameIsActived">
          <span>昵称</span><span>{{nickname}}<span>&gt;</span></span>
        </li>
        <li v-bind:class="nicknameCanShow?classShow:classHid" class="ani">
          <input type="text" v-model="inputNickname"><input type="button" value="确认" v-on:click="makeSureNickname">
        </li>
        <li v-on:click="yourNameIsActived">
          <span>真实姓名</span><span>{{yourName}}<span>&gt;</span></span>
        </li>
        <li v-bind:class="yourNameCanShow?classShow:classHid" class="ani">
          <input type="text" v-model="inputYourName"><input type="button" value="确认" v-on:click="makeSureYourName">
        </li>
        <li v-on:click="sexIsActived">
          <span>性别</span><span>{{sex}}<span>&gt;</span></span>
        </li>
        <li v-bind:class="sexCanShow?classShow:classHid" class="ani">
          <input type="text" v-model="inputSex"><input type="button" value="确认" v-on:click="makeSureSex">
        </li>
        <li v-on:click="birthDateIsActived">
          <span>出生日期</span><span>{{birthDate}}<span>&gt;</span></span>
        </li>
        <li v-bind:class="birthDateCanShow?classShow:classHid" class="ani">
          <input type="text" v-model="inputBirthDate"><input type="button" value="确认" v-on:click="makeSureBirthDate">
        </li>
      </ol>
      <ol>
        <li v-on:click="phoneNumIsActived">
          <span>手机</span><span>{{phoneNum}}<span>&gt;</span></span>
        </li>
        <li v-bind:class="phoneNumCanShow?classShow:classHid" class="ani">
          <input type="text" v-model="inputPhoneNum"><input type="button" value="确认" v-on:click="makeSurePhoneNum">
        </li>
        <li v-on:click="mailIsActived">
          <span>邮件</span><span>{{mail}}<span>&gt;</span></span>
        </li>
        <li v-bind:class="mailCanShow?classShow:classHid" class="ani">
          <input type="text" v-model="inputMail"><input type="button" value="确认" v-on:click="makeSureMail">
        </li>
        <li v-on:click="bindWeiXinIsActived">
          <span>绑定微信</span><span>{{bindWeiXin}}<span>&gt;</span></span>
        </li>
        <li v-bind:class="bindWeiXinCanShow?classShow:classHid" class="ani">
          <input type="text" v-model="inputBindWeiXin"><input type="button" value="确认" v-on:click="makeSureBindWeiXin">
        </li>
        <li v-on:click="bingWeiBoIsActived">
          <span>绑定微博</span><span>{{bingWeiBo}}<span>&gt;</span></span>
        </li>
        <li v-bind:class="bingWeiBoCanShow?classShow:classHid" class="ani">
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
      AvatarCanShow:true,
      nicknameCanShow:true,
      yourNameCanShow:true,
      sexCanShow:true,
      birthDateCanShow:true,
      phoneNumCanShow:true,
      mailCanShow:true,
      bindWeiXinCanShow:true,
      bingWeiBoCanShow:true,
      classHid:"",
      classShow:"canshow"
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
    AvatarIsActived:function(){
      this.AvatarCanShow=!this.AvatarCanShow;
      this.nicknameCanShow=true;
      this.yourNameCanShow=true;
      this.sexCanShow=true;
      this.birthDateCanShow=true;
      this.phoneNumCanShow=true;
      this.mailCanShow=true;
      this.bindWeiXinCanShow=true;
      this.bingWeiBoCanShow=true
    },
    nicknameIsActived:function(){
      this.AvatarCanShow=true;
      this.nicknameCanShow=!this.nicknameCanShow;
      this.yourNameCanShow=true;
      this.sexCanShow=true;
      this.birthDateCanShow=true;
      this.phoneNumCanShow=true;
      this.mailCanShow=true;
      this.bindWeiXinCanShow=true;
      this.bingWeiBoCanShow=true
    },
    yourNameIsActived:function(){
      this.AvatarCanShow=true;
      this.nicknameCanShow=true;
      this.yourNameCanShow=!this.yourNameCanShow;
      this.sexCanShow=true;
      this.birthDateCanShow=true;
      this.phoneNumCanShow=true;
      this.mailCanShow=true;
      this.bindWeiXinCanShow=true;
      this.bingWeiBoCanShow=true
    },
    sexIsActived:function(){
      this.AvatarCanShow=true;
      this.nicknameCanShow=true;
      this.yourNameCanShow=true;
      this.sexCanShow=!this.sexCanShow;
      this.birthDateCanShow=true;
      this.phoneNumCanShow=true;
      this.mailCanShow=true;
      this.bindWeiXinCanShow=true;
      this.bingWeiBoCanShow=true
    },
    birthDateIsActived:function(){
      this.AvatarCanShow=true;
      this.nicknameCanShow=true;
      this.yourNameCanShow=true;
      this.sexCanShow=true;
      this.birthDateCanShow=!this.birthDateCanShow;
      this.phoneNumCanShow=true;
      this.mailCanShow=true;
      this.bindWeiXinCanShow=true;
      this.bingWeiBoCanShow=true
    },
    phoneNumIsActived:function(){
      this.AvatarCanShow=true;
      this.nicknameCanShow=true;
      this.yourNameCanShow=true;
      this.sexCanShow=true;
      this.birthDateCanShow=true;
      this.phoneNumCanShow=!this.phoneNumCanShow;
      this.mailCanShow=true;
      this.bindWeiXinCanShow=true;
      this.bingWeiBoCanShow=true
    },
    mailIsActived:function(){
      this.AvatarCanShow=true;
      this.nicknameCanShow=true;
      this.yourNameCanShow=true;
      this.sexCanShow=true;
      this.birthDateCanShow=true;
      this.phoneNumCanShow=true;
      this.mailCanShow=!this.mailCanShow;
      this.bindWeiXinCanShow=true;
      this.bingWeiBoCanShow=true
    },
    bindWeiXinIsActived:function(){
      this.AvatarCanShow=true;
      this.nicknameCanShow=true;
      this.yourNameCanShow=true;
      this.sexCanShow=true;
      this.birthDateCanShow=true;
      this.phoneNumCanShow=true;
      this.mailCanShow=true;
      this.bindWeiXinCanShow=!this.bindWeiXinCanShow;
      this.bingWeiBoCanShow=true
    },
    bingWeiBoIsActived:function(){
      this.AvatarCanShow=true;
      this.nicknameCanShow=true;
      this.yourNameCanShow=true;
      this.sexCanShow=true;
      this.birthDateCanShow=true;
      this.phoneNumCanShow=true;
      this.mailCanShow=true;
      this.bindWeiXinCanShow=true;
      this.bingWeiBoCanShow=!this.bingWeiBoCanShow
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
  .canshow{
    display: none;
  }
  ol,li{
    list-style-type: none;
    background-color: #fff;
    padding: 5px; 
  }
  ol{
    margin-top: 10px;
    transition: all 1s;
  }
  .setting{
    background-color: #eee;
  }
  header{
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