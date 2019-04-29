<template>
	<v-content>
		<v-container fluid fill-height class="grey lighten-4">
			<v-layout row wrap>
				<v-flex grow xs12>
					<router-view></router-view>
				</v-flex>
			</v-layout>
		</v-container>
	</v-content>
</template>

<script>
export default {
	name: 'Content'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
