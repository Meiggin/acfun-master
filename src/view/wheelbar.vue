<template>

	<mt-swipe class='xixi' :options='swiperOption'>
	  <mt-swipe-item class='haha' v-for="img in myData[0].contents" :key="img.id">
		<!-- <img :src="img.image"/ > -->
		<router-link tag='div' class='imgDiv' :to="{name:'donghua',query:{ab:img.url}}">
			<img :src="img.image" />
		</router-link>

	</mt-swipe-item>

	 
	  <div class="swiper-pagination"  slot="pagination"></div>	  
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
</mt-swipe>

	


</template>
<script>
	// import acfunJson from '@/assets/json/acfun'
	import store from '@/store/store'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'   
	require('swiper/dist/css/swiper.css') //这一步是最重要的！！！
	export default {
		name:'wheelbar',
		store,
		data(){
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					paginationClickable: true,
					spaceBetween: 30,
					centeredSlides: true,
					autoplay: 2500,
					autoplayDisableOnInteraction: false
				},
				data:null
			}
		},
		methods:{
				giveDetail(obj){
					
					this.data = obj;
				}
		},
		mounted(){	
			this.giveDetail(this.$store.state.data.data);			
		},
		computed:{
			myData(){
				
					
					return this.$store.state.data.data;
			

			}
		},
		components:{
			'mt-swipe':swiper,
			'mt-swipe-item':swiperSlide
		}
	}
</script>
<style lang='scss' scoped>

	.xixi{
		width:100%;
		height:211px;
		overflow: hidden;
		
	}
	.haha{
		width:100%;
		height:211px;
			
		}

	img{
				width:100%;
				height:211px;
				display: block;
			}
</style>
