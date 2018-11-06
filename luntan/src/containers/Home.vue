<template>
	<div>
		<Gheader status="home"/>
		<router-view></router-view>
	</div>
</template>

<script>
	import Gheader from "../components/Gheader.vue";
	export default {
		components: {
			Gheader
		}
	};
</script>

<style scoped>
@import url("../assets/index.css");
</style>