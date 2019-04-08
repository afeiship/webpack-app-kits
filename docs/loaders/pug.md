# pug
> Jade or pug.

## install
```shell
npm install -S html-loader pug-html-loader --registry=https://registry.npm.taobao.org
```

## usage
```js
module: {
  rules: nx.flatten([
    loaders.pug(),
    // ...
  ])
}
```

## default
```js
{
  test: /\.pug$/,
  use: [
    {
      loader: 'html-loader'
    },
    {
      loader: 'pug-html-loader',
      inOptions
    }
  ]
}
```
