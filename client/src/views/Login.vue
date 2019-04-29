<template>
	<v-layout justify-center>
		<v-flex xs12 sm6>
			<v-card>
				<v-card-title primary-title>
					<h3 class="headline mb-0">Login</h3>
				</v-card-title>
				<v-form ref="form" v-model="valid" lazy-validation class="center--form">
					<v-text-field v-model="name" 
						:rules="nameRules" 
						label="Name" 
						required></v-text-field>
					<v-text-field v-model="email" 
						:rules="emailRules" 
						label="E-mail" 
						required></v-text-field>
					<v-select v-model="select" 
						:items="role"
						:rules="[v => !!v || 'Role is required']" 
						label="Role" 
						required></v-select>
					<v-checkbox v-model="checkbox" 
						:rules="[v => !!v || 'You must agree to continue!']" 
						label="Do you agree?" 
						required></v-checkbox>
					<v-btn :disabled="!valid" color="info" @click="validate">
						Login
					</v-btn>
				</v-form>
			</v-card>
	    </v-flex>
	</v-layout>
</template>
<script>
export default {
	data: () => ({
		valid: true,
		name: '',
		nameRules: [
			v => !!v || 'Name is required',
			v => (v && v.length <= 10) || 'Name must be less than 10 characters'
		],
		email: '',
		emailRules: [
			v => !!v || 'E-mail is required',
			v => /.+@.+/.test(v) || 'E-mail must be valid'
		],
		select: null,
		role: [
			'Admin',
			'Guest',
		],
		checkbox: false
	}),

	methods: {
		validate() {
			if (this.$refs.form.validate()) {
				this.snackbar = true
			}
		},
		reset() {
			this.$refs.form.reset()
		},
		resetValidation() {
			this.$refs.form.resetValidation()
		}
	}
}

</script>
<style scoped>
.center--form {
	align-items: center;
	padding: 0px 20px 0px 20px;
}
</style>
