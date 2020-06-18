module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,


    // 用vue-cli启用脚手架，可以快速生成项目文件，运行npm run dev 可以开启本地服务。dev是利用webpack-dev-sevice启动本地localhost:8080服务。如果这时候我们想要调用后台api接口会产生跨域，在localhost:8080服务下无法调取接口。解决方法如下：脚手架有一个webpack.config.js文件，可以配置webpack-dev-sevice。
    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'http://jsonplaceholder.typicode.com',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':''
    //             }
    //         }
    //     }
    // }
}