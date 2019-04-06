# optimization
> optimization config.

## usage
```js
import { plugins, configs } from 'webpack-app-kits';

// ...
optimization: configs.optimization()
// ...
```

## default
```js
{
  splitChunks: {
    cacheGroups: {
      commons: {
        chunks: "initial",
        minChunks: 2,
        name: "commons",
        enforce: true
      }
    }
  }
}
```
