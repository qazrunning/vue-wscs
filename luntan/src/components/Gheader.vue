<template>
	<div>
		<section class="header_top">

			<a class="go_back" @click="goback"></a>

			<div class="b_txt" v-if="status==='home'">
				<img src="http://icon.cheshi-img.com/app/bbs/b_logo.png" alt="">
			</div>
			<div class="b_txt" v-if="status==='search'">
				<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">搜索</font></font></span>
			</div>
			<div class="b_txt" v-if="status==='detail'">
				<span>{{dataTitle}}</span>
			</div>
			<div class="b_txt" v-if="status==='square'">
				<span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">话题广场</font></font></span>
			</div>
			<div class="b_r">
				<a class="icon_bbs icon_search02" href="#/search"></a>
				<a class="user" href="#/login">
					<img src="http://icon.cheshi-img.com/app/bbs/Group.png" alt="">
				</a>
			</div>
		</section>
		<header class="header" v-if="status=='home'">
			<section class="ullist ullist-33">
				<a :class="{cur:isnavShow===index}" v-for="(nt,index) in navs" @click="navshow(index)">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;" v-text="nt.navTitle"></font>
					</font>
				</a>

			</section>
			<a class="icon_bbs icon_search" href="#"></a>
		</header>

		<section class="sideB">
			<a class="write_btn" href="">
				<img src="http://icon.cheshi-img.com/app/bbs/postbbs.png" alt="">
			</a>
			<a class="gotop" @click="backTop">
				<img src="http://icon.cheshi-img.com/app/bbs/gotop.png" alt="">
			</a>
		</section>
	</div>

</template>

<script>
	export default {
		props: ["status"],
		data() {
			return {
				navs: [{
						navTitle: "论坛",
						navPath: "forum"
					},
					{
						navTitle: "圈子",
						navPath: "club"
					}, {
						navTitle: "排行",
						navPath: "rank"
					}
				],
				isnavShow: 0,
				dataTitle: ""
			}
		},
		methods: {
			navshow(navShow) {
				this.isnavShow = navShow;
				this.$router.push({
					name: this.navs[navShow].navPath
				});

			},
			goback() {
				this.$router.push({
					name: "forum"
				})
			},
			selectss() {
				var route = this.$route.path;
				switch(route) {
					case "/home/forum":
						this.isnavShow = 0;
						break;
					case "/home/club":
						this.isnavShow = 1;
						break;
					case "/home/rank":
						this.isnavShow = 2;
						break;
					default:
						this.isnavShow = 0;
				}
			},
			backTop() {
				let timer = setInterval(function() {
					let ost = document.body.scrollTop || document.documentElement.scrollTop;
					let btopspeed = Math.floor(-ost / 5);
					document.documentElement.scrollTop = document.body.scrollTop = ost + btopspeed;
					if(ost <= 300) {
						document.body.scrollTop = 0
						document.documentElement.scrollTop = 0
						clearInterval(timer)
					}
				}, 30)

			}
		},
		watch: { //监听路由变化，执行相应的数值改变
			$route() {
				this.selectss();
			}
		},
		mounted() {
			this.selectss();
			this.dataTitle = this.$route.query.dataTitle
		}
	};
</script>

<style scoped>
	@import url("../assets/index.css");
	html {
		font-size: 50px;
	}
</style>