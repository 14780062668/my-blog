<template>
	<div>
		<search />
		<list :tagId="$route.params.tagId" />
		<sidebar />
	</div>
</template>
<script>
import Search from '../../common/components/Search.vue';
import List from '../home/component/List.vue';
import Sidebar from '../home/component/Sidebar.vue';
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
