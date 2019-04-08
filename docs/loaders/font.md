# font
> For iconfont.

## usage
```js
module: {
  rules: nx.flatten([
    loaders.font(),
    // ...
  ])
}
```

## default
```js
{
  test: /\.(woff|eot|ttf)\??.*$/,
  loader: 'url-loader',
  options: {
    name: 'assets/fonts/[name]-[hash:4].[ext]',
    limit: 8192
  }
}
```
