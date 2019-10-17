<template>
	<div class="kindsBox">
	  	<header>
	  		<img class="headerKeFu" src="/static/image/index/public/index.png" alt="" @click="goback">
	  		<input type="text" placeholder="输入关键字搜索作品">
	  	</header>
	  	<div class="tagp">
		  	<p class="tag">
		  		<span>分类 | </span>
		  		<span>油画</span>
		  		<span>版画</span>
		  		<span>水墨</span>
		  		<span>水彩（粉）</span>
		  		<span>雕塑</span>
		  		<span>摄影</span>
		  		<span>书法</span>
		  		<span>红木</span>
		  		<span>其他</span>
		  	</p>
		  	<p class="tag">
		  		<span>题材 | </span>
		  		<span>风景</span>
		  		<span>人物</span>
		  		<span>静物</span>
		  		<span>动物</span>
		  		<span>花鸟</span>
		  		<span>山水</span>
		  		<span>其他</span>
		  	</p>
		  	<p class="tag">
		  		<span>价格区间 | </span>
		  		<span>&yen;2,000以下</span>
		  		<span>&yen;2,000-&yen;8,000</span>
		  		<span>&yen;8,000-&yen;15,000</span>
		  		<span>&yen;15,000-&yen;29,900</span>
		  		<span>&yen;30,000以上</span>
		  	</p>
			<p class="headTag" v-bind:class="canShow?fixedBox:floatBox">
		  		<span>综合排序</span>
		  		<span>最新上架</span>
		  		<span>热度排序</span>
		  		<span>价格排序</span>
		  		<span class="headTagOther">筛选<img src="/static/image/index/public/sxct.png" alt=""></span>
		  	</p>	
	  	</div>
	  	<div class="pb">
	  		<vue-waterfall-easy :imgsArr="imgsArr" @click="clickFn">
	  			<span>123</span>
	  		</vue-waterfall-easy>
	  	</div>
    </div>
</template>
 
<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
	data(){
		return{
			imgsArr: [],
			canShow:"",
			id:"001",
			fixedBox:"fixedBox",
			floatBox:"floatBox",
			recommendPro:
				{
					proName:"欢迎光临",
					author:"foust",
					price:233,
					size:"20cm*60cm"
				}
		}
	},
	methods:{
		handleScroll(){
			let canShow;
			let scrollTop = window.pageYOffset;
			
			if(scrollTop-122>0){
				this.canShow=true;
			}else{
				this.canShow=false;
			}
		},
		initImgsArr (n, m) {
		    var arr = []
		    for (var i = n; i < m; i++) {
		        arr.push({ src: `/static/image/index/latent/gkj/${i + 1}.jpg`,
		        link: '', 
		        info: '一些图片描述文字' })
		    }
		    return arr
		},
		clickFn(event,{index,value}){
			event.preventDefault()
			if(event.target.tagName.toLowerCase()=='img'){
				this.$router.push({
				  name:'Shopping',
				  params:{
				  	name:"Shopping",
				    dataObj:this.recommendPro
				  }
				})
			}
		},
		goback(){
			history.back()
		}
	},
	created () {
	    　　　　this.imgsArr = this.initImgsArr(0, 18)
	  　　},
	mounted(){
		window.addEventListener('scroll',this.handleScroll)
	},
	components: {
	  vueWaterfallEasy
	},
}
</script>
<style scroped>
	.kindsBox{
		max-width: 700px;
		width: 100%;
	}
	.pb{
		max-width: 700px;
		width: 100%;
		overflow:auto;
		margin-top: 50px;
		height: 1700px;
	}
	header{
		max-width: 700px;
		width: 100%;
		position: fixed;
		top: 0;
		background-color: #fff;
		z-index: 100;
	}
	.headerKeFu{
		vertical-align: middle;
		height: 30px;
		margin: 0 10px;
	}
	[placeholder="输入关键字搜索作品"]{
		width: 70%;
		vertical-align: middle;
		height: 25px;
		padding-left: 30px;
		border: none;
		background-color: #eee;
		background-image: url(../../static/image/index/public/ss.png);
		background-repeat: no-repeat;
		background-size: contain;
	}
	.kindsBox{
		max-width: 700px;
		width: 100%;
		text-align: left;
	}
	.tagp{
		max-width: 700px;
		width: 100%;
		position: relative;
		top: 40px;
	}
	.tag{
		margin: 10px;
	}
	.tag span{
		font-size: 12px;
	}
	.headTag span{
		padding: 5px 0;
	}
	.headTag{
		display: flex;
		justify-content: space-between;
		border-top: 1px solid #000;
		border-bottom: 1px solid #000;
		background-color: #fff;
		z-index: 10;
	}
	.fixedBox{
		position: fixed;
		top: 10px;
		max-width: 700px;
		width: 100%;
	}
	.headTagOther{
		border-left: 1px solid #000;
	}
	.headTagOther img{
		height: 15px;
	}
</style>
