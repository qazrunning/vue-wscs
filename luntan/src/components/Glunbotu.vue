<template>
	<div>
		<section class="banner">
			<div class="swiper-container home_ban swiper-container-horizontal swiper-container-ios">
				<div class="swiper-wrapper" id="Gslider">
					<div class="swiper-slide" v-for="(src,index) in imgSrc" :key="index" :class="{isplayshow:index===isImgShow,isshowGG:index != isImgShow}">
						<a href="#"><img :src="src"/></a>
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
	import { Swipe, SwipeItem } from 'mint-ui';
	export default {
		data() {
			return {
				imgSrc: [
					"http://bbs.cheshi-img.com/forum/bbs/c23ae3aec2f4714f50d6571657f24d5f.jpg", "http://bbs.cheshi-img.com/forum/bbs/af54857cf651bb262142c22073e5c4a0.jpg", "http://bbs.cheshi-img.com/forum/bbs/c3f0130956d2646fddbef0b6881abccd.jpg", "http://bbs.cheshi-img.com/forum/bbs/5062dcc8a7bda9dbce857d1e504f6c8c.jpg", "http://bbs.cheshi-img.com/forum/bbs/9803cefaa14b42ab4d542c1fb7ffcda3.jpg", "http://bbs.cheshi-img.com/forum/bbs/c23ae3aec2f4714f50d6571657f24d5f.jpg"
				],
				isImgShow:0
			}
		},
		methods: {
			plusImg(){
					setInterval(()=>{
					this.isImgShow += 1; 
				},3000)
				
				
			}
		},
		watch:{
			isImgShow:function(){
				if(this.isImgShow >= 5){
					this.isImgShow = 0;
				}
			}
		},
		mounted() {
			this.plusImg()
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