<template>
	<div>
		<Gheader status="detail" />
		<GdetailMain />
	</div>

</template>

<script>
	import Gheader from "../components/Gheader.vue";
	import GdetailMain from "../components/GdetailMain.vue";
	export default {
		components: {
			Gheader,
			GdetailMain
		}
	};
</script>

<style>

</style>