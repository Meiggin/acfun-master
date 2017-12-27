<template>
	<div class="result" v-if='getSearchDataOfGetters.length'>
		<template v-for='data in getSearchDataOfGetters'>
			<div class="waimian">

				<!-- 下面执行跳转链接 -->
				<router-link tag='div' class="limian" :to="{name:'donghua',query: {ac:data.contentId}}">
					<div class="limianLeft" :style="{background:`url(${data.cover}) no-repeat center`,backgroundSize:'100% 100%'}"></div>
					<div class='limianRight'>
						<div class="rightTop">{{data.title}}</div>
						<div class="rightBottom">
							<div class="rightBottomLeft">
								<span>up主：</span><span>{{data.user.username}}</span>
							</div>
							<div class="rightBottomRight">
								<span>播放数量：</span><span>{{data.views}}</span>
							</div>
						</div>
					</div>
				</router-link>
		
		
		</div>
		</template>
	</div>
</template>
<script>
import store from '@/store/store'
import { mapGetters } from 'vuex'
	export default {
		store,
		data(){
			return {
				msg:'我是搜索结果'
			}
		},
		mounted(){
			console.log('搜索结果被创建出来了。')
		},
		computed:{
			...mapGetters([
			    'getSearchDataOfGetters',
			  ])
		}
	}
</script>
<style lang='scss' scoped>
	.result{
		overflow: hidden;
		.waimian{
			width:auto;
			height:81px;
			padding:12px 8px 0 8px;
			overflow: hidden;
			.limian{
				width:auto;
				background: white;
				height:80px;
				border-bottom: 1px solid #ddd;
				padding:8px;
				display: flex;
				justify-content:flex-start;
				.limianLeft{
					width:113px;
					height:64px;
					// flex:0;


				}
				.limianRight{
					width:100px;
					height:64px;
					margin-left: 8px;
					margin-right: 8px;
					flex:1;
					.rightTop{
						height:48px;
						font:14px/24px '';
						overflow: hidden;
						color:#666;
					}
					.rightBottom{
						height:16px;
						font:12px/16px '';
						color:#999;
						overflow: hidden;
						.rightBottomLeft{
							float: left;
							width:50%;
							overflow: hidden;
							white-space: nowrap;
							text-overflow:ellipsis;
						}
						.rightBottomRight{
							float: right;
							width:50%;
							span{
								width:50%;
								text-align: center;
								overflow: hidden;
								white-space: nowrap;
								text-overflow:ellipsis;
							}
						}
					}

				}
			}
		}
	}
</style>