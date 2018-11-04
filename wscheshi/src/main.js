import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueRouter from 'vue-router'

Vue.use(VueRouter)
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

// 2. 定义路由

const routes = [{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/search',
		component: Search
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
		path: '/club',
		component: Club
	},
	{
		path: '/rank',
		component: Rank
	}
	
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
	routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
	router,
	render: h => h(App),
}).$mount('#app')