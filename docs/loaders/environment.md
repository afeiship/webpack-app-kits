# enviroment


## default
```js
{
  multiple: [
    { search: '__BUILD_HASH__', replace: GIT_HASH },
    { search: '__BUILD_ENV__', replace: process.env.NODE_ENV },
    { search: '__BUILD_VERSION__', replace: packageJson.version }
  ]
}
```
