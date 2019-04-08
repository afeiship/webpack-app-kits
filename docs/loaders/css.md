# css
> Loader for css.

## usage
```js
module: {
  rules: nx.flatten([
    loaders.css(),
    // ...
  ])
}
```

## default
```js
{
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-hot-loader',
      'css-loader',
      'postcss-loader'
    ]
  })
}
```
