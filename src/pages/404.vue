<template>
	<div class="my_404">
		<template v-if="loading"></template>
		<template v-else>
			<p>404</p>
		</template>
	</div>
</template>
<script>
export default {
	data () {
		return {
			loading: true
		};
	},
	created () {
	}
};
</script>
