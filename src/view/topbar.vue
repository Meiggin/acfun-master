<template>
  <div class="top">   
     <i class="iconfont icon-category" v-bind:style="{color:everyChange}" @click="$store.commit('change');changeColor()" ></i>
  
    <router-link tag="div" to="/">
        <img src="../assets/img/logo.png" alt="">
    </router-link>
     <!-- <router-link tag="a" to="/about" activeClass="active">正在热映</router-link> -->
    <i class="iconfont icon-search"></i>
  </div>
</template>
<style src="@/assets/font/iconfont.css"></style>
<script>
import store from '@/store/store'
export default {
  name: 'topbar',
  data () {
    return {
      msg: '我是导航栏',
      myColor:{
        color:'#5e5e5e'
      }     
    }
  },store,
  methods:{
    changeColor(){
      this.myColor.color = this.$store.state.isShow?'yellow':'#5e5e5e';
    },
  },
  computed:{
    everyChange(){
      return this.$store.state.isShow?'yellow':'#5e5e5e';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .top{
    height:40px;
    width:100%;
    display:flex;
    justify-content: space-between;
    background:white;
    color:#5e5e5e;
    i{
      font-weight: bold;
       font:20px/40px '';
       margin-left:12px;
       margin-right:12px;
    }
    img{
      display: block;
      width:85px;
      height:25px;
      margin-top: 7px;

    }
  }
</style>
