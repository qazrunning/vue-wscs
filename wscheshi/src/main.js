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
		imgsrc:  ["http://bbs.cheshi-img.com/forum/201808/01/10120559cb6c3121a9f67e96862fe312a244ab1.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/1012055ebf8d3564e829ae1a0b39ece4d15ff92.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/1012055f36994b82b56835b52bb1fdd2a9a46d4.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/1012055fc6f51188da723187493a65a940e20f5.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/1012055f8dd948aecc4bb3b4dc58b58932be2a2.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/1012055680ec014a032cfb0781158c72800b1a0.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/101205562f8b0eb992a3d7f0bebf11e82df956a.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/10120557291373f481e461275d16d088ee27600.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/10120552d938bab669233737987b7eaa77fa6a8.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/10120558ccc429d8b81c503bcc94ccfc346fab5.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/101205590137a23599525ac429c7de64a174a08.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/1012055ee20afe5966756509cd19dded800849b.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/1012055182a25b389d242257512ce5715c1d0ef.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/10120554abefc3e2571c2921393130477397737.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/1012055c2ecae38c67e0d7ceba7a40380f53b62.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/10120559c1a22b4121be5ccf3ef7c7bc45896c2.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/10120558494436dbee3215e5665d2b3ce82625e.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/1012055e804fba58dfe57d76e83b053ad2366d2.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/1012055b959a35c6c41ebbda1ee43b35124c2d7.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/101205508b1b8733cd9095dadef9952853bc30c.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/1012055b2c99a2db805b1af52d2d9750d87cdc1.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/101205534b539353396aafb71e690e88786fc04.jpg!img.800", "http://bbs.cheshi-img.com/forum/201808/01/10120557d944436266cbf589bd81a05529dde40.jpg!img.800"],
		
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