# service-worker
> About service worker.


## usage:
1. place `./src/sw.js` in your project src dir
```conf
# refrer this code:
https://github.com/afeiship/configuration-files/blob/master/service-worker/sw.js
```

2. Add this code to you app.js
```jsx
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

// ...
  componentDidMount() {
    //...
    this.registerSw();
  }

  registerSw() {
    if ('serviceWorker' in navigator) {
      runtime.register();
    }
  }
// ...
```

3. use app-kits
```js
plugins:[
  //...
  plugins.serviceWorker()
]
```
