<template>
	<div>
		<section class="header_top">

			<a class="go_back" href="#"></a>

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
				<a class="icon_bbs icon_search02" href="http://bbs.cheshi.com/m/search.php"></a>
				<a class="user" href="#">
					<img src="http://icon.cheshi-img.com/app/bbs/Group.png" alt="">
				</a>
			</div>
		</section>
		<header class="header" v-if="status=='home'">
			<section class="ullist ullist-33">
				<a class="cur" href="http://bbs.cheshi.com/m/">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">论坛</font>
					</font>
				</a>
				<a href="http://bbs.cheshi.com/m/club/">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">圈子</font>
					</font>
				</a>
				<a href="http://bbs.cheshi.com/m/rank/">
					<font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">排行</font>
					</font>
				</a>
			</section>
			<a class="icon_bbs icon_search" href="http://bbs.cheshi.com/m/search.php"></a>
		</header>
		
	</div>

</template>

<script>
	export default {
		props: ["status"]
	};
</script>

<style scoped>
	@import url("../assets/index.css");
	html {
		font-size: 50px;
	}
</style>