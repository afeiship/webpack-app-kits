# todos
- [ ] npm WARN deprecated extract-text-webpack-plugin@3.0.2
- [ ] browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
- [ ] npm WARN deprecated core-js@2.6.10: core-js@<3.0 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
- [x] npm WARN lifecycle The node binary used for scripts is /var/folders/vf/5q4qzzx16nq8k0h7c6qht_240000gn/T/yarn--1574502729813-0.5907424415291398/node but npm is using /usr/local/Cellar/node/12.12.0/bin/node itself. 
Use the `--scripts-prepend-node-path` option to include the path for the node binary npm was executed with.


## npm install
~~~
npm WARN deprecated extract-text-webpack-plugin@3.0.2: Deprecated. Please use https://github.com/webpack-contrib/mini-css-extract-plugin
npm WARN deprecated fsevents@1.2.9: One of your dependencies needs to upgrade to fsevents v2: 1) Proper nodejs v10+ support 2) No more fetching binaries from AWS, smaller package size
npm WARN deprecated core-js@2.6.10: core-js@<3.0 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
npm WARN deprecated browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
~~~

## .npmrc
```
scripts-prepend-node-path=true
```
