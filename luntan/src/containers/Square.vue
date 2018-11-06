<template>
	<div>
		<Gheader status="square"/>
		<Gsquare />
	</div>
</template>

<script>
	import Gheader from "../components/Gheader.vue";
	import Gsquare from "../components/Gsquare.vue";
	export default {
		components: {
			Gheader,
			Gsquare
		}
	};
</script>

<style>
</style>