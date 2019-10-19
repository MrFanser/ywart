<template>
  	<div class="collect">
  		<header>
  			<div @click="goback"><img src="/static/image/index/public/back.png" alt=""></div>
  			<p>艺网-艺术征集须知</p>
  		</header>
  		<section>
  			<h3>艺网作品征集</h3>
  			<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺网现面向艺术家征集可销售原创艺术作品，作品征集类型：油画、国画、版画、雕塑、水墨、水粉、摄影等作品类型。每位艺术家5-8件作品为宜。</span><br>
  			<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果您有意向与艺网进行合作，且作品符合要求，请将以下资料整理后，以压缩包的形式发送至艺网征集邮箱。</span>
  			<ul>
  				<li>作品图片（像素不低于4096 x 2160px ）</li>
  				<li>作品的信息（名称/尺寸/材质/创作时间/版数）</li>
  				<li>作品细节图（签名图，钤印图）</li>
  				<li>个人简历（教育经历/参展经历/获奖经历等信息）</li>
  				<li>个人照片（像素不低于800 x 800px ）</li>
  				<li>个人联系方式（电话/邮箱/微信号）</li>
  				<li>作品自述或评论文章</li>
  				<li>作品底价</li>
  			</ul>
  			<h3>特别说明</h3>
  			<p>请提供未涉及其他艺术机构（含电商）销售的艺术作品，作品一经采用</p>
  			<p>立即签订艺术作品合作协议，进行作品独家代理，代理期不低于十个月。</p>
  			<p>征集热线： 010-65532511 </p>
  			<p>征集邮箱：ywart@ywart.com</p>
  			<p>征集微信号：ywart-1</p>
  		</section>
  	</div>
</template>

<script>
export default {
	// data(){},
	methods:{
		goback(){
			history.back()
		}
	}
}
</script>

<style scoped lang="less">
	*{
		margin:0;
		padding:0;
	}
	.collect{
		max-width: 700px;
		width: 100%;
		margin:auto;
		line-height: 30px;
		header{
			text-align: center;
		}
		header div{
			position: absolute;
		}
		header p{
			line-height: 40px;
		}
		h3{
			margin:10% auto 5%;
			text-align: left;
		}
		ul{
			list-style-type: decimal;
			width: 90%;
			position: relative;
			left: 20px;
		}
		section{
			margin-bottom:150px;
		}
	}
</style>