<template>
	<div class="error">
		
		<div class="main">{{msg}}</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				msg:'我是404页面'
			}
		},
		mounted(){
			console.log('我是404页面');
		}
	}
</script>
<style lang='scss' scoped>
	.error{
		width:100%;
		height:100%;
		.main{
			background: #ee44dd;
			font:40px/80px '';
			color:white;
			text-align: center;
		}
	}
</style>