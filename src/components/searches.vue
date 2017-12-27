<template>
	<div class="main">
		<my-headetail></my-headetail>
		<my-result></my-result>
		<my-loadmore></my-loadmore>
		<my-selecte></my-selecte>
	</div>
</template>
<script>
	
import router from "@/router";
import loadmore from "@/view/loadmore";
import headetail from "@/view/headetail";
import result from "@/view/result";
import selecte from "@/view/selecte";
export default {
		data(){
			return {
				msg:'我是搜索结果'
			}
		},
		mounted(){
			//---通过this.$route的可以直接读取到当前的路由信息。
			//可以打印一下console.log(this.$route);
			//就能得出我们的结论.
			console.log(this.$route);
			


		},
		components:{
			'my-headetail':headetail,
			'my-loadmore':loadmore,
			'my-selecte':selecte,
			'my-result':result,
		}

	}
</script>
<style>
	.main{
		font:25px/30px '';
		color:#ee2255;
		position: relative;
		left:0;
		right: 0;
	}
</style>