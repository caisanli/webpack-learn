module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'entry',
				corejs: '3.21.1',
			},
		],
	],
	plugins: [],
};
