import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

//引入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//引入axios模块
import axios from 'axios'
Vue.prototype.$http = axios;
//引入mintui
import MintUI from 'mint-ui'
Vue.use(MintUI);
//引入vue-lazy模块；
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
	preLoad: 1.3,
  loading: 'http://img1.cheshi-img.com/misc/gaojiacheng/201806/5b1f84d7a1f7f.gif',
  listenEvents: [ 'scroll' ]
})
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Home from "./containers/Home.vue";
import Search from "./containers/Search.vue";
import Detail from "./containers/Detail.vue";
import Login from "./containers/Login.vue";
import Square from "./containers/Square.vue";


//二级路由
import Club from "./containers/HomeClub.vue";
import Rank from "./containers/HomeRank.vue";
import Forum from "./containers/HomeForum.vue";

// 2. 定义路由

const routes = [{
		path: '/',
		redirect: '/home/forum'
	},
	{
		path: '/home',
		name: 'home',
		component: Home,
		children: [{
				path: 'club',
				component: Club,
				name: 'club'
			},
			{
				path: 'rank',
				component: Rank,
				name: 'rank'
			},
			{
				path: 'forum',
				component: Forum,
				name: 'forum'
			}
		]
	},
	{
		path: '/search',
		component: Search,
		name: 'search'
	},
	{
		path: '/detail',
		component: Detail,
		name: 'detail'
	},
	{
		path: '/square',
		component: Square
	},
	{
		path: '/login',
		component: Login
	}

]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) { //单页面跳转时，置顶。为了防止跳转组件时不置顶的情况
		return {
			x: 0,
			y: 0
		}
	}
})

const store = new Vuex.Store({
	state: {
		isnavShow: 0,
		clubCar:{
			showClubCar:false,
			clubPath:"http://120.78.219.201/m/api/travel/"
		},
		imgshowObj:{
			isimgshow:false,
			isimgshowArr:[],
			imgshowIndex:0
		}
	},
	// 修改状态
	mutations: {
		editClubCar(state, data) {
			state.clubCar = data
		},
		editimgshowObj(state, data) {
			state.imgshowObj = data
		}
	},
	// actions  一般配合 事件@xxx 触发
	actions: {
		setClubCar(context, data) {
			context.commit('editClubCar', data)
		},
		setimgshowObj(context, data) {
			context.commit('editimgshowObj', data)
		},
	},
	getters: {//编写函数对象，使vue组件可以通过该方法拿到对应的值
		getClubCar: state => {
			return state.clubCar;
		},
		getClubCarPath:state => {
			return state.clubCar.clubPath;
		},
		getimgshowObj:state => {
			return state.imgshowObj;
		}
	}
})




new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')