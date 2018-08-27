<template>
	<div id="app">
		<header-component />
		<router-view/>
		<footer-component />
	</div>
</template>
<script>
import HeaderComponent from '@/common/components/HeaderComponent.vue';
import FooterComponent from '@/common/components/FooterComponent.vue';
export default {
	name: 'App',
	components: {
		HeaderComponent,
		FooterComponent
	}
};
</script>
