<template>
  	<div class="letterA">
  		<div class="tit"><b>A</b></div>
  		<div class="A">
	  		<div v-for="(u,h) in item" :key="h">
	  			<img :src="u.url" alt=""><br>
	  			<span>{{u.name}}</span>
	  		</div>
	  		<div class="zhan" v-for="n in nbsp"></div>	
  		</div>
  	</div>
</template>

<script>
export default {
  	data(){
  		return{
  			item:[
  				{
  					url:'/static/image/art/english/1.jpg',
  					name:'龚冰清'
  				},
  				{
  					url:'/static/image/art/english/2.jpg',
  					name:'顾强'
  				},
  				{
  					url:'/static/image/art/english/3.jpg',
  					name:'郭岩'
  				},
  				{
  					url:'/static/image/art/english/4.jpg',
  					name:'郭彤彤'
  				},
  				{
  					url:'/static/image/art/english/5.jpg',
  					name:'顾玉林'
  				},
  				{
  					url:'/static/image/art/english/6.jpg',
  					name:'顾强'
  				},
  				{
  					url:'/static/image/art/english/7.jpg',
  					name:'股评'
  				},
  				{
  					url:'/static/image/art/english/8.jpg',
  					name:'古镇真'
  				},
  				{
  					url:'/static/image/art/english/9.jpg',
  					name:'官春蕾'
  				},
  				{
  					url:'/static/image/art/english/10.jpg',
  					name:'郭嘉'
  				},
  				{
  					url:'/static/image/art/english/11.jpg',
  					name:'顾伟玺'
  				},
  				{
  					url:'/static/image/art/english/12.jpg',
  					name:'葛晓红'
  				},
  				{
  					url:'/static/image/art/english/13.jpg',
  					name:'高满君'
  				},
  				{
  					url:'/static/image/art/english/14.jpg',
  					name:'管微微'
  				},
  				{
  					url:'/static/image/art/english/15.jpg',
  					name:'高心怡'
  				},
  				{
  					url:'/static/image/art/english/16.jpg',
  					name:'葛雅静'
  				},
  				{
  					url:'/static/image/art/english/17.jpg',
  					name:'郭家岭'
  				},
  				{
  					url:'/static/image/art/english/18.jpg',
  					name:'郭川'
  				},
  			]
  		}
  	},
  	computed:{
	  	nbsp(){
	  		return 4-this.item.length%4;
	  	}	
	}
}
</script>

<style scroped lang="less">
.letterA{
	.tit{
		margin:5px 15px;
	}
	.A{
		display: flex;
		justify-content: space-around;
		align-content: space-around;
		flex-wrap: wrap;
		text-align: left;
		text-align: center;
		div{
			width:22%;
			img{
				width: 100%;
			}
		}
	}	
}
</style>