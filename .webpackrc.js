const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  externals: {
    '@antv/data-set': 'DataSet',
    rollbar: 'rollbar',
  },
  alias: {
    common: path.resolve(__dirname, 'src/common/'),
    components: path.resolve(__dirname, 'src/components/'),
    layout: path.resolve(__dirname, 'src/layout/'),
    routes: path.resolve(__dirname, 'src/routes/'),
    services: path.resolve(__dirname, 'src/services/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    '@': path.resolve(__dirname, 'src/'),
  },
  ignoreMomentLocale: true,
  theme: './src/theme.js',
  html: {
    template: './src/index.ejs',
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
  proxy: {
    "/test": {
      "target": "https://api.douban.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/test" : "" }
    }
  },
};
