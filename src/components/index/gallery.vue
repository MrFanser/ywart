<template>
	<div class="gallery">
	  	<div class="block">
	  	    <el-carousel trigger="click" height="400px">
		  	    <el-carousel-item v-for="(i,j) in item" :key="j">
		  	    	<img :src="i" alt="">
		  	    </el-carousel-item>
	  	    </el-carousel>
	  	</div>
	  	<nav>
	  		<h3>全部参展机构</h3>
	  		<div class="flex">
	  			<div v-for="(m,n) in good" :key="n">
	  				<img :src="m.url" alt="">
	  				<p>{{m.des}}</p>
	  			</div>
	  		</div>
	  	</nav>
	</div>
</template>

<script>
export default {
    data(){
    	return{
    		item:[
    			'/static/image/index/latent/7.jpg',
    			'/static/image/index/latent/8.jpg',
    			'/static/image/index/latent/9.jpg',
    			'/static/image/index/latent/10.jpg',
    			'/static/image/index/latent/11.jpg',
    			'/static/image/index/latent/12.jpg',
    			'/static/image/index/latent/13.jpg',
    			'/static/image/index/latent/14.jpg',
    			'/static/image/index/latent/15.jpg',
    			'/static/image/index/latent/16.jpg'
    		],
    		good:[
    			{
    				url:'/static/image/index/latent/art/gallery/1.jpg',
    				des:'3+3艺术空间'
    			},
    			{
    				url:'/static/image/index/latent/art/gallery/2.jpg',
    				des:'ArtDepot艺术仓库'
    			},
    			{
    				url:'/static/image/index/latent/art/gallery/3.jpg',
    				des:'CLC Gallery Venture'
    			},
    			{
    				url:'/static/image/index/latent/art/gallery/4.jpg',
    				des:'EGG画廊'
    			},
    			{
    				url:'/static/image/index/latent/art/gallery/5.jpg',
    				des:'K空间'
    			},
    			{
    				url:'/static/image/index/latent/art/gallery/6.jpg',
    				des:'L+ / LUCIE CHANG FINE ARTS'
    			},
    			{
    				url:'/static/image/index/latent/art/gallery/7.jpg',
    				des:'LINK'
    			},
    			{
    				url:'/static/image/index/latent/art/gallery/8.jpg',
    				des:'NUOART'
    			},
    			{
    				url:'/static/image/index/latent/art/gallery/9.jpg',
    				des:'TONG GALLERY+PROJECTS'
    			},
    			{
    				url:'/static/image/index/latent/art/gallery/10.jpg',
    				des:'本艺术空间'
    			},
    		]
    	}
    }
}
</script>

<style scroped lang="less">
.gallery{
	width:500px;
	nav{
		text-align: center;
		.flex{
			display: flex;
			justify-content: space-between;
			align-content: space-between;
			flex-wrap: wrap;
			div{
				text-align: left;
				width: 240px;
				img{
					width: 100%;
				}
			}
		}
	}
}
</style>