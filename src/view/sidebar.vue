<template>
  <transition name='xixihaha'>    
  <div class="side"   v-if='change'>   
    <div class="first child">
      <img src="../assets/img/avatar.jpg" alt="">
      <span @click="console()">{{login}}</span>
    </div>
    <div class='second child'>
      <span>{{nav}}</span>
    </div>
    <div class='third child'>
      <template v-for='value in detail'>
        <div class="thirdDetail">
          <div class="detailTitle">{{value.title}}</div>
          <div class="detailData">
            <template v-for='data in value.data'>
              <router-link tag='div' class="detailDataChild"  :to="{ path: 'searches', query: { channel: data.channelId }}" @click.native="$store.commit('change');$store.dispatch('wocaonima',data.channelId);">{{data.name}}</router-link>
            </template>
          </div>
        </div>
      </template>
    </div>
    <div class='fourth child'>
      <div @click="$store.commit('change')">{{close}}</div>     
    </div>
  </div>
  </transition>
</template>
<script>
import store from '@/store/store'
export default {
  name: 'sidebar',
  store,
  data () {
    return {
      msg: '我是侧边栏',
      login:'登录',
      nav:'导航',
      detail:[
          {
            title:'AC·正义',
            data:''
          },
          {
            title:'文章',
            data:[
            {'name':'综合',channelId:'110'},
            {'name':'工作情感',channelId:'73'},
            {'name':'动漫文化',channelId:'74'},
            {'name':'漫画小说',channelId:'75'},
            {'name':'游戏',channelId:'164'},
            ]
          },
          {
            title:'娱乐',
            data:[
            {'name':'生活娱乐',channelId:'86'},
            {'name':'鬼畜调教',channelId:'87'},
            {'name':'萌宠',channelId:'88'},
            {'name':'萌宠',channelId:'88'},
            {'name':'美食',channelId:'89'},
            ]
          },
          {
            title:'动画',
            data:[
            {'name':'TV动画',channelId:'67'},
            {'name':'剧场动画',channelId:'180'},
            {'name':'动画短片',channelId:'181'},
            ]
          },
          {
            title:'二次元',
            data:[
            {'name':'短片·手书',channelId:'106'},
            {'name':'MAD·AMV',channelId:'107'},
            {'name':'MMD·3d',channelId:'108'},
            {'name':'COSPLAY·声优',channelId:'133'},
            {'name':'布袋特摄',channelId:'99'},
            ]
          },
          {
            title:'国产',
            data:[
            {'name':'国产动画',channelId:'120'},
            {'name':'资讯·延伸',channelId:'182'},
            ]
          },
          {
            title:'游戏',
            data:[
            {'name':'游戏锦集',channelId:'83'},
            {'name':'点击竞技',channelId:'145'},
            {'name':'主机单机',channelId:'84'},
            {'name':'英雄联盟',channelId:'85'},
            {'name':'桌游卡牌',channelId:'165'},
            {'name':'Mugen',channelId:'72'},
            ]
          },
          {
            title:'音乐',
            data:[
            {'name':'原创·翻唱',channelId:'136'},
            {'name':'演奏',channelId:'137'},
            {'name':'Vocaloid',channelId:'103'},
            {'name':'日系音乐',channelId:'138'},
            {'name':'综合音乐',channelId:'139'},
            {'name':'演唱会',channelId:'140'},
            ]
          },
          {
            title:'鱼塘',
            data:[
            {'name':'历史',channelId:'131'},
            ]
          },
          {
            title:'科技',
            data:[
            {'name':'科学技术',channelId:'90'},
            {'name':'教程',channelId:'151'},
            {'name':'数码',channelId:'91'},
            {'name':'汽车',channelId:'122'},
            {'name':'广告',channelId:'149'},
            ]
          },
          {
            title:'体育',
            data:[
            {'name':'综合体育',channelId:'152'},
            {'name':'足球',channelId:'94'},
            {'name':'篮球',channelId:'95'},
            {'name':'搏击',channelId:'153'},
            {'name':'11区体育',channelId:'154'},
            {'name':'惊奇体育',channelId:'93'},
            ]
          },
          {
            title:'舞蹈·彼女',
            data:[
            {'name':'综合舞蹈',channelId:'135'},
            {'name':'爱豆',channelId:'129'},
            {'name':'手作',channelId:'130'},
            {'name':'造型',channelId:'127'},
            ]
          },
          {
            title:'合作',
            data:[{'name':'合作',channelId:'404'}]
          }
      ],
      close:'关闭',

    }
  },
  computed:{
      change(){
            return this.$store.state.isShow;
      }
  },
 methods:{
  console(){
    console.log(this.isShow);
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .xixihaha-enter,.xixihaha-leave-to{
    transform:scale(0,0);
  }
  .xixihaha-enter-active,.xixihaha-leave-active{
    transform-origin: left top;
    transition:all .8s;
  }
  .xixihaha-enter-to,.xixihaha-leave{
   transform:scale(1,1);
  }
  .side{
    position: absolute;
    width:auto;
    display:flex;
    z-index:13;
    background:#fcfcfc;
    border-top:1px solid #ddd;
    border-bottom:1px solid orange;
    padding:12px 12px 0 12px;
    flex-wrap:wrap;
    align-items:space-between;
    font-size:16px;
    .child{
      display: flex;
      width:100%;
    }
    .first{
      justify-content:flex-start;
      align-items:center;
      height:70px;
      img{
        height: 60px;
        width:60px;
        border-radius:50%;
        border:1px solid orange;
        margin-right:16px;

      }
      span{
        color:#606060;
      }
    }
    .second{
      justify-content:space-between;
      align-items:center;
      span{
        color:orange;
        font:18px/18px '';
      }
      &::before,&:after{
        content:'';
        display: block;
        height:1px;
        width:140px;
        background: #eee;
      }
    }
    .third{
      // background: green;
      flex-wrap:wrap;
      border-bottom: 1px solid #ddd;
      .thirdDetail{
        width:100%;
        display: flex;
        // padding-top:3px;
        font:14px/28px '';          
        text-align: center;
        color:#606060;          
        text-overflow:ellipsis;
        .detailTitle{
          width:80px;
          height:28px;
          background: #eee;
          margin-right: 3px;
          margin-top: 3px;
          margin-bottom: 3px;
           border-radius:3px;
           flex-shrink:0;
        }
        .detailData{
          width:auto;
          display: flex;
          flex-wrap:wrap;
          width:351-80;
          .detailDataChild{
            width:80px;
            height:28px;
            border:1px solid #ccc;
            border-radius:3px;
            margin: 3px;
            white-space: nowrap;
            overflow: hidden;
            
          }
        }
      }

    }
    .fourth{
      display: flex;
      justify-content:center;
      align-items:center;
      height:46px;
      div{
        width:177px;
        height:28px;
        text-align: center;
        border:1px solid #ccc;
        border-radius: 4px;
      }
    }
  &::before{
      content:'';
      position: absolute;
      background: url(../assets/img/sanjiao.png) no-repeat;
      height: 8px;
      width: 14px;
      top: -8px;
      left:10px;
    }
  }
</style>
