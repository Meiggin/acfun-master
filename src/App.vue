<template>
  <div id="app">
    <my-top></my-top>
    <my-side></my-side>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
import topbar from '@/view/topbar'
import sidebar from '@/view/sidebar'
import footer from '@/view/footer'
import store from '@/store/store'
import router from '@/router'
export default {
  name: 'app',
  router,
  store,
  mounted(){
    console.log('App.vue文件渲染完成');
  },
  components:{
    'my-top':topbar,
    'my-side':sidebar,
    'my-footer':footer,
  }
  
}
</script>

<style lang='scss' scope>

body{
  background: #f4f4f4;
  #app {
  }
}

</style>
