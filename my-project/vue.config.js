const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        proxy: {
          '/api': {
            target: 'http://localhost:8080',
            pathRewrite: {
                '^/api': '/mock'
            }
          }
        }
    },
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('styles', resolve('src/assets/styles'))
    }
}