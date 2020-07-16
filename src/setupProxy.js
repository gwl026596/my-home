const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/nextstore-web',
    createProxyMiddleware({
      target: 'https://app.yysports.com.tw',
      changeOrigin: true,
    })
  );
};