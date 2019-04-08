# less
> less css.

## usage
```js
module: {
  rules: nx.flatten([
    loaders.less(),
    // ...
  ])
}
```

## default
```js
{
  test: /\.less$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-hot-loader',
      'css-loader',
      'postcss-loader',
      {
        loader: "less-loader",
        options: {
          javascriptEnabled: true
        }
      }
    ]
  })
}
```
