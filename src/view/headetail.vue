<template>
	<div class="headetail">
		
		<div class="left">{{$store.state.headetail}}</div>
		<div class="right">
			<span>排序:</span>
			<div @click="$store.commit('changeSelect')">点击切换</div>
		</div>
	</div>
</template>
<script>
import store from '@/store/store';
	export default {
		name:'headetail',
		store,
		data(){
			return {
				msg:'我操你妈',
			}
		},
		mounted(){
			console.log('当前是'+this.$route.query.channel);
			this.$store.dispatch('wocaonima',this.$route.query.channel);
		},
		computed:{

		}
	}
</script>
<style lang="scss" scoped>
	.headetail{
		width:100%;
		height:36px;
		background: #ff3d36;
		text-align: center;
		overflow: hidden;

		.left{
			float: left;
			padding: 0 12px;
			background: white;
			border:1px solid #ccc6c6;
			border-radius:4px;
			width:56px;
			margin-left: 10px;
			font:12px/26px '';
			color:#333;
			margin-top: 4px;
			white-space: nowrap;
			overflow: hidden;
		}
		.right{
			float: right;
			margin-right: 10px;
			span{
				color:white;
				font:12px/36px '';
			}
			div{
				display: inline-block;
				width:120px;
				height:26px;
				margin-top:4px;
				font:12px/26px '';
				background: white;
				border:1px solid #ccc6c6;
				border-radius:4px;
				width:56px;
				color:#555;

			}

		}
	}
</style>