module.exports = {
	"parser": "vue-eslint-parser",
	"extends": [
        "loopback", 
        "plugin:vue/recommended",
        "eslint:recommended", 
        "plugin:prettier/recommended"
    ],
	"plugins": ["prettier", "vue"],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "rules": {
        "no-use-before-define": 0,
        "no-param-reassign": 0,
        "no-var": 0,
        "no-unused-expressions": 0,
        "no-unused-vars": 0,
        "no-undef": 0,
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "arrow-body-style": 0,
        "prettier/prettier": "off",
    }
};
