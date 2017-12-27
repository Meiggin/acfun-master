<template>
  <ul class="nav">   
   <router-link tag="li" to="/" class='first'>首页</router-link>
   <router-link tag="li" to="/searches?channel=178">AC正义</router-link>
   <router-link tag="li" to="/searches?channel=60">娱乐</router-link>
   <router-link tag="li" to="/searches?channel=59">游戏</router-link>
   <li class="dian" @click='change()'>···</li>
   <transition name='xixihaha'>
    <ul v-if='navShow' class="wocao">
     <router-link  tag="li" to="/searches?channel=134">舞蹈</router-link>
     <router-link  tag="li" to="/searches?channel=1">二次元</router-link>
     <router-link  tag="li" to="/searches?channel=155">动画</router-link>
     <router-link  tag="li" to="/searches?channel=179">国产</router-link>
     <router-link  tag="li" to="/searches?channel=58">音乐</router-link>
     <router-link  tag="li" to="/searches?channel=70">科技</router-link>
     <router-link  tag="li" to="/searches?channel=69">体育</router-link>
     <router-link  tag="li" to="/error404">合辑</router-link>
   </ul>
 </transition>



</ul>
</template>
<style src="@/assets/font/iconfont.css"></style>
<script>
export default {
  name:'navbar',
  data(){
    return {
      navShow:false,
    }
  },
  methods:{
    change(){
      this.navShow = !this.navShow;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

  .nav{
    display: flex;
    background: white;
    width:100%;
    height:35px;
    justify-content:space-between;
    list-style:none;
    position: relative;
    z-index:12;
    li{
      &.first{
        background:#ff851b;
        color:white;
      }
      &.dian{
        color:#ff851b;
        line-height: 30px;
      }
      color:#666;
      width:20%;
      height:35px;
      font:14px/35px '';
      text-align: center;
    }

  }

    /*执行动画的元素必须单独拿出来设置式样*/
    .wocao{
      width:100%;
      position: absolute;
      display: flex;
      flex-wrap:wrap;
      justify-content:flex-start;
      background: white;
      list-style: none;
      left:0;
      top:35px;
      height:70px;
      overflow: hidden;
    }

    .xixihaha-enter,.xixihaha-leave-to{
     height:0px;
   }
   .xixihaha-enter-active,.xixihaha-leave-active{
    transition:height 0.8s;
  }
  .xixihaha-enter-to,.xixihaha-leave{
    height:70px;
  }
</style>
