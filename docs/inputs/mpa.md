# mpa
> Multiple page applications.

## entries
```js
{
  "entries": "src/modules/**/index.js"
}
// OR
{
  "entries": [
    "src/modules/orders/index.js"
  ],
}
```

## usage
```js
import config from './config';
import { loaders, plugins, configs, inputs, outputs } from 'webpack-app-kits';
import 'next-flatten';

export default (inEnv) => {
  const type = inEnv ? inEnv.type : null;
  const mode = process.env.NODE_ENV;
  const { libs, publicPath, entries } = config[type || mode];

  return {
    entry: inputs.mpa({ entries }),
    context:__dirname,
    output: outputs.mpa({ publicPath }),
  };
};

```

## refernce
- https://github.com/afeiship/webpack-react-multipage
