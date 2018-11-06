<template>
	<div>
		<Gheader status="search"/>
		<Gsearch />
	</div>
</template>

<script>
	import Gheader from "../components/Gheader.vue";
	import Gsearch from "../components/Gsearch.vue";
	export default {
		components: {
			Gheader,
			Gsearch
		}
	};
</script>

<style>
	@import url("../assets/index.css");
</style>