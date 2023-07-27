const { defineConfig } = require('@vue/cli-service')

// add require for fs node library
const fs = require('fs');

module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   https: {
  //     key: fs.readFileSync('./_wildcard.localhost+1-key.pem'),
  //     cert: fs.readFileSync('./_wildcard.localhost+1.pem'),
  //   }
  // }
})
