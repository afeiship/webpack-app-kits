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
