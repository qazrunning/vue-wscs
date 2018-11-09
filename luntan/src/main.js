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
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Home from "./containers/Home.vue";
import Search from "./containers/Search.vue";
import Detail from "./containers/Detail.vue";
import Login from "./containers/Login.vue";
import Square from "./containers/Square.vue";
import lianxi from "./containers/lianxi.vue";
import qqqq from "./containers/qqqq.vue";


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
	},
	{
		path: '/lianxi',
		component: lianxi
	},
	{
		path: '/qqqq',
		component: qqqq
	}

]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) { //单页面跳转时，置顶
		return {
			x: 0,
			y: 0
		}
	}
})

const store = new Vuex.Store({
	state: {
		imgsrc:  ["http://bbs.cheshi-img.com/forum/201809/28/4bn8b1lbdp.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/p8yketyv1s.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/8n4qupgouf.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/9xrb9zi6v8.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/s5gvnr9pn0.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/3xq8h0nf4s.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/wvphhcarnq.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/rjr59fru6t.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/58piznfr45.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/8zqd1vbf9e.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/ciai6k61cr.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/bfc7loxsfp.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/z60ibt1dss.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/2brxsr5lzk.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/u18ucet2dh.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/mozelrp4k7.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/zmbjumean7.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/q0hk7q4xrd.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/gkp2wfs5ix.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/iyubu6c6s3.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/feu5on0zyb.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/vnk5rrx59i.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/0h4kvr5rq6.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/ysqgtpiuf5.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/0swcy1x1yb.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/suzh1agwum.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/fxt0u7s93i.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/ggpy4v28gg.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/i7v4tfs22j.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/fjtopmzny2.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/6kjeh8czrp.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/vqppz3dee1.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/nq8fmt6hmg.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/x22h6gnm1q.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/vi3mdgenqm.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/2cilpsa8zw.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/amj3ueigsx.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/dehxc677xy.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/jjizz8306o.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/96kio92kow.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/iag3gfqlp5.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/t0eqdiaguu.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/bbwfjjdkvf.jpg!img.800","http://bbs.cheshi-img.com/forum/201809/28/yd0q9yc3fr.jpg!img.800"],
		isnavShow: 0,
		newsTitle: ""
	},
	// 修改状态
	mutations: {
		editTitle(state, data) {
			state.newsTitle = data
		}
	},
	// actions  一般配合 事件@xxx 触发
	actions: {
		setTitle(context, data) {
			context.commit('editTitle', data);
		}
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