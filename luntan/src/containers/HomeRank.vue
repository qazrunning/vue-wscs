<template>
	<div>
		<section class="touch_nav">
			<div class="touch_tab">
				<ul class="clearfix">
					<li data-mark="browse" :class="{cur:rankNavTitleShow===index}" v-for="(rn,index) in rankCar" @click="goTitleCur(index)">
						<a>
							<font>
								<font v-text="rn.rankNavTitle"></font>
							</font>
						</a>
					</li>
				</ul>
			</div>
		</section>
		<section class="rankings" v-infinite-scroll="getMoocs" infinite-scroll-distance="10" infinite-scroll-disabled="loading">
			<div class="rank_list clearfix" v-for="rr in news">
				<div class="rank_txt fl">
					<a class="h3" @click="goDetail([rr.news_id,rr.title])">
						<font>
							<font v-text="rr.title"></font>
						</font>
					</a>
					<p class="clearfix">
						<a class="user" @click="goDetail([rr.news_id,rr.title])"><img src="" :src="rr.coverimg">
							<font>
								<font v-html="`&nbsp;${rr.author}`"></font>
							</font>
						</a>
						<span class="fr" v-show="ShowTitle=='浏览最多'"><i class="icon_bbs icon_bw1"></i><font ><font v-html="`&nbsp;${rr.scan}`"></font></font></span>
						<!--评论最多-->
						<span class="fr" v-show="ShowTitle=='评论最多'"><i class="icon_bbs icon_pl03"></i><font><font v-html="`&nbsp;${rr.comments}`"></font></font></span>
						<!--精彩推荐-->
						<span class="fr" v-show="ShowTitle=='精彩推荐'"><font><font v-text="rr.dateline"></font></font></span>
						<!--最新发布-->
						<span class="fr" v-show="ShowTitle=='最新发布'"><font><font v-text="rr.dateline"></font></font></span>
					</p>
				</div>
				<div class="rank_img fr">
					<a @click="goDetail([rr.news_id,rr.title])"><img src="" :src="rr.coverimg"></a>
				</div>
			</div>
			<div id="dianwo" v-show="isSShow"><img src="http://img1.cheshi-img.com/misc/gaojiacheng/201806/5b1f84d7a1f7f.gif" /></div>
		</section>
	</div>
</template>

<script>
	import axios from "axios";
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //全局更改
	import qs from "qs"; //配合qs模块转化post请求的参数，记得先npm install qs
	//	Vue.prototype.$axios = axios;
	//	Vue.prototype.$qs = qs;
	import { InfiniteScroll } from 'mint-ui';

	export default {
		props: ["status"],
		data() {
			return {
				news: [],
				dataId: 0,
				page: 1,
				isSShow: false,
				rankCar: [{
						rankNavTitle: "浏览最多",
						rankNavPath: "http://120.78.219.201/m/api/rank/scan/"
					},
					{
						rankNavTitle: "评论最多",
						rankNavPath: "http://120.78.219.201/m/api/rank/comment/"
					},
					{
						rankNavTitle: "精彩推荐",
						rankNavPath: "http://120.78.219.201/m/api/bigshot/"
					},
					{
						rankNavTitle: "最新发布",
						rankNavPath: "http://120.78.219.201/m/api/rank/time/"
					}
				],
				rankNavTitleShow: 0,
				isRankNavPath: "http://120.78.219.201/m/api/rank/scan/",
				//最好使用状态码，中文容易混淆
				ShowTitle: "浏览最多"
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
						url: this.isRankNavPath, //获取仓库当前的clubCarPath值，进行页面加载
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
			goDetail([idIndex, dataTitle]) { //配合点击事件，跳转详情页
				this.dataId = idIndex
				this.$router.push({
					name: "detail",
					query: {
						dataId: this.dataId,
						dataTitle: dataTitle
					}
				});
			},
			pageplus() { //编写方法，获取后端相应的分页值
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
			goTitleCur(index) {
				this.rankNavTitleShow = index;
				this.isRankNavPath = this.rankCar[index].rankNavPath;
				this.ShowTitle = this.rankCar[index].rankNavTitle;
			}
		},
		mounted() { //声明周期的一种状态
			this.loadMore();
		},
		watch: {
			isRankNavPath: function() {
				this.news = [];
				this.loadMore();
			}
		}
	}
</script>

<style>
	.ssshow {
		display: none;
	}
</style>