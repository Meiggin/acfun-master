<template>  
  <div>  
   <my-nav></my-nav>
   <my-wheel></my-wheel>
   <my-article></my-article>
   <my-cartoon></my-cartoon>
   <my-erciyuan></my-erciyuan>
   <my-guochan></my-guochan>
   <my-music></my-music>
   <my-game></my-game>
   <my-yule></my-yule>
   <my-techology></my-techology>
   <my-tiyu></my-tiyu>
 </div>
</template>

<script>
import navbar from '@/view/navbar';
import wheelbar from '@/view/wheelbar';
import article from '@/view/article';
import cartoon from '@/view/cartoon';
import erciyuan from '@/view/erciyuan';
import guochan from '@/view/guochan';
import music from '@/view/music';
import game from '@/view/game';
import yule from '@/view/yule';
import techology from '@/view/techology';
import tiyu from '@/view/tiyu';
import store from '@/store/store';
export default {
  name: 'HelloWorld',
  store,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeCreated(){
      console.log('我是home.vue')
  },
  components:{
    'my-nav':navbar,
    'my-wheel':wheelbar,
    'my-article':article,
    'my-cartoon':cartoon,
    // 'my-footer':footer,
    'my-erciyuan':erciyuan,
    'my-guochan':guochan,
    'my-music':music,
    'my-game':game,
    'my-yule':yule,
    'my-techology':techology,
    'my-tiyu':tiyu,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font:.1rem/.4rem '';
}

</style>
