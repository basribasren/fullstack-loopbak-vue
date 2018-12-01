// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

module.exports = function(app) {
  var User = app.models.account;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  User.create(
    [
      {
        username: "admin",
        email: "admin@gmail.com",
        password: "admin",
        realm: "admin"
      }
    ],
    function(err, users) {
      if (err) {
        return err;
      } else {
        Role.create(
          {
            name: "admin"
          },
          function(err, role) {
            if (err) {
              return err;
            } else {
              role.principals.create(
                {
                  principalType: RoleMapping.USER,
                  principalId: users[0].id
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
      }
    }
  );
};
