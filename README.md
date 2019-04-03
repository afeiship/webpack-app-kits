# webpack-app-kits
> Webpack application kits

## todos:
- [x] env: development/test/production
- [x] sw, finish docs

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
