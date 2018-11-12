"use strict";

require("dotenv").config();
var loopback = require("loopback");
var boot = require("loopback-boot");
var morgan = require("morgan");
var compression = require("compression");

var app = (module.exports = loopback());

app.middleware("initial", compression());
app.middleware("routes:before", morgan("dev"));

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit("started");
    var rootPath = app.get("url").replace(/\/$/, "");
    console.log("Web server listening at: %s", rootPath);

    if (app.get("loopback-component-explorer")) {
      var explorerPath = app.get("loopback-component-explorer").mountPath;
      console.log("Browse your REST API at %s%s", rootPath, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});
