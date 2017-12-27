// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false;

//-------重点：Promise.resolve(参数)，
//不同类型的参数会造成不同类型的结果，以后自己做笔记。
Promise.resolve(store.dispatch('acfunData')).then(()=>{
	console.log('开始渲染页面');
	new Vue({
	  el: '#app',
	  router,
	  template: '<App/>',
	  components: { App }
	})

})
	

	

	

