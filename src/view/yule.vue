<template>
	<div class="yule">
		<div class="header">
				<p>娱乐</p>
				<span>&gt;</span>
		</div>
		<div class="detail">
			<template v-for='(value,index) in myData[8].contents' v-if='index < 4'>
				<router-link class="detail-child" :to="{name:'donghua',query: { ac: value.subUrl}}" tag='div'>
					<div :style="{background:`url(${value.image}) no-repeat center`,backgroundSize:'cover'}"></div>
					<p>{{value.title}}</p>
				</router-link>
			</template>
		</div>
	</div>
</template>
<script>
	import store from '../store/store'
	export default {
		store,
		data(){
			return {
				haha:null
			}
		},
		mounted(){
			this.give(this.$store.state.data.data)
		},
		methods:{
			give(obj){
				this.haha = obj;
			},
		},
		computed:{
			myData(){
				
					
					return this.$store.state.data.data;
			
			}
		},
	}
</script>
<style lang='scss' scoped>
	.yule{
		width:auto;
		padding:0 8px;
		.header{
			width:100%;
			display: flex;
			justify-content:space-between;
			height:38px;
			font:14px/38px '';
			p{
				color:#ff851b;
				font:16px/38px '';
			}
			i{
				color:#eee;
			}
		}
		.detail{
			width:100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.detail-child{
				margin-top: 8px;
				width: 48%;
				height: 99 + 30 ;
				background: white;
				div {
					display: block;
					width: 100%;
					height: 99px;
				}
				p{
					font:12px/30px '';
					color:#333;
					text-indent: 10px;
					text-overflow:ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
			}
		}
	}
</style>