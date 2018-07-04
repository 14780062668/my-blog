<template>
	<div>
		<list />
		<sidebar />
	</div>
</template>
<script>
import List from './component/List.vue';
import Sidebar from './component/Sidebar.vue';
export default {
	components: {
		List,
		Sidebar
	}
};
</script>
