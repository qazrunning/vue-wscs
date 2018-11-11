<template>
	<div>
		<section class="banner">
			<div class="swiper-container home_ban swiper-container-horizontal swiper-container-ios">
				<div class="swiper-wrapper" id="Gslider">
					<div class="swiper-slide" v-for="(src,index) in imgSrc" :key="index" :class="{isplayshow:index===isImgShow,isshowGG:index != isImgShow}">
						<a @click="goDetail([src.news_id,src.title])"><img :src="src.coverimg" style="height: 130px;"/></a>
					</div>
				</div>

				</div>
			<ul class="changeList clearfix">
				<li>
					<a href="#">
						<i class="icon_bbs icon_car"></i>
						<p>
							<font>
								<font>车系</font>
							</font>
						</p>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="icon_bbs icon_live"></i>
						<p>
							<font>
								<font>生活</font>
							</font>
						</p>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="icon_bbs icon_hot"></i>
						<p>
							<font>
								<font>热门</font>
							</font>
						</p>
					</a>
				</li>
			</ul>
		</section>
		<div class="b_gray"></div>
	</div>
</template>

<script>
	import axios from "axios";
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //全局更改
	import qs from "qs"; //配合qs模块转化post请求的参数，记得先npm install qs
	//	Vue.prototype.$axios = axios;
	//	Vue.prototype.$qs = qs;
	import { Swipe, SwipeItem } from 'mint-ui';
	export default {
		data() {
			return {
				imgSrc: [],
				isImgShow:0
			}
		},
		methods: {
			plusImg(){
					setInterval(()=>{
					this.isImgShow += 1; 
				},3000)
			},
			loadMore() {
				let postData = qs.stringify({
					page: 4,
					limit: 6
				});
				axios({
						method: 'post',
						url: "http://120.78.219.201/m/api/bigshot/",//获取仓库当前的clubCarPath值，进行页面加载
						data: postData
					})
					.then((response) => {
						console.log(response.data.result);
						//使用数组合并的方法来添加数据
						//es6的数组扩展方法
						this.imgSrc = response.data.result
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
		},
		watch:{
			isImgShow:function(){
				if(this.isImgShow >= 5){
					this.isImgShow = 0;
				}
			}
		},
		mounted() {
			this.plusImg();
			this.loadMore()
		}
	}
</script>

<style scoped>
	.isshowGG{
		display: none;
	}
	.isplayshow{
		display: block;
	}
</style>