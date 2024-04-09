const { defineConfig } = require("@vue/cli-service")
// const path=require('path');
// const resolve=(dir)=>path.join(__dirname,'.',dir);
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //根目录
  publicPath: "./",
  //打包输出文件地址
  outputDir: "dist",
  //放置生成的静态资源
  assetsDir: "assets",
  devServer: {
    //开发时运行的端口
    port: "5713",
    //开发运行时域名，设置城0.0.0.0 在用一个局域网下，如果你的项目在运行，同事可以通过你的http://ip:port 访问到你的项目
    host: "0.0.0.0",
    //是否启用https
    https: false,
    //启动项目是否直接打开浏览器
    open: false,
    proxy: {
      //代理标识
      "/api": {
        //代理路径
        target: "https://www.baidu.com",
        //配置代理默认开启target方式
        changeOrigin: true,
        //如果http接口，需要配置该参数
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
  // 路径别名
  // configureWebpack:{
  // 	resolve:{
  // 		extensions:[],
  // 		alias:{
  // 			'@com':resolve('src/components'),
  // 			'vue$':'vue/dist/cue.esm.js'
  // 		}
  // 	}
  // }
})
