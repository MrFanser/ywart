<template>
    <div class="cezhan">
        <div v-for="(i,j) in sets" :key="j">
            <img :src="i.path" alt="">
            <h3>{{i.tit}}</h3>
            <p><b>{{i.author}}</b></p>
            <span>{{i.span}}</span>
            <div class="btn">
                <el-button type="text" @click="dialogVisible = true"><b>进入查看 〉</b></el-button>
                <el-dialog
                  title="购票即看艺博会全部作品"
                  :visible.sync="dialogVisible"
                  width="350px">
                  <p>一次购票，不限次看展</p>
                  <p>免费获赠30天艺网VIP会员</p>
                  <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false">立即购票</el-button>
                  </span>
                </el-dialog>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
  	return{
    	dialogVisible: false,
  		sets:[
  			{
  				path:'/static/image/index/latent/art/cezhan/1.jpg',
  				tit:'目光所及 - 中国新绘画',
  				author:'策展人：朱彤',
  				span:'这是一个多元发展是充满风险和不确定的时代，艺术从没像今天那样活跃充满机遇。这恰恰是在对于未知的忐忑和冒险中迎接一个新的伟大时代的到来。'
  			},
  			{
  				path:'/static/image/index/latent/art/cezhan/2.jpg',
  				tit:'自在语境 - 当代青年绘画邀请展',
  				author:'策展人：姬忠鹏',
  				span:'面对新媒体等观念艺术对绘画艺术的冲击，参展艺术家从不同维度出发，来表明自己的立场态度。'
  			},
  			{
  				path:'/static/image/index/latent/art/cezhan/3.jpg',
  				tit:'无形之态 - 当下的抽象与新表现艺术展',
  				author:'策展人：李裕君',
  				span:'展览对当下中国“抽象”与“新表现”的一次梳理，注重从创作面貌的意识层面的非物质、能量等形式存在概念的提炼，强调艺术家的心态和观念表达。'
  			},
  			{
  				path:'/static/image/index/latent/art/cezhan/4.jpg',
  				tit:'调和 - 学院青年水墨展',
  				author:'策展人：李超',
  				span:'展览邀请大部分具有博士学位的学院派艺术家，通过他们来观察当下学院对水墨艺术的表现形式、艺术个性，以及关于水墨的启发与思考。'
  			},
  			{
  				path:'/static/image/index/latent/art/cezhan/5.jpg',
  				tit:'似非而是 - 新雕塑邀请展',
  				author:'策展人：杨彪',
  				span:'展览以新具象、去中心、非物质、无边界、反美学、新场域等六个单元，探索雕塑作为当下一门独特开放式学科所呈现出的材料与形式的多样性。'
  			},
  			{
  				path:'/static/image/index/latent/art/cezhan/6.jpg',
  				tit:'棱镜 - 反看内部的切面',
  				author:'策展人：葛亚楠',
  				span:'以不同角度为切入的母题，透过棱镜般的多面视角穿越过去，思考当下与未来。'
  			},
  		]
  	}
  }
}
</script>

<style scroped lang="less">
.cezhan{
	margin-top: 50px;
	max-width: 700px;
    width: 100%;
	img{
		width: 100%;
	}
	.btn{
		width: 200px;
		border-radius:3px;
		text-align: center;
		margin:30px auto 40px auto;
		background-color: #fec400;
		padding:10px;
		b{
			color:#333;
			font-size: 20px;	
		}
	}
}
</style>