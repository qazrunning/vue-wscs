<template>
	<div>
		<section class="look_circle" v-show="ClubCar.showClubCar">
			<div class="close_circle">
				<a class="close" @click="closeCar">
					<font>
						<font>X</font>
					</font>
				</a>
			</div>
			<div class="ullist ullist-50 ullist_look">
				<a class="cur">
					<font>
						<font>生活圈</font>
					</font>
				</a>
				<a>
					<font>
						<font>车友圈</font>
					</font>
				</a>
			</div>
			<div class="look_cont">
				<ul>
					<li v-for="bb in clubCar">
						<a class="name fl" @click="closeClubCar(bb.clubPath)">
							<font>
								<font>{{bb.clubname}}</font>
							</font>
						</a>
					</li>
				</ul>
			</div>
			<dl class="pySide" style="display: none;"></dl>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				clubCar: [{
						clubname: "游记",
						clubPath: "http://120.78.219.201/m/api/travel/"
					},
					{
						clubname: "车友随手拍",
						clubPath: "http://120.78.219.201/m/api/carfriend/"
					},
					{
						clubname: "摄影大咖",
						clubPath: "http://120.78.219.201/m/api/bigshot/"
					}
				],
				Carpath:"http://120.78.219.201/m/api/travel/"
			}
		},
		computed: { //获取仓库信息，用函数接收一个对象。可以当做data里面的数据直接使用
			ClubCar:function() {
				return this.$store.getters.getClubCar;
			}
		},
		watch:{
			ClubCar:function(a,b){//监听vuex仓库Carpath变化之前的属性
			//console.log(a.clubPath,b.clubPath)
			if(b.clubPath!=undefined){
				this.Carpath = b.clubPath;
			}
			}
		},
		methods: {
			closeClubCar(path) {//点击选择Club时，要执行的函数，把相应的Path传给vuex仓库
				this.$store.dispatch("setClubCar", {
					showClubCar: false,
					clubPath: path
				})
			},
			closeCar() {//点击关掉ClubCar时，要执行的函数
				this.$store.dispatch("setClubCar", {
					showClubCar: false,
					clubPath: this.Carpath
				})
			}
		}
	}
</script>

<style>

</style>