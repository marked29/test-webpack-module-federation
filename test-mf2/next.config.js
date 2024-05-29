const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
	webpack(config, options) {
		const { webpack } = options;
		const { isServer } = options;
		config.plugins.push(
			new NextFederationPlugin({
				name: 'test',
				remotes: {
					hub: `hub@http://localhost:3000/_next/static/${
						isServer ? 'ssr' : 'chunks'
					}/remoteEntry.js`,
				},
				filename: 'static/chunks/remoteEntry.js',
				exposes: {
					'./alertButton': './components/alert-button',
				},
				extraOptions: {
					debug: true,
				}
			}),
		);
		return config;
	},
};
