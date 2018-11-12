module.exports = {
	extends: ["loopback", "plugin:prettier/recommended"],
	plugins: ["prettier"],
	env: {
		browser: true,
		node: true
	},
	rules: {
		"object-shorthand": 0,
		"arrow-body-style": 1,
		"linebreak-style": 0,
		"func-names": 0,
		"no-console": 0,
		"no-use-before-define": 0,
		"no-param-reassign": 0,
		"no-var": 0,
		"no-unused-expressions": 1,
		"no-unused-vars": 1,
		"no-undef": 1,
		"prettier/prettier": "off"
	}
};
