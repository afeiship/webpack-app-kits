# extensions
> Default resolve extensions.

## usage
```js
import { plugins, configs } from 'webpack-app-kits';
// ...
resolve: { extensions: configs.extensions() },
// ...
```

## default
```js
['.js', '.json', '.scss', '.css']
```
