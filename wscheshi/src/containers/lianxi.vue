<template>
	<div>
		<div class="post_det">
			<div class="det">
				<div class="info">
					<p>其实在买大陆之前，我还真考虑过S90，当然后来选择大陆更多的是老爸的意见，所以到现在，内心还是有点心结在。这次借着朋友的机会，也算是过了一回瘾，做了一回沃尔沃S90的车主，当然，仅仅是车子显然是没法让我和大家过瘾的，所以，我叫上了热爱宜家与“性冷淡风”的朋友，老友碰面，默契自然不用说。</p>
					<p></p>
					<div class="det_box" v-for="n in imgsrc">
						<div class="imgBox" v-html='`<img src= "${n}" />`'></div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				imgsrc:[]
			}
		},
		computed: {
			setsrc() {
				this.imgsrc = this.$store.getters.setArr;
				return this.$store.getters.setArr;
			}
		}

	}
</script>

<style>

</style>