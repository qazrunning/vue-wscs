<template>
	<div>
		<section class="circle_change">
			<div class="circle_btn">
				<a class="btn" href="#"><span><font ><font >查看全部</font></font></span><i class="arrow_b"></i></a>
				<a @click="isshowClubCar"><span><font ><font >按圈子查看</font></font></span><i class="arrow_b"></i></a>
			</div>
			<ul class="circle_list" data-num="0">
				<li class="cur" data-mark="all">
					<a href="#">
						<font>
							<font>查看全部</font>
						</font>
					</a>
					<i></i>
				</li>
				<li data-mark="join">
					<a href="#">
						<font>
							<font>我加入的圈子</font>
						</font>
					</a>
					<i></i>
				</li>
			</ul>
		</section>

		<!--圈子帖子-->
		<section class="circle_cont clearfix" v-infinite-scroll="getMoocs" infinite-scroll-distance="10" infinite-scroll-disabled="loading">
			<div class="circle_ullist" v-for="cc in news">
				<a @click="goDetail([cc.news_id,cc.title])">
					<div class="info"><img src="" v-lazy="cc.coverimg" style="height: 93px;">
						<div class="txt clearfix"><span class="fl"><font ><font v-text="`#${cc.club}`"></font></font></span>
							<p class="fr"></p>
						</div>
					</div>
					<p class="des">
						<font>
							<font v-text="cc.title"></font>
						</font>
					</p>
					<p class="timer">
						<font>
							<font v-text="cc.dateline"></font>
						</font>
					</p>
				</a>
				<a class="user" href="#"><img src="" :src="cc.coverimg"><span><font ><font v-text="cc.author"></font></font></span></a>
			</div>
			<div id="dianwo" v-show="isSShow"><img src="http://img1.cheshi-img.com/misc/gaojiacheng/201806/5b1f84d7a1f7f.gif" /></div>
		</section>
		<!--圈子选项卡-->
		<GclubCar />
	</div>

</template>

<script>
	import GclubCar from "../components/GclubCar.vue";
	import axios from "axios";
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //全局更改
	import qs from "qs"; //配合qs模块转化post请求的参数，记得先npm install qs
	//	Vue.prototype.$axios = axios;
	//	Vue.prototype.$qs = qs;
	import { InfiniteScroll } from 'mint-ui';

	export default {
		components: {
			GclubCar
		},
		data() {
			return {
				news: [],
				dataId: 0,
				page: 1,
				isSShow: false,
				path:""
			}
		},
		methods: {
			loadMore() {
				let postData = qs.stringify({
					page: this.page,
					limit: 10
				});
				axios({
						method: 'post',
						url: this.ClubCar,//获取仓库当前的clubCarPath值，进行页面加载
						data: postData
					})
					.then((response) => {
						console.log(response.data.result);
						//使用数组合并的方法来添加数据
						//es6的数组扩展方法
						this.news = [...this.news, ...response.data.result];
					})
					.catch((error) => {
						//console.log(error);
					});
			},
			goDetail([idIndex, dataTitle]) {//配合点击事件，跳转详情页
				this.dataId = idIndex
				this.$router.push({//路由传参
					name: "detail",
					query: {//有区分是使用get或者post
						dataId: this.dataId,
						dataTitle: dataTitle
					}
				});
			},
			pageplus() {//编写方法，获取后端相应的分页值
				this.page++;
				this.loadMore();
			},
			//触底加载
			getMoocs() {
				this.loading = true;
				this.isSShow = true;
				clearTimeout(this.times)
				this.times = setTimeout(() => {
					//console.log(465446);
					this.pageplus();
					this.loading = false;
					this.isSShow = false;
				}, 500)
			},
			isshowClubCar() {
				this.$store.dispatch("setClubCar", {
					showClubCar: true
				})
			}
		},
		mounted() { //声明周期的一种状态
			this.loadMore();
		},
		computed: { //获取vuex仓库信息，用函数接收一个对象。可以当做data里面的数据直接使用
			ClubCar() {
				return this.$store.getters.getClubCarPath;
			}
		},
		watch: {
			ClubCar: function(a) {//监听vuex仓库值的变化，执行相应的加载函数
				
				if(a!=undefined){
					this.news = [];
					this.path = a;
				let postData = qs.stringify({
					page: 1,
					limit: 10
				});
				axios({
						method: 'post',
						url:a,
						data: postData
					})
					.then((response) => {
						console.log(response.data.result);
						//使用数组合并的方法来添加数据
						//es6的数组扩展方法
						this.news = [...this.news, ...response.data.result];
					})
					.catch((error) => {
						//console.log(error);
					});
				}
			}
		}

	}
</script>

<style>
img[lazy=loaded]{
   
  animation:fade 0.3s;
}
@keyframes fade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>