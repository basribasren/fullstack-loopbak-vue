<template>
	<v-list dense class="grey lighten-4">
		<template v-for="(item, i) in items">
			<v-layout
				v-if="item.heading"
				:key="i"
				row
				align-center
			>
				<v-flex xs6>
					<v-subheader v-if="item.heading">
						{{ item.heading }}
					</v-subheader>
				</v-flex>
				<v-flex xs6 class="text-xs-right">
					<v-btn small flat>edit</v-btn>
				</v-flex>
			</v-layout>
			<v-divider
				v-else-if="item.divider"
				:key="i"
				dark
				class="my-3"
			></v-divider>
			<v-list-tile
				v-else
				:key="i"
				:to="item.to"
				@click=""
			>
				<v-list-tile-action>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-tile-action>
				<v-list-tile-content>
					<v-list-tile-title class="grey--text">
						{{ item.text }}
					</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</template>
	</v-list>
</template>

<script>
const LinkPublic = [
	{ to: '/', icon: 'lock', text: 'Login' },
]
const LinkAdmin = [
	{ to: '/home', icon: 'lightbulb_outline', text: 'Home' },
	{ to: '/about', icon: 'touch_app', text: 'About' },
	{ divider: true },
	{ heading: 'Labels' },
	{ icon: 'add', text: 'Create new label' },
]
const LinkGuest = [
	{ divider: true },
	{ icon: 'archive', text: 'Archive' },
	{ icon: 'delete', text: 'Trash' },
	{ divider: true },
	{ icon: 'settings', text: 'Settings' },
	{ icon: 'chat_bubble', text: 'Trash' },
	{ icon: 'help', text: 'Help' },
	{ icon: 'phonelink', text: 'App downloads' },
]
export default {
	name: 'Sidebar',
	props: {
		isAuthentication: {
			type: Boolean,
			default: false,
		}
	},
	data: () => ({
		items: [
			{ to: '/', icon: 'lock', text: 'Login' },
		]
	}),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
