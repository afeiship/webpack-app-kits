# offline
> Service worker plugin.

![](https://ws3.sinaimg.cn/large/006tNc79gy1g2ydvaerd4j306e06ywem.jpg)

## usage
```js
// webpack.dll.js

plugins: [plugins.offline()],
```


## app/index.js
```js
import runtime from 'offline-plugin/runtime';

runtime.install({
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady');
    runtime.applyUpdate();
  }
});
```

## resources
- https://github.com/NekR/offline-plugin
