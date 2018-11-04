<template>
	<div>
		<Gheader status="home"/>
		<Glunbotu />
		<Gmain/>
	</div>
</template>

<script>
	import Gheader from "../components/Gheader.vue";
	import Glunbotu from "../components/Glunbotu.vue";
	import Gmain from "../components/Gmain.vue";
	export default {
		components: {
			Gheader,
			Glunbotu,
			Gmain
		}
	};
</script>

<style scoped>
@import url("../assets/index.css");
</style>