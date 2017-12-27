<template>
	<div class="selecte" v-if='$store.state.selectShow'>
		<ul>
			<li @click="$store.commit('changeSelect',1);$store.dispatch('wocaonima',$route.query.channel)">最新发布</li>
			<li @click="$store.commit('changeSelect',5);$store.dispatch('wocaonima',$route.query.channel)">最新回复</li>
			<li @click="$store.commit('changeSelect',2);$store.dispatch('wocaonima',$route.query.channel)">评论最多</li>
		</ul>
	</div>
</template>
<script>
import store from '@/store/store'

	export default{
		store,
		data(){
			return {

			}
		},
	}
</script>
<style lang='scss' scoped>
	.selecte{
		height:100%;
		width: 100%;
		background: rgba(0,0,0,.5);
		position: absolute;
		top:0;
		left:0;
		ul{
			position: absolute;
			right:10px;
			top:36px;
			background: white;
			list-style:none;
			border:1px solid #666;
			border-bottom: none;
			li{
				font:16px/54px '';
				color:#666;
				width: 120px;
				height:54px;
				text-align: center;
				border-bottom: 1px solid #666;
			}
		}
	}
</style>