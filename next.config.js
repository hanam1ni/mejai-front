var path = require('path');

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    config.module.rules.push({
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      })
    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}