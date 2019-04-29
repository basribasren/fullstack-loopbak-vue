<template>
	<v-toolbar color="amber" 
		app 
		:dense="custom.dense"
		:flat="custom.flat"
		:clipped-left="custom.clipped"
	>
		<v-toolbar-side-icon 
			v-if="custom.type !== 'permanent'"
			v-on:click="toogleHeader"
		>
		</v-toolbar-side-icon>
		<span class="title ml-3 mr-5">Radio&nbsp;
			<span class="font-weight-light">Keep</span>
		</span>

		<v-spacer></v-spacer>
		<v-text-field
			solo-inverted
			flat
			hide-details
			label="Search"
			prepend-inner-icon="search"
		></v-text-field>

		<v-spacer></v-spacer>
		<v-btn icon>
			<v-icon>refresh</v-icon>
		</v-btn>
		<v-btn icon>
			<v-icon>more_vert</v-icon>
		</v-btn>
	</v-toolbar>
</template>

<script>
export default {
	name: 'Header',
	props: {
		custom: {
			type: Object,
			default: () => {},
		}
	},
	methods: {
		toogleHeader () {
			this.$emit('toogleSidebar')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
