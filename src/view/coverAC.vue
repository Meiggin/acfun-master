<template>
	<div class="cover"  v-if='getAccoverData' @click.once='change()'>
		<div class="video" :style="{background:`url(${getAccoverData.cover}) no-repeat center`,backgroundSize:'cover'}"></div>
		<i v-if='!isShow'></i>
		<b v-if='isShow'></b>
		<p v-if='!isShow'>赶紧登录，有三倍缓存！！！</p>
	</div>
</template>

<script>
	import store from '../store/store'
	import { mapGetters } from 'vuex'
	export default {
		store,
		data(){
			return {
				isShow:false,
			}
		},
		mounted(){
			console.log('向vuex的getAcCover发送请求');
			this.$store.dispatch('getAcCover',this.$route.query.ac);
		},
		computed:{
		...mapGetters(['getAccoverData',])
		},
		methods:{
			change(){
					this.isShow = true;
			}
		}
	}
</script>
<style lang='scss' scoped>
	.cover{
			width:100%;
			height:211px;
			position: relative;
		.video{
			width:100%;
			height:211px;

		}
		b{
			position: absolute;
			width:100px;
			height:100px;
			background: url('../assets/img/loading.gif') no-repeat center;
			background-size: 100% 100%;
			left:0;right:0;top:0;bottom: 0;margin:auto;	
		}
		i{
			position: absolute;
			width:100px;
			height:86px;
			background: url('../assets/img/play-icon.png') no-repeat center;
			background-size: 100% 100%;
			right:20px;
			bottom:20px;
		}
		p{
			width:100%;
			position: absolute;
			font:18px/36px '';
			background: rgba(0,0,0,.5);
			color:white;
			text-align: center;
			bottom: 0;
			left:0;
		}
	}
</style>