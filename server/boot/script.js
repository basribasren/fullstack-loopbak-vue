// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0
const Promise = require('promise')

module.exports = function(app) {
	const User = app.models.account
	const Role = app.models.Role
	const RoleMapping = app.models.RoleMapping

	const accounts = [
		{
			username: 'kasir',
			email: 'kasir@gmail.com',
			password: 'kasir',
			realm: 'kasir'
		},
		{
			username: 'pelayan',
			email: 'pelayan@gmail.com',
			password: 'pelayan',
			realm: 'pelayan'
		}
	]

	return new Promise((resolve, reject) => {
		accounts.map(account => {
			User.create(account)
				.then(users => {
					Role.create({ name: users.realm }, (err, role) =>{
						if (err) reject(console.log('ERROR: '+err.name))
							
						return role.principals.create({
							principalType: RoleMapping.USER,
							principalId: users.id
						})
					})
				})
				.then(() => {
					resolve(console.log('Initial account have been create'))
				})
				.catch(err => {
					reject(console.log('ERROR: '+err.name))
				})
		})
	})
}
