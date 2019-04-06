# resolve-loader
> Make your own loader.

## usage
```js
import { plugins, configs } from 'webpack-app-kits';

// ...
resolveLoader: plugins.resoveLoader()
// ...
```

## default
```js
modules: ['./build/loaders', 'node_modules']
```
