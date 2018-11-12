<template>
	<div>
		<section class="post_det">
			<div class="ban" v-html='`<img src="${newData.coverimg}" />`'>

			</div>
			<div class="det">
				<h3>{{newData.title}}</h3>
				<a class="tip" href="#">{{newData.club}}</a>
				<div class="userBox clearfix">
					<a class="img fl" href="#" v-html='`<img src="${newData.coverimg}" />`'>

					</a>
					<div class="fl">
						<a class="name" href="#">{{newData.author}}</a>
						<p class="timer">{{newData.dateline}}</p>
					</div>
					<a class="gz_btn off" href="j#" data-id="1009741">关注TA</a>
				</div>
				<div class="info">
					<p v-html='`${newData.text}`'></p>
					<div class="det_box" v-for="(nn,index) in textImg" @click="setImgArr(index)">
						<div class="imgBox" v-html='`<img src="${nn}" >`'></div>
					</div>
					<!--<p :class="{isTexttwo:newData.texttwo===null}" v-html='`${newData.texttwo}`'></p>-->
				</div>
				<!--dsfafs-->
				<div class="zan_box">
					<a class="zan_btn" href="#" data-pid="13797691" data-type="like">
						<i class="icon_bbs icon_zan01"></i>
						<em>赞</em>
						<span class="num">{{newData.like_num}}</span>
					</a>
				</div>

				<div class="xg_time clearfix">
					<span class="fl">于{{newData.dateline}}修改</span>
					<div class="report_b fr">
						<img class="more" src="http://icon.cheshi-img.com/app/bbs/more.png">
						<div class="report_box" style="width: 1rem;">
							<a class="modify" href="http://bbs.cheshi.com/m/pthread/?type=editor&amp;tid=5187396" style="display: none;">修改&nbsp;&nbsp;&nbsp;</a>
							<a class="report" href="#" data-pid="13797691" data-mark="1">举报</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="b_gray"></div>
		<section class="pl_box pl_addList" v-show="commentArr!='123'">
			<p class="title">最新评论</p>
			<div class="pl_det" v-for="co in commentArr">
				<div class="pl_list">
					<div class="pl_top clearfix">
						<a class="user" href="http://bbs.cheshi.com/m/space/1038118"><img src="http://img.cheshi-img.com/userphoto/photocover/1038100/1038118/ea71399087d99292.jpg!img.123x123"><span class="name" v-text="co.author"></span></a><span class="report_tip" href="#"><em></em><em></em><em></em>
							<a class="report" href="#" data-mark="2">举报</a></span>
						<a class="zan" href="#"  data-type="like"><i class="icon_bbs icon_zan02"></i>&nbsp;<span class="num">0</span></a>
					</div>
					<div class="pl_info" v-text="co.content"></div>
					<div class="pl_bottom"><span class="timer" v-text="co.dateline"></span>
						<a class="reply" href="#"  data-mark="0">回复</a>
					</div>
				</div>

			</div>
			<div class="pl_all">
				<a href="http://bbs.cheshi.com/m/thread/comments/5187396">
					查看全部<span>(145)</span>条评论
				</a>
			</div>
		</section>
		<div class="b_gray"></div>
		<section class="relevant">
			<h3 class="title">相关推荐</h3>
			<div class="rel_box">
				<div class="rank_list clearfix">
					<div class="rank_txt fl">
						<a class="h3" href="http://bbs.cheshi.com/m/thread/5189942.html">和凯美瑞一起感受让子弹飞的霸气——参观梅家大院</a>
						<p class="clearfix">
							<a class="user" href="http://bbs.cheshi.com/m/space/1050100"><img src="http://img.cheshi-img.com/userphoto/photocover/1050100//1050100/3dc0f684230aeab5.jpg">&nbsp;谁都偷不走真</a><span class="fr"><i class="icon_bbs icon_pl03"></i>&nbsp;19</span></p>
					</div>
					<div class="rank_img fr">
						<a href="http://bbs.cheshi.com/m/thread/5189942.html"><img src="http://bbs.cheshi-img.com/forum/201811/4/lzvyml7q98.jpg!img.425x240"></a>
					</div>
				</div>
				<div class="rank_list clearfix">
					<div class="rank_txt fl">
						<a class="h3" href="http://bbs.cheshi.com/m/thread/5189925.html">带上我的八代凯美瑞双擎，勇闯港珠澳大桥</a>
						<p class="clearfix">
							<a class="user" href="http://bbs.cheshi.com/m/space/1050098"><img src="http://img.cheshi-img.com/userphoto/photocover/1050000//1050098/83cf1bce95563a25.jpg">&nbsp;夜独宿在空</a><span class="fr"><i class="icon_bbs icon_pl03"></i>&nbsp;12</span></p>
					</div>
					<div class="rank_img fr">
						<a href="http://bbs.cheshi.com/m/thread/5189925.html"><img src="http://bbs.cheshi-img.com/forum/201811/4/5g4ovamz2u.jpg!img.425x240"></a>
					</div>
				</div>
				<div class="rank_list clearfix">
					<div class="rank_txt fl">
						<a class="h3" href="http://bbs.cheshi.com/m/thread/5189818.html">【正能量分享】提CRV10日作业</a>
						<p class="clearfix">
							<a class="user" href="http://bbs.cheshi.com/m/space/1002263"><img src="http://icon.cheshi-img.com/webapp/mobile/head_default.png">&nbsp;早早坐前</a><span class="fr"><i class="icon_bbs icon_pl03"></i>&nbsp;0</span></p>
					</div>
					<div class="rank_img fr">
						<a href="http://bbs.cheshi.com/m/thread/5189818.html"><img src="http://bbs.cheshi-img.com/forum/201811/2/vqqi5bkb9l.jpg!img.425x240"></a>
					</div>
				</div>
			</div>
		</section>
		<section class="replyArt submit_box">
			<div class="submit_cont">
				<a class="reply" href="#" data-pid="13797691" data-mark="2">我来发表评论...</a>

				<a class="pl" href="http://bbs.cheshi.com/m/thread/comments/5187396">
					<i class="icon_bbs icon_pl01"></i>
					<em class="num">145</em>
				</a>
				<a class="collect" href="#" data-pid="13797691" data-type="favorite">
					<i class="icon_bbs icon_sc"></i>
				</a>
				<a class="share" href="#">
					<i class="icon_bbs icon_share01"></i>
				</a>
			</div>
		</section>
		<Gimgshow />
	</div>
