<template>
	<div>
		<section class="topic" v-if="status==='htgc'">
			<h3 class="title"><font ><font >
			话题今日
			 </font></font><a class="more" href="#/square"><font ><font >话题广场</font></font></a>
		</h3>
			<div class="topic_info">
				<a class="img" href="#/square"><img src="http://bbs.cheshi-img.com/forum/bbs/ee04a44982f136fa6db02a01ddd889bf.jpg" alt=""></a><span class="topic_h"><font ><font >1400</font></font></span></div>
		</section>
		<div class="b_gray"></div>
		<section class="bbs_info" v-infinite-scroll="getMoocs" infinite-scroll-distance="10" infinite-scroll-disabled="loading">
			<div class="bbs_info_list" v-for="(a,index) in news">
				<div class="info_top clearfix">
					<a class="fl" href="#" v-html='`<img src="${a.coverimg}">`'></a>
					<div class="fl">
						<a class="user" href="#">
							<font>
								<font v-text="a.author"></font>
							</font>
						</a>
						<p class="timer">
							<font>
								<font v-text="a.dateline"></font>
							</font>
						</p>
					</div>
				</div>
				<div class="info_txt">
					<a @click="goDetail([a.news_id,a.title])" v-html='`<p><font><font v-text="a.title">
						</p><img src="${a.coverimg}"/>`'>
					</a>
				</div>
				<div class="info_bottom clearfix"><span class="fl"><font ><font v-text="a.club"></font></font></span>
					<div class="fr"><span><i class="icon_bbs icon_bw1"></i><font ><font >&nbsp;2050</font></font></span><span><i class="icon_bbs icon_pl03"></i><font ><font v-html="`&nbsp;${a.comments}`"></font></font></span></div>
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
				isSShow: false

			}
		},
		methods: {
			loadMore() {
				
				let postData = qs.stringify({
				    page:this.page,
				    limit:10
				});
				axios({
						method: 'post',
						url: 'http://120.78.219.201/m/api/bigshot/',
						data:postData
					})
					.then((response) => {
						//console.log(response.data.result);
						//使用数组合并的方法来添加数据
						//es6的数组扩展方法
						this.news = [...this.news, ...response.data.result];
					})
					.catch((error) => {
						//console.log(error);
					});
			},
			goDetail([idIndex, dataTitle]) {
				this.dataId = idIndex
				this.$router.push({
					name: "detail",
					query: {
						dataId: this.dataId,
						dataTitle: dataTitle
					}
				});
			},
			pageplus() {
				this.page++;
				this.loadMore();
			},
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
			}
		},
		created() {
			this.loadMore();
		}
	}
</script>

<style>
	#dianwo {
		height: 1rem;
		width: 100px;
		font-size: 0.6rem;
		text-align: center;
	}
	
	#dianwo img {
		height: 0.5rem;
	}
</style>