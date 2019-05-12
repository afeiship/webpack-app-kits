const path = require('path');
const dirname = require('app-root-path').path;
const OfflinePlugin = require('offline-plugin');

module.exports = function(inOptions) {
  const NODE_ENV = process.env.NODE_ENV;
  return new OfflinePlugin(
    Object.assign(
      {
        ServiceWorker: {
          events: true
        }
      },
      inOptions
    )
  );
};
