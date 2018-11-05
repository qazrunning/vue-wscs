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
		component: Detail
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
	routes
})

const store = new Vuex.Store({
	state: {
		imgsrc: ["http://bbs.cheshi-img.com/forum/201807/13/10423310520c689c1b5af5836b772dc018628ab.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331e9e502e8e0872eda15b215cc6f3d3277.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/10423319dae6c81461de9373b2c8b3979b75382.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/10423318e0b245d56175488d9f08e8b9306caee.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233128de4e42451f4880c28aba1673ba04f6.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233110547bc1b8eb7cc5aad7ab28fc0962a4.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331e80a5451e16243e19c1d043a266a9c30.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331005faf9573d36a6bf52c95bb5cc21d48.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233118bbd5d56091f1705784f29c9e39dc1e.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331f40d1d04b85484e5bd48d432f4a2f3b4.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331ee38b8244c4df518a8ba5e165dd4ab22.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233112387b61661ce79d908b69e8071e0505.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331c84a3de2553d20ac3fe09fbc6b45afbd.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233175d34c6583c2c17048b896e17c73e2c3.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331ed74dc42c68475ebb3268d7be9c3d0d9.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/10423311a23b8bd73ac9730c179947afcf8750b.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331a57e63c2f203587e4404cce65debd9d6.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233190bd45cb68cb9739d1ac767c04bae8d7.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/10423316bf85a4e0dae80e139c1a4129ca08399.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331282b96a0d825ab64d199bd0e868d82f5.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331f462ebd96b6f5925e86191d9cabd782a.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233195ba8fa1ccc4dbf4b0c757443bf72640.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233181e8da94e85ec52848be2618da125599.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/10423310dc4a9224989df3cb21db0bbc4b10825.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/10423315740ee802c6161335f48e0c3bf968247.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331a0ed85e0706b418e709ee5a4b023daf3.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331522591d3c04b985252e483ec8bb47364.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331f23a64f55a6c1afbd8f5625ac032fbf4.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233182fe8fc79e056a6af32738860964a2a1.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233117c142534d0362b2b34925dfa57bb902.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331ed6b6d5f10f47fa2400bf75758eb324a.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/10423310d4c53c328827c729fe1c899ce13ba0e.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331e7e99d29d001c1383cbe052249d9aa49.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233162004e0afd2b0079897b0f3a2d0cea22.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331f2785ce163a447ad9f06aab7d1a55f9e.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/104233170d03cee09e28b8de9f6d22630a1372c.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/10423311dac5cb06dac3c07b5cda259cf62b5ad.jpg!img.800", "http://bbs.cheshi-img.com/forum/201807/13/1042331497ae6112afb6131e5d8ec1e587b212e.jpg!img.800"],
		isnavShow:0
	},
	getters: {
		setArr: state => {
			return state.imgsrc;
		}
	}
})

// 4. 创建和挂载根实例。
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')