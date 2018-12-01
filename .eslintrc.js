module.exports = {
	parser: "babel-eslint",
	extends: ["loopback", "eslint:recommended", "plugin:prettier/recommended"],
	plugins: ["prettier"],
	env: {
		es6: true,
		browser: true,
		node: true
	},
	rules: {
		"prettier/prettier": "off",
		"no-console": 0,
		"no-unused-vars": 0
	}
};
