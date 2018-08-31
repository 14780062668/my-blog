<template>
		<footer id="footer">Copyright ©{{year}} 老猿</footer>
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
