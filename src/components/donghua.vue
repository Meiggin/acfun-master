<template>
	<div class="donghua">
		<template v-if='whoCom'>
			<my-coverac key='ac'></my-coverac>
		</template>
		<template v-if='!whoCom'>
			<my-coverab key='ab'></my-coverab>
		</template>
	</div>
</template>
<script>
import coverAB from '@/view/coverAB'
import coverAC from '@/view/coverAC'
	export default {

		data(){
			return {
				msg:'我是动画详情页',
			}
		},
		beforeCreate(){
		},
		computed:{
			whoCom(){
				console.log('whoCom改变一次');
					if(this.$route.query.ac){
						return true;
					}
						else{
							return false;
						}
			}
		},
		components:{
			'my-coverac':coverAC,
			'my-coverab':coverAB,
		}
	}
</script>
<style>
	
</style>