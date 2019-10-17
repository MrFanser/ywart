<template>
    <div class="about">
    	<div class="block">
    	  	<el-carousel trigger="click" height="400px">
    	  	    <el-carousel-item v-for="(i,j) in itemer" :key="j">
    	  	    	<img :src="i" alt="">
    	  	    </el-carousel-item>
    	      </el-carousel>
   	  	</div>
   	  	<div class="center">
	   	  	<h1>线上艺术博览会，创新与变革</h1>
	   	  	<h2>大势所趋，新者新思</h2>
	   	  	<span>
	   	  		当代艺术需要一个高效、便捷、广阔的途径<br>
				进行快速裂变和方式革新<br>
				AITE线上艺术博览会<br>
				一触即发，快速覆盖市场大局<br>
				艺术与数据共舞，革新传统艺博会体系
			</span>
			<img src="/static/image/index/latent/art/about/5.png" alt="">
			<h2>指尖唤醒审美，自由游历艺境</h2>
			<span>
				打破时空限制，指尖轻启艺术<br>
				50+画廊、1000+艺术家，原作保真<br>
				涵盖油画、雕塑、版画、水墨等各种类型<br>
				广阔艺术之地，待你出发探索<br>
			</span>
			<img src="/static/image/index/latent/art/about/6.png" alt="">
			<h2>艺术科技结合，超越现实体验</h2>
			<span>
				超分辨率：作品高倍放大，依然纤毫毕现<br>
				模拟场景：作品置入场景，呈现直观效果<br>
				智慧搜索：标签联合搜索，精准触达最爱<br>
				专业咨询：感知作品内涵，体验深邃共鸣<br>
			</span>	
			<img src="/static/image/index/latent/art/about/7.png" alt="">
   	  	</div>
   	  	<div class="induce">
	   	  	<h1>团队介绍</h1>
			<img src="/static/image/index/latent/art/about/8.png" alt="">
			<h2>朱 彤</h2>
			<span>AITE Online艺博会创始人，艺网创始人、CEO。著名的当代艺术策展人。曾策划过包括《朦胧—第54届威尼斯艺术双年展》《美丽新世界—南京第二届国际美展》 《未来考古学—第二届中国艺术三年展》《书写—首届南京国际双年展》在内的多个国内外 重要的双年展、三年展。所策划的《无界—曼特尼亚美术馆中国当代艺术展》和《目光所 及—后金融危机时代的中国新绘画》国际巡回展，为中国的当代艺术注入了更多深刻的思考， 在国际上有着广泛的社会影响力。曾出版《演变》《超越的维度》《幻想》等多部学术专著。 为海内外多家上市公司和企业，建立艺术品收藏体系</span>
				<img src="/static/image/index/latent/art/about/9.png" alt="">
			<h2>宋旻珈</h2>
			<span>AITE Online艺博会创始人。知名艺术收藏与投资顾问，“颜文樑艺术奖”发起人。曾参与策划及执行的多项重要及大型的艺术当代艺术展览，她是首届“颜文樑艺术奖”的发起人，该奖项由“颜文樑艺术奖”与“颜文樑青年艺术奖”两项大奖组成，以颜文樑先生命名，是为了表彰和肯定对中国当代艺术有着突出贡献的艺术家。同时，为汤臣、半岛酒店等多个财团担任艺术品首席收藏顾问。</span>
				<img src="/static/image/index/latent/art/about/10.png" alt="">
			<h2>姬忠鹏</h2>
			<span>AITE Online艺博会创始人。毕业于四川美术学院美术学系艺术与文化管理专业。文化和旅游部海外中国文化中心、巴西库里提巴双年展中国馆、中国艺术产业博览会、中国文化艺术节等单元活动策展人。十余年艺术行业经验，国家艺术基金首批艺术项目“青年艺术+”策展人，曾策划和参与国内外重要艺术项目，拥有丰富的艺术家沟通及策划能力。作为青年策展人和青年艺术家的推动者，在中国当代领域正在做着自我的贡献。</span>	
   	  	</div>
    </div>
</template>

<script>
export default {
	data(){
		return{
			itemer:[
				'/static/image/index/latent/art/about/1.jpg',
				'/static/image/index/latent/art/about/2.jpg',
				'/static/image/index/latent/art/about/3.jpg',
				'/static/image/index/latent/art/about/4.jpg',
			]
		}
	}
}
</script>

<style scroped lang="less">
.about{
	max-width: 700px;
	width: 100%;
	margin:50px 0;
	img{
		max-width: 700px;
		width: 100%;
	}
	.center{
		text-align: center;
		img{
			margin: 20px auto 50px;
		}
	}
	h1,h2{
		text-align: center;
	}
	span{
		font-size: 1.1em;
		line-height: 30px;
	}
	.induce img{
		display: block;
		margin: 30px auto;
		width: 200px;
		border-radius: 50%;
	}
}
</style>