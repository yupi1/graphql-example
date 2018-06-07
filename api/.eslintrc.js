module.exports = {
    "extends": "airbnb-base",
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
        "camelcase": [2],
		"quotes": [2, "single"],
		"semi": [2],
		"curly": [2],
		"no-console": [0],
		"no-undef": [0],
		"eol-last": [0],
		"linebreak-style": [0],
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
    },
    "plugins": [
        "import"
    ]
};