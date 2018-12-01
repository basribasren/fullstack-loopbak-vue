"use strict";

module.exports = function(Account) {
	let Role;
	let RoleMapping;

	Account.on("attached", function(app) {
		Role = app.models.Role;
		RoleMapping = app.models.RoleMapping;
		// perform any setup that requires the app object
	});
	Account.observe("after save", function(ctx, next) {
		//create the admin role
		// Role.find({where: {name: ctx.instance.realm}}, function(err, role) {
		Role.create(
			{
				name: ctx.instance.realm
			},
			function(err, role) {
				if (err) {
					return err;
				} else {
					role.principals.create(
						{
							principalType: RoleMapping.USER,
							principalId: ctx.instance.id
						},
						function(err, principal) {
							if (err) {
								return err;
							} else {
								return principal;
							}
						}
					);
				}
			}
		);
		next();
	});
};
