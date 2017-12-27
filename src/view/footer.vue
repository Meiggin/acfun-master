<template>
	<div class="footer">
		<div class="chuowo">还有啥？戳我去客户端看看(・ω・)ノ</div>
		<div class="zi">
			<div>关于</div>
			<div>反馈</div>
			<div>地图</div>
			<div>帮助</div>
			<div>更多应用</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				msg:'wocaonima'
			}
		}
	}
</script>
<style lang='scss' scoped>
	.footer{
		width: 100%; 
		border-top:1px solid #999;
		height: 98px;
		overflow: hidden;
		.chuowo {
			width:300px;
			height: 40px;
			font:12px/40px '';
			text-align:center;
			color:white;
			background: #fd4c5b;
			border-radius: 5px;
			margin:16px auto;
		}
		.zi{
			display: flex;
			width:300px;
			margin:auto;
			justify-content: space-around;
			color:#666;
			font:12px/26px '';
		}
	}
</style>