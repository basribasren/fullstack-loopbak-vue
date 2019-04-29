<template>
	<v-footer color="amber" :inset="inset" app>
			<span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
		</v-footer>
</template>


<script>
export default {
	name: 'Footer',
	props: {
		inset: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
