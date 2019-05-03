'use strict'

require('dotenv').config()
const path = require('path')
const loopback = require('loopback')
const boot = require('loopback-boot')

/* if want to check dotenv */
// const PORT = process.env.PORT
// const NODE_ENV = process.env.NODE_ENV
// const DB_HOST = process.env.DB_HOST

const app = (module.exports = loopback())

app.start = function() {
	// start the web server
	return app.listen(function() {
		app.emit('started')
		/* set baseurl*/
		const baseUrl = app.get('url').replace(/\/$/, '')
		console.log('Web server listening at: %s', baseUrl)
		/* set explorer path*/
		if (app.get('loopback-component-explorer')) {
			const explorerPath = app.get('loopback-component-explorer').mountPath
			console.log('Browse your REST API at %s%s', baseUrl, explorerPath)
		}
		/* console the process.env */
		// console.log('Server started on port '+PORT)
		// console.log('Server started on mode '+NODE_ENV)
		// console.log('Server started proxy '+DB_HOST)
	})
}

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
	if (err) throw err

	// start the server if `$ node server.js`
	if (require.main === module) app.start()
})
