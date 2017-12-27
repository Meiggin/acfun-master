import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);



 var store = new Vuex.Store({
 		state:{
 			//----sidebar显示
 			isShow:false,
 			//---首页数据
 			data:null,
 			//---搜索结果页右边展示
 			selectShow:false,
 			//------
 			headetail:null,
 			//---搜索结果
 			searchData:[],
 			//------最新发布1，最新回复5，最多评论2
 			sort:1,
 			abCover:null,
 			acCover:null,
 			pageNum:1,
 			//----a站自己的页面和数据也有问题。因此我自己在这里写了匹配的页面名字数组
 			pagename:[
 				{'name':'AC·正义',channelId:'178'},
 				{'name':'娱乐',channelId:'60'},
 				{'name':'游戏',channelId:'59'},
 				{'name':'宅舞',channelId:'134'},
 				{'name':'综合',channelId:'110'},
 				{'name':'工作情感',channelId:'73'},
 				{'name':'动漫文化',channelId:'74'},
 				{'name':'漫画小说',channelId:'75'},
 				{'name':'游戏',channelId:'164'},
 				{'name':'二次元',channelId:'1'},
 				{'name':'动画',channelId:'155'},
 				{'name':'国产',channelId:'179'},
 				{'name':'音乐',channelId:'58'},
 				{'name':'科技',channelId:'70'},
 				{'name':'体育',channelId:'69'},
 				{'name':'生活娱乐',channelId:'86'},
 				{'name':'鬼畜调教',channelId:'87'},
 				{'name':'萌宠',channelId:'88'},
 				{'name':'萌宠',channelId:'88'},
 				{'name':'美食',channelId:'89'},
 				{'name':'TV动画',channelId:'67'},
 				{'name':'剧场动画',channelId:'180'},
 				{'name':'动画短片',channelId:'181'},
 				{'name':'短片·手书',channelId:'106'},
 				{'name':'MAD·AMV',channelId:'107'},
 				{'name':'MMD·3d',channelId:'108'},
 				{'name':'COSPLAY·声优',channelId:'133'},
 				{'name':'布袋特摄',channelId:'99'},
 				{'name':'国产动画',channelId:'120'},
 				{'name':'资讯·延伸',channelId:'182'},
 				{'name':'游戏锦集',channelId:'83'},
 				{'name':'点击竞技',channelId:'145'},
 				{'name':'主机单机',channelId:'84'},
 				{'name':'英雄联盟',channelId:'85'},
 				{'name':'桌游卡牌',channelId:'165'},
 				{'name':'Mugen',channelId:'72'},
 				{'name':'原创·翻唱',channelId:'136'},
 				{'name':'演奏',channelId:'137'},
 				{'name':'Vocaloid',channelId:'103'},
 				{'name':'日系音乐',channelId:'138'},
 				{'name':'综合音乐',channelId:'139'},
 				{'name':'演唱会',channelId:'140'},
 				{'name':'历史',channelId:'131'},
 				{'name':'科学技术',channelId:'90'},
 				{'name':'教程',channelId:'151'},
 				{'name':'数码',channelId:'91'},
 				{'name':'汽车',channelId:'122'},
 				{'name':'广告',channelId:'149'},
 				{'name':'综合体育',channelId:'152'},
 				{'name':'足球',channelId:'94'},
 				{'name':'篮球',channelId:'95'},
 				{'name':'搏击',channelId:'153'},
 				{'name':'11区体育',channelId:'154'},
 				{'name':'惊奇体育',channelId:'93'},
 				{'name':'综合舞蹈',channelId:'135'},
 				{'name':'爱豆',channelId:'129'},
 				{'name':'手作',channelId:'130'},
 				{'name':'造型',channelId:'127'},
 			]
 		},
 		mutations:{
 			change(){ 		
 				this.state.isShow = !this.state.isShow;
 				console.log(this.state.isShow);
 			},
 			fromAcfun(state,aa){
 				console.log('state的数据已经变化。')
 				this.state.data = aa;
 			},
 			changeDetail2(state,aa){
 				this.state.pageNum = 1;
 				this.state.headetail = aa;
 			},
 			changeSelect(context,aa){
 				console.log('触发切换事件');
 				//-初始化页面的当前所在页数
 				this.state.sort = aa;
 				this.state.selectShow = !this.state.selectShow;
 			},
 			getSearchData(state,aa){
 				this.state.pageNum++;
 				this.state.searchData = [...this.state.searchData,...aa];
 				console.log('搜索结果已经赋值给了searchData');
 			},
 			abCoverGet(state,aa){
 				//-----在mutations与getters里面的第一个参数state就是当前的state，而不是store对象。
 				//在actions里面，第一个参数是context，即目前的store对象，
 				//this：根store对象。最大的那个。
 				// console.log('之前：'+state.abCover.cover);
 				this.state.abCover = aa.data;
 				// console.log('之后：'+state.abCover.cover);
 			},
 			acCoverGet(state,aa){ 				
 				this.state.acCover = aa.data;
 			}
 		},
 		getters:{
 			getSearchDataOfGetters(context){
 				console.log('getSearchDataOfGetters已经发生变化');
 				return context.searchData;
 			},
 			getAbcoverData(context){
 				console.log('触发了ABcover事件一次');
 					return context.abCover;
 			},
 			getAccoverData(context){
 				console.log('触发了ACcover事件一次');
 					return context.acCover;
 			},
 		},
 		actions:{

 			//--acfunData获取首页数据。
 			acfunData(context){
 				console.log('执行actions的acfunData方法')
 				var reqhaha = new Request('/regions?belong=0&loadCount=-1',{
 					method:'get',
 					headers:{
 						"Accept":"application/json",
 						"Connection":"keep-alive",
 						"deviceType":"2",
 						"productId":"2000",
 					}
 				})
 			return	fetch(reqhaha).then(res=>res.json()).then((aa)=>{
		 					// this.state.data = aa;这一步可以不用
		 					console.log(context , this);
		 					context.commit('fromAcfun',aa);
		 					console.log('来自a站的数据已经传给了vuex.state');

		 				});

 			},
 			//--wocaonima获取搜索结果页信息。
 			wocaonima(context,data){
	 				this.state.pageNum = 1;
	 				this.state.searchData = [];
 					console.log('执行actions的changeDetail方法');
 					//-----对传进来的data进行遍历，返回这个data的相同结构下的name
 					var backData = context.state.pagename.filter((ele,index)=>{
 						return	ele.channelId == data;
 					})[0].name;
 					//--并且在这里执行fetch请求a站的数据。
 					//这里面两个重要的点，一个是页数，一个是channel
 					var req = new Request('/searches/channel?sort='+context.state.sort+'&pageNo=1&pageSize=20&parentChannelId='+data,{
 					method:'get',
 					headers:{
 						"Accept":"application/json",
 						"Connection":"keep-alive",
 						"deviceType":"2",
 						"productId":"2000",
 					}
 				});
 					fetch(req).then(res=>res.json())
 							  .then((res)=>{
 							  	console.log('得到搜索页请求的数据');
 							  	//---提交事件。
 							  	context.commit('getSearchData',res.data.list)
 							  });
 					console.log(backData);
 					//--提交事件。
 					context.commit('changeDetail2',backData);
 					
 			},
 			getMore(context,data){
 				var nowNum = context.state.pageNum+1;
 				var req = new Request('/searches/channel?sort='+context.state.sort+'&pageNo='+nowNum+'&pageSize=20&parentChannelId='+data,{
 					method:'get',
 					headers:{
 						"Accept":"application/json",
 						"Connection":"keep-alive",
 						"deviceType":"2",
 						"productId":"2000",
 					}
 				});
 					fetch(req).then(res=>res.json())
 							  .then((res)=>{
 							  	console.log('新一页的数据');
 							  	//---提交事件。
 							  	context.commit('getSearchData',res.data.list)
 							  });
 			},
 			getAbCover(context,data){
 				var req = new Request(`/bangumis/${data}?page={%22num%22:1,%22size%22:100}`,{
 					method:'get',
 					headers:{
 						"Accept":"application/json",
 						"Connection":"keep-alive",
 						"deviceType":"2",
 						"productId":"2000",
 					}
 				});
 				fetch(req).then(res=>res.json()).then(res=>{
 					console.log('已获得来自ab的cover数据');
 					context.commit('abCoverGet',res);
 				})
 			},
 			getAcCover(context,data){
 				var req = new Request(`/contents/${data}`,{
 					method:'get',
 					headers:{
 						"Accept":"application/json",
 						"Connection":"keep-alive",
 						"deviceType":"2",
 						"productId":"2000",
 					}
 				});
 				fetch(req).then(res=>res.json()).then(res=>{
 					console.log('已获得来自ac的cover数据');
 					context.commit('acCoverGet',res);
 				})
 			},
 		},
 	
 	})
 	export default store ;

