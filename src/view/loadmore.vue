<template>
	<div class="loadmore">
		<div @click="$store.dispatch('getMore',$route.query.channel)">{{msg}}</div>
	

		 <!-- 
				最新发布
				http://api.aixifan.com/searches/channel?sort=1&pageNo=1&pageSize=20&parentChannelId=60


				最新回复
				http://api.aixifan.com/searches/channel?sort=5&pageNo=1&pageSize=20&parentChannelId=60


				评论最多
				http://api.aixifan.com/searches/channel?sort=2&pageNo=1&pageSize=20&parentChannelId=60

				根据sort的值来决定是哪个按钮。
		  -->
	</div>
</template>
<script>
import store from '@/store/store'
	export default {
		store,
		data(){
			return {
				msg:'加载更多...'
			}
		},
		mounted(){
			console.log(this.$route.query);
			console.log('已加载loadmore');
			//-------数据通过store的actions来执行操作。
		},

	}
</script>
<style lang='scss' scoped>
	.loadmore{
		width:100%;
		background: white;
		font:16px/40px '';
		color:#333;
		text-align: center;
		border-top:1px solid #666;
	}
</style>