<template>
	<v-app>
		<v-navigation-drawer
			v-model="drawer"
			:permanent="customSidebar.type === 'permanent'"
			:temporary="customSidebar.type === 'temporary'"
			:clipped="customSidebar.clipped"
			:mini-variant="customSidebar.mini"
			fixed
			class="grey lighten-4"
			app
		>
			<app-sidebar
				:isAuthentication="isAuthentication"
			></app-sidebar>
		</v-navigation-drawer>		
		<app-header 
			:isAuthentication="isAuthentication"
			:custom="customSidebar"
			@toogleSidebar="toogleSidebar"
		>    
		</app-header>
		<app-content></app-content>
		<app-footer :inset="inset"></app-footer>
	</v-app>
</template>

<script>
import Header from '@/components/Layout/Header.vue'
import Sidebar from '@/components/Layout/Sidebar.vue'
import Content from '@/components/Layout/Content.vue'
import Footer from '@/components/Layout/Footer.vue'

export default {
	name: 'App',
	components:{
		'app-header': Header,
		'app-sidebar': Sidebar,
		'app-content': Content,
		'app-footer': Footer
	},
	data: () => ({
		drawer: false,
		drawers: ['Default (no property)', 'Permanent', 'Temporary'],
		customSidebar: {
			type: 'Default (no property)',
			clipped: true,
			mini: false,
			dense: false,
			flat: false
		},
		inset: true,
		isAuthentication: false
	}),
	methods: {
		toogleSidebar: function() {
			return this.drawer = !this.drawer
		}
	}
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
