<template>
	<div>
		<section class="topic"v-if="status==='htgc'">
			<h3 class="title"><font ><font >
			话题今日
			 </font></font><a class="more" href="http://bbs.cheshi.com/m/topic/list"><font ><font >话题广场</font></font></a>
		</h3>
			<div class="topic_info">
				<a class="img" href="http://bbs.cheshi.com/m/topic/list/5188640"><img src="http://bbs.cheshi-img.com/forum/bbs/ee04a44982f136fa6db02a01ddd889bf.jpg" alt=""></a><span class="topic_h"><font ><font >1400</font></font></span></div>
		</section>
		<div class="b_gray"></div>
		<section class="bbs_info">
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
								<font v-text="a.dataline"></font>
							</font>
						</p>
					</div>
				</div>
				<div class="info_txt" >
					<a @click="goDetail(index)" v-html='`<p><font><font v-text="a.title">
						</p><img src="${a.coverimg}"/>`'>
					</a>
				</div>
				<div class="info_bottom clearfix"><span class="fl"><font ><font v-text="a.club"></font></font></span>
					<div class="fr"><span><i class="icon_bbs icon_bw1"></i><font ><font >&nbsp;2050</font></font></span><span><i class="icon_bbs icon_pl03"></i><font ><font >&nbsp;62</font></font></span></div>
				</div>
			</div>

		</section>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		props: ["status"],
		data() {
			return {
				news: [],
				dataId:0
			}
		},
		methods: {
			loadMore() {
				axios
					.get("http://localhost:4567/users/getData")
					.then((response) => {
							console.log(response.data);
							this.news = response.data;
						})
						.catch((error) => {
							console.log(error);
						});
					},
					goDetail(idIndex) {
							this.dataId = idIndex
							this.$router.push({
										name:"detail",
										params: {
											dataId: this.dataId
										}
									});
								}
							},
		mounted() {
			this.loadMore();
		}
	}
</script>

<style>

</style>