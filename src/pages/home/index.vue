<template>
	<div>
		<search />
		<list />
		<sidebar />
	</div>
</template>
<script>
import Search from '../../common/components/Search.vue';
import List from './component/List.vue';
import Sidebar from './component/Sidebar.vue';
export default {
	components: {
		Search,
		List,
		Sidebar
	},
	data() {
		return {
		};
	}
};
</script>
