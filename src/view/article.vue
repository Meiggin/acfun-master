<template>
	<div class="article">
			<div class="header">
				<p>文章</p>
				<span>&gt;</span>
			</div>
			<div class="detail">
				<!-- dnf -->
				<div class="detail-dnf">
					<img :src="myData[9].contents[0].image" alt="">
					<div>
						<p>{{myData[9].contents[0].title}}</p><p>{{myData[9].contents[0].intro}}</p>

					</div>
				</div>
				<!-- lingdao -->
				<template v-for='(value,index) in myData[9].contents' v-if="index < 3">
					<div  class="detail-leader">					
						<span class="detail-leader-left">{{value.title}}</span>
						<i class="iconfont icon-comments"></i>
						<span class="detail-leader-right">{{value.visit.comments}}</span>					
					</div>
				</template>
			</div>
	</div>
</template>
<style src="@/assets/font/iconfont.css"></style>
<script>
	import store from '@/store/store'   
	export default {
		name:'article',
		store,
		data(){
			return {
				
				data:null
			}
		},
		updated(){
			this.give(this.$store.state.data.data);
		},
		methods:{
			give(obj){
				this.data = obj;
				console.log(this.data);
			},
		},
		computed:{
			myData(){
				console.log('已经渲染到acticle');
				return this.$store.state.data.data;				
			}
		},
	}
</script>
<style lang='scss' scoped>
	.article{
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
	   	height: 187px;
	   	box-sizing:border-box;
	   	background: white;
	   	padding:8px 8px 0 8px;
	   	.detail-dnf{
	   		height:68px;
	   		width:auto;
	   		overflow: hidden;
	   		img{
	   			width:80px;
	   			height:60px;
	   			float: left;
	   			margin-right:8px;
	   		}
	   		div{
	   			float: left;
	   			width:auto;
	   			height:68px;
	   			p{
					font:14px/20px '';
					color:#333;
					width:250px;
					text-overflow:ellipsis;
					 white-space:nowrap; 
					 overflow:hidden;
	   			}
	   			p:nth-child(2){
					font:12px/20px '';
					color:#a975d6;
	   			}
	   		}
	   	}
	   	.detail-leader{
	   		height:36px;
	   		width:auto;
	   		font:12px/36px '';
	   		color:#444;
	   		border-top:1px solid #ddd;
	   		overflow: hidden;
			.detail-leader-left{
				width:80%;
				float: left;
				text-overflow:ellipsis; white-space:nowrap; overflow:hidden;
			}
			i{
				float:left;
				width:10%;
				text-align: right;
			}
			.detail-leader-right{
				width:10%;
				float: left;
				text-align:left;
			}

	   	}
	   }
	}
</style>
