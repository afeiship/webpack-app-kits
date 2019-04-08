# dll
> 这个是防止编译过慢，把文件单独打包，加快打包速度。

## usage
```js
import { vendors } from './config';
import { loaders, plugins, configs, inputs, outputs } from 'webpack-app-kits';

export default (inEnv) => {
  const NODE_ENV = process.env.NODE_ENV;
  return {
    mode: NODE_ENV,
    entry: inputs.dll({ vendors }),
    output: outputs.dll(),
    plugins: [plugins.dll()]
  };
};
```
