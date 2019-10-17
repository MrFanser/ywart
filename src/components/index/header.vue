<template>
    <div class="header">
        <header>
            <div v-bind:class="isShow?hidden:search" class="slide">
                <el-row :gutter="0">
                    <el-col :span="4">
                        <img class="hid" src="/static/image/index/public/headerKefu.png" alt="">
                    </el-col>
                    <el-col :span="16">
                        <input type="search" placeholder="输入关键字搜索作品">
                    </el-col>
                    <el-col :span="4">
                        <img class="hid" src="/static/image/index/public/znx.png" alt="">
                    </el-col>
                </el-row> 
            </div>
            <div v-bind:class="isShow?visi:collect" class="slide">
                <el-row :gutter="0">
                    <el-col :span="6">
                        <router-link to="/ind">推荐</router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/index/rudi">入门收藏</router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/index/latent">潜力收藏</router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/index/recoment">名作收藏</router-link>
                    </el-col>
                </el-row> 
            </div>
        </header>
      <router-view/>        
    </div>
</template>

<script>
export default {
    data(){
        return{
            scrol:false,
            visi:'visi',
            hidden:'hidden',
            search:'search',
            collect:'collect',
            isShow:"",
        }
    },
    methods:{
        handleScroll(){
            let scrollTop = window.pageYOffset;
            if(scrollTop>30){
                this.isShow=true;
            }else{
                this.isShow=false;
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll)
    }
}
</script>

<style scroped lang="less">
*{
    margin:0;
    padding: 0;
}
.slide{
    transition: all 1s;
    .hid{
        opacity: 0;
    }
}
header{
    position: fixed;
    max-width: 700px;
    width: 100%;
    top:0px;
    text-align: center;
    z-index: 10000;
    .search{
        opacity: 0.8;
        background-color: black;
        height: 50px;
    }
    .hidden{
        height: 0;
        overflow: hidden;
    }
    input{
        width: 100%;
        height: 40px;
        margin: 8px auto;
    }
    .visi{
        background-color: #fff;
        color: #333;
        padding:10px 0;
        height: 25px;
        a{
            // font-size: 12px;
            color:#333;
            text-decoration: none;
            font-size: 15px;
        }
        .router-link-active{
            border-bottom: 2px solid #333;
        }
    }
    .collect{
        position: relative;
        background-color:  black;
        opacity: 0.8;
        padding: 10px 0;
        height: 25px;
        .router-link-active{
            border-bottom: 2px solid #fff;
        }
        a{
            text-decoration: none;
            color:#fff;
        }
    }
}
.el-carousel__item img{
    width: 100%;
    height: 100%;
}
</style>