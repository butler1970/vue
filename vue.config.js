const { defineConfig } = require('@vue/cli-service')

// add require for fs node library
const fs = require('fs');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
        'localhost',
        'internettools.app'
    ],
    https: {
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.pem'),
    }
  }
})
