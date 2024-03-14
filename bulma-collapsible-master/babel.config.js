module.exports = {
	'sourceMaps': false,
	'ignore': ['node_modules/**'],
	'presets': [
		'@babel/preset-env'
	],
	'plugins': [
		'@babel/plugin-transform-runtime',
		'@babel/plugin-proposal-object-rest-spread'
	]
};