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
Vue.prototype.$http=axios;
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Home from "./containers/Home.vue";
import Search from "./containers/Search.vue";
import Detail from "./containers/Detail.vue";
import Login from "./containers/Login.vue";
import Square from "./containers/Square.vue";
import lianxi from "./containers/lianxi.vue";

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
		name:'home',
		component: Home,
		children: [{
				path: 'club',
				component: Club,
				name:'club'
			},
			{
				path: 'rank',
				component: Rank,
				name:'rank'
			},
			{
				path: 'forum',
				component: Forum,
				name:'forum'
			}
		]
	},
	{
		path: '/search',
		component: Search,
		name:'search'
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
	},
	{
		path: '/lianxi',
		component: lianxi
	}

]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	routes,
scrollBehavior (to, from, savedPosition) {//单页面跳转时，置顶
    return { x: 0, y: 0 }
}
})

const store = new Vuex.Store({
	state: {
		imgsrc:  ["http://bbs.cheshi-img.com/forum/201808/01/10120559cb6c3121a9f67e96862fe312a244ab1.jpg!img.800"],
		isnavShow:0
	},
	getters: {
		setArr: state => {
			return state.imgsrc;
		}
	}
})

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
