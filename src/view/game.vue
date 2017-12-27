<template>
	<div class="game">
		<div class="header">
				<p>游戏</p>
				<span>&gt;</span>
		</div>
		<div class="detail">
			<template v-for='(value,index) in myData[10].contents' v-if='index < 4'>
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
	.game{
		width:auto;
		padding:0 .08rem;
		.header{
			width:100%;
			display: flex;
			justify-content:space-between;
			height:.38rem;
			font:.14rem/.38rem '';
			p{
				color:#ff851b;
				font:.16rem/.38rem '';
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
				margin-top: .08rem;
				width: 48%;
				height: 1.2rem;
				background: white;
				div {
					display: block;
					width: 100%;
					height: .99rem;
				}
				p{
					font:.12rem/.3rem '';
					color:#333;
					text-indent: .1rem;
					text-overflow:ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}
			}
		}
	}
</style>