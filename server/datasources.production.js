// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = {
	db:{
		name: 'db',
		connector: 'memory'
	},
	mongodb: {
		connector: 'mongodb',
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		url: process.env.DB_URL,
		database: process.env.DB_NAME,
		name: process.env.DB_VENDOR,
		user: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD
	}
}
