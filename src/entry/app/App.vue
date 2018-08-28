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
import base from '../../common/mixins/base.js';
export default {
	name: 'App',
	mixins: [base],
	components: {
		HeaderComponent,
		FooterComponent
	}
};
</script>