</template>

<script>
	import Gimgshow from "../components/Gimgshow.vue";
	import axios from "axios";
	axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //全局更改
	import qs from "qs"; //配合qs模块转化post请求的参数，记得先npm install qs
	//	Vue.prototype.$axios = axios;
	//	Vue.prototype.$qs = qs;
	export default {
		components: {
			Gimgshow
		},
		data() {
			return {
				dataIdd: 0,
				newData: {},
				textImg: [],
				commentArr: []
			}
		},
		methods: {
			loadMore() {
				let dataUrl = 'http://120.78.219.201/m/api/news/' + this.$route.query.dataId + ''
				axios
					.get(dataUrl)
					.then((response) => {
						this.newData = response.data.result;
						//匹配正则，将后端穿过来的单引号字符串转换成双引号，以方便JSON字符串操作
						let textImgArr = response.data.result.img_list.replace(/'/g, '"');
						//let textArr = response.data.result.text.replace(/'/g, '"');
						this.textImg = JSON.parse(textImgArr);
						console.log(dataUrl);
					})
					.catch((error) => {
						//console.log(error);
					});
			},
			getcommentArr() {
				let commentData = qs.stringify({
					news_id:this.$route.query.dataId
				});
				axios({
						method: 'post',
						url:"http://120.78.219.201/m/api/comment/new/", //获取仓库当前的clubCarPath值，进行页面加载
						data: commentData
					})
					.then((response) => {
						//console.log(response.data.result);
						//使用数组合并的方法来添加数据
						//es6的数组扩展方法
						this.commentArr = response.data.result;
						if(response.data.result.length<=0){
							this.commentArr=123
						}
					})
					.catch((error) => {
						//console.log(error);
					});
			},
			setImgArr(index){
				this.$store.dispatch("setimgshowObj", {
					isimgshow:true,
					imgshowArr:this.textImg,
					imgshowIndex:index
					
				})
			}
		},
		created() {
			this.loadMore();
			this.getcommentArr();
			//使data里面的id等于从另外一个路由传过来的id
			this.dataIdd = this.$route.query.dataId
		}
	}
</script>

<style>
	.isTexttwo {
		display: none;
	}
</style>