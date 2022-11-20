module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{jpg,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};