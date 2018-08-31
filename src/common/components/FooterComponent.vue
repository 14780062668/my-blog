<template>
		<footer id="footer">Copyright ©{{year}} {{$store.state.name}}</footer>
</template>
<script>
export default {
	data() {
		return {
			year: new Date().getFullYear()
		};
	}
};
</script>
