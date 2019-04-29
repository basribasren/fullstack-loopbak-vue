'use strict'

module.exports = function(Account) {
	const Promise = require('promise')
	let Role
	let RoleMapping
	Account.on('attached', function(app) {
		Role = app.models.Role
		RoleMapping = app.models.RoleMapping
	})
	Account.observe('after save', function(ctx, next) {
		new Promise((resolve, reject) => {
			Role.find({ where: { name: ctx.instance.realm } })
				.then(role => {
					return RoleMapping.create({
						principalType: RoleMapping.USER,
						principalId: ctx.instance.id,
						roleId: role[0].id
					})
				})
				.then(() => {
					resolve(console.log('Initial account have been create'))
				})
				.catch(err => {
					reject(console.log('ERROR: ' + err.name))
				})
		})
		next()
	})
}
