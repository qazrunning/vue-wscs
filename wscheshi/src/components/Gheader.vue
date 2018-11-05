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
				<span>女青年也是老司机，我与大唐的美图诱惑</span>
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
				isnavShow:0
			}
		},
		methods:{
			navshow(navShow){
				this.isnavShow = navShow;
				this.$router.push({ name:this.navs[navShow].navPath})
			},
			goback(){
				this.$router.push({name:"forum"})
				this.isnavShow = 0;
			}
		}
	};
</script>

<style scoped>
	@import url("../assets/index.css");
	html {
		font-size: 50px;
	}
</style>