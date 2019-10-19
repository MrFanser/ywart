<template>
    <div class="index">
        <section>
            <router-view/>
        </section>

        <footer>
            <div class="box" @click="tagheader">
                <router-link to="/header">
                    <img :src="header" alt=""><br>
                    首页
                </router-link>
            </div>
            <div class="box" @click="tagkinds">
                <router-link to="/kinds">
                    <img :src="kinds" alt=""><br>
                    分类
                </router-link>
            </div>
            <div class="box" @click="tagarts">
                <router-link to="/arts">
                    <img :src="arts" alt=""><br>
                    艺术家 
                </router-link>
            </div>
            <div class="box" @click="tagcar">
                <router-link to="/car">
                    <img :src="car" alt=""><br>
                    购物车
                </router-link>
            </div>
            <div class="box" @click="tagsing">
                <router-link to="/index/singin">
                    <img :src="sing" alt=""><br>
                    我   
                </router-link>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
            header:'/static/image/index/public/indexs.png',
            kinds:'/static/image/index/public/fl.png',
            arts:'/static/image/index/public/ys.png',
            car:'/static/image/index/public/car.png',
            sing:'/static/image/index/public/me.png'
        }
    },
    methods:{
        tagheader(){
            this.header='/static/image/index/public/indexs.png';
            this.kinds='/static/image/index/public/fl.png';
            this.arts='/static/image/index/public/ys.png';
            this.car='/static/image/index/public/car.png';
            this.sing='/static/image/index/public/me.png'
        },
        tagkinds(){
            this.kinds='/static/image/index/public/fls.png';
            this.header='/static/image/index/public/index.png';
            this.arts='/static/image/index/public/ys.png';
            this.car='/static/image/index/public/car.png';
            this.sing='/static/image/index/public/me.png'
        },
        tagarts(){
            this.arts='/static/image/index/public/yss.png';
            this.header='/static/image/index/public/index.png';
            this.kinds='/static/image/index/public/fl.png';
            this.car='/static/image/index/public/car.png';
            this.sing='/static/image/index/public/me.png'         
        },
        tagcar(){
            this.car='/static/image/index/public/cars.png';
            this.header='/static/image/index/public/index.png';
            this.kinds='/static/image/index/public/fl.png';
            this.arts='/static/image/index/public/ys.png';
            this.sing='/static/image/index/public/me.png'
        },
        tagsing(){
            this.sing='/static/image/index/public/mes.png';
            this.header='/static/image/index/public/index.png';
            this.kinds='/static/image/index/public/fl.png';
            this.arts='/static/image/index/public/ys.png';
            this.car='/static/image/index/public/car.png';         
        }
    }
}
</script>

<style scoped lang="less">
*{
    margin: 0;
    padding:0;
}
.index{
    max-width: 700px;
    width: 100%;
    margin:auto;
}
footer{
    height: 50px;
    display: flex;
    position: fixed;
    bottom: 0;
    padding-top:10px;
    max-width: 700px;
    width: 100%;
    text-align: center;
    background-color: #fff;
    z-index: 1000;
}
.box{
    width: 20%;
    img{
        width: 20px;
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