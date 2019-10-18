<template>
	<div class="kindsBox">
	  	<header>
	  		<img class="headerKeFu" src="/static/image/index/public/index.png" alt="" @click="goback">
	  		<input type="text" placeholder="输入关键字搜索作品">
	  	</header>
	  	<div class="tagp">
		  	<p class="tag">
		  		<span>分类|</span>
		  		<span @click="FirstActived" :class="{'Actived':FirstIsActived}">油画</span>
		  		<span @click="secondActived" :class="{'Actived':secondIsActived}">版画</span>
		  		<span @click="thirdActived" :class="{'Actived':thirdIsActived}">水墨</span>
		  		<span @click="fourthActived" :class="{'Actived':fourthIsActived}">水彩（粉）</span>
		  		<span @click="fifthActived" :class="{'Actived':fifthIsActived}">雕塑</span>
		  		<span @click="sixthActived" :class="{'Actived':sixthIsActived}">摄影</span>
		  		<span @click="seventhActived" :class="{'Actived':seventhIsActived}">书法</span>
		  		<span @click="eighthActived" :class="{'Actived':eighthIsActived}">红木</span>
		  	</p>
		  	<p class="tag">
		  		<span>题材 | </span>
		  		<span @click="themeFirstActived" :class="{'Actived':themeFirstIsActived}">风景</span>
		  		<span @click="themesecondActived" :class="{'Actived':themesecondIsActived}">人物</span>
		  		<span @click="themethirdActived" :class="{'Actived':themethirdIsActived}">静物</span>
		  		<span @click="themefourthActived" :class="{'Actived':themefourthIsActived}">动物</span>
		  		<span @click="themefifthActived" :class="{'Actived':themefifthIsActived}">花鸟</span>
		  		<span @click="themesixthActived" :class="{'Actived':themesixthIsActived}">山水</span>
		  		<span @click="themeseventhActived" :class="{'Actived':themeseventhIsActived}">其他</span>
		  	</p>
		  	<p class="tag">
		  		<span>价格区间 | </span>
		  		<span @click="priceFirstActived" :class="{'Actived':priceFirstIsActived}">&yen;2,000以下</span>
		  		<span @click="pricesecondActived" :class="{'Actived':pricesecondIsActived}">&yen;2,000-&yen;8,000</span>
		  		<span @click="pricethirdActived" :class="{'Actived':pricethirdIsActived}">&yen;8,000以上</span>
		  	</p>
			<p class="headTag" v-bind:class="canShow?fixedBox:floatBox">
		  		<span>综合排序</span>
		  		<span>最新上架</span>
		  		<span>热度排序</span>
		  		<span>价格排序</span>
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
			FirstIsActived:false,
			secondIsActived:false,
			thirdIsActived:false,
			fourthIsActived:false,
			fifthIsActived:false,
			sixthIsActived:false,
			seventhIsActived:false,
			eighthIsActived:false,

			themeFirstIsActived:false,
			themesecondIsActived:false,
			themethirdIsActived:false,
			themefourthIsActived:false,
			themefifthIsActived:false,
			themesixthIsActived:false,
			themeseventhIsActived:false,
			themeeighthIsActived:false,

			priceFirstIsActived:false,
			pricesecondIsActived:false,
			pricethirdIsActived:false,
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
		FirstActived(){
			this.FirstIsActived=true;
			this.secondIsActived=false;
			this.thirdIsActived=false;
			this.fourthIsActived=false;
			this.fifthIsActived=false;
			this.sixthIsActived=false;
			this.seventhIsActived=false;
			this.eighthIsActived=false;
		},
		secondActived(){
			this.FirstIsActived=false;
			this.secondIsActived=true;
			this.thirdIsActived=false;
			this.fourthIsActived=false;
			this.fifthIsActived=false;
			this.sixthIsActived=false;
			this.seventhIsActived=false;
			this.eighthIsActived=false;
		},
		thirdActived(){
			this.FirstIsActived=false;
			this.secondIsActived=false;
			this.thirdIsActived=true;
			this.fourthIsActived=false;
			this.fifthIsActived=false;
			this.sixthIsActived=false;
			this.seventhIsActived=false;
			this.eighthIsActived=false
		},
		fourthActived(){
			this.FirstIsActived=false;
			this.secondIsActived=false;
			this.thirdIsActived=false;
			this.fourthIsActived=true;
			this.fifthIsActived=false;
			this.sixthIsActived=false;
			this.seventhIsActived=false;
			this.eighthIsActived=false
		},
		fifthActived(){
			this.FirstIsActived=false;
			this.secondIsActived=false;
			this.thirdIsActived=false;
			this.fourthIsActived=false;
			this.fifthIsActived=true;
			this.sixthIsActived=false;
			this.seventhIsActived=false;
			this.eighthIsActived=false
		},
		sixthActived(){
			this.FirstIsActived=false;
			this.secondIsActived=false;
			this.thirdIsActived=false;
			this.fourthIsActived=false;
			this.fifthIsActived=false;
			this.sixthIsActived=true;
			this.seventhIsActived=false;
			this.eighthIsActived=false
		},
		seventhActived(){
			this.FirstIsActived=false;
			this.secondIsActived=false;
			this.thirdIsActived=false;
			this.fourthIsActived=false;
			this.fifthIsActived=false;
			this.sixthIsActived=false;
			this.seventhIsActived=true;
			this.eighthIsActived=false
		},
		eighthActived(){
			this.FirstIsActived=false;
			this.secondIsActived=false;
			this.thirdIsActived=false;
			this.fourthIsActived=false;
			this.fifthIsActived=false;
			this.sixthIsActived=false;
			this.seventhIsActived=false;
			this.eighthIsActived=true
		},

		themeFirstActived(){
			this.themeFirstIsActived=true;
			this.themesecondIsActived=false;
			this.themethirdIsActived=false;
			this.themefourthIsActived=false;
			this.themefifthIsActived=false;
			this.themesixthIsActived=false;
			this.themeseventhIsActived=false;
		},
		themesecondActived(){
			this.themeFirstIsActived=false;
			this.themesecondIsActived=true;
			this.themethirdIsActived=false;
			this.themefourthIsActived=false;
			this.themefifthIsActived=false;
			this.themesixthIsActived=false;
			this.themeseventhIsActived=false;
		},
		themethirdActived(){
			this.themeFirstIsActived=false;
			this.themesecondIsActived=false;
			this.themethirdIsActived=true;
			this.themefourthIsActived=false;
			this.themefifthIsActived=false;
			this.themesixthIsActived=false;
			this.themeseventhIsActived=false;
		},
		themefourthActived(){
			this.themeFirstIsActived=false;
			this.themesecondIsActived=false;
			this.themethirdIsActived=false;
			this.themefourthIsActived=true;
			this.themefifthIsActived=false;
			this.themesixthIsActived=false;
			this.themeseventhIsActived=false;
		},
		themefifthActived(){
			this.themeFirstIsActived=false;
			this.themesecondIsActived=false;
			this.themethirdIsActived=false;
			this.themefourthIsActived=false;
			this.themefifthIsActived=true;
			this.themesixthIsActived=false;
			this.themeseventhIsActived=false;
		},
		themesixthActived(){
			this.themeFirstIsActived=false;
			this.themesecondIsActived=false;
			this.themethirdIsActived=false;
			this.themefourthIsActived=false;
			this.themefifthIsActived=false;
			this.themesixthIsActived=true;
			this.themeseventhIsActived=false;
		},
		themeseventhActived(){
			this.themeFirstIsActived=false;
			this.themesecondIsActived=false;
			this.themethirdIsActived=false;
			this.themefourthIsActived=false;
			this.themefifthIsActived=false;
			this.themesixthIsActived=false;
			this.themeseventhIsActived=true;
		},
		themeeighthActived(){
			this.themeFirstIsActived=false;
			this.themesecondIsActived=false;
			this.themethirdIsActived=false;
			this.themefourthIsActived=false;
			this.themefifthIsActived=false;
			this.themesixthIsActived=false;
			this.themeseventhIsActived=false;
		},
		priceFirstActived(){
			this.priceFirstIsActived=true;
			this.pricesecondIsActived=false;
			this.pricethirdIsActived=false;
		},
		pricesecondActived(){
			this.priceFirstIsActived=false;
			this.pricesecondIsActived=true;
			this.pricethirdIsActived=false;
		},
		pricethirdActived(){
			this.priceFirstIsActived=false;
			this.pricesecondIsActived=false;
			this.pricethirdIsActived=true;
		},
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
	created(){
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
	*{
		margin:0;
		padding: 0;
	}
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
	.tag span:not(:first-child){
		font-size: 12px;
		padding: 2px;
	}
	.headTag span{
		padding: 5px 0;
	}
	.headTag{
		display: flex;
		justify-content: space-around;
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
	.Actived{
		background-color: #000;
		color: #fff;
	}
</style>
