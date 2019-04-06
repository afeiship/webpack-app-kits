# dev-server
> Dev server settings.

## usage
```js
// webpack.dev.js
import { plugins, configs } from 'webpack-app-kits';
// ...
devServer: configs.devServer({
  port: 3009,
  proxy: {
    '/api': {
      target: 'http://120.27.13.225:80',
      changeOrigin: true
    }
  }
})
// ...
```

## default
```js
{
  watchOptions: {
    ignored: /node_modules/
  },
  contentBase: [resolve(__dirname, 'dist'), resolve(__dirname, 'node_modules')],
  hotOnly: true,
  hot: true,
  host: '0.0.0.0',
  stats: 'errors-only',
  compress: true,
  historyApiFallback: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}
```

