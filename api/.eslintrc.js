module.exports = {
    "extends": [
		"airbnb-base",
		"prettier",
	],
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "parserOptions": {
		"ecmaVersion": 2017,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
			"experimentalObjectRestSpread": true
		}
	},
    "rules": {
        "camelcase": 2,
		"quotes": [
			2, 
			"single",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true,
			}
		],
		"curly": 2,
		"no-console": 0,
		"no-undef": 0,
		"eol-last": 0,
		"linebreak-style": 0,
		"func-names": 0,
		"max-len": 0,
		"consistent-return": 0,
		"object-curly-spacing": [2, "always"],
		"array-bracket-spacing": [
			2,
			"always",
			{
				"arraysInArrays": false,
				"objectsInArrays": false
			}
		],
		"block-spacing": [2, "always"],
		"prettier/prettier": [
			"error",
			{
			  "trailingComma": "es5",
			  "singleQuote": true,
			}
		],
	},
    "plugins": [
		"import",
		"prettier",
    ]
};