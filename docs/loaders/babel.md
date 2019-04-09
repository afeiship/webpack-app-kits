# babel
> Babel loader for es6/7 syntax.

## usage
```js
module: {
  rules: nx.flatten([
    loaders.babel(),
    // ...
  ])
}
```

## default
```js
{
  test: /\.(js)$/,
  use: ['babel-loader'],
  include: [
    resolve(dirname, 'src'),
    resolve(dirname, 'node_modules/mixin-decorator'),
    resolve(dirname, 'node_modules/react-dynamic-router')
  ]
}
```

## .babelrc
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    "react-hot-loader/babel",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-spread",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import"
  ]
}
```
