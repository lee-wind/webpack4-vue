# webpack4-Vue
webpack4单页面配置(+Vue)   

webpack4指南：https://webpack.js.org/guides  

注意babel版本

webpack.dev: 本地  
webpack.prod: 正式  
webpack.test: 测试

建议用npm，不要用cnpm

DefinePlugin：创建全局常量  
HotModuleReplacementPlugin：热模块替换  
ProvidePlugin：自动导入模块  
copy-webpack-plugin：复制文件或目录  
resolve.alias创建文件路径别名  
mini-css-extract-plugin：提取CSS  
purifycss-webpack：去除未引用的CSS  
optimize-css-assets-webpack-plugin：压缩CSS  
terser-webpack-plugin：缩小JavaScript  
splitChunks：拆分、优化代码  
babel-plugin-transform-remove-console：移除所有的console.*调用  
@babel/polyfill：ES6转ES5(https://babeljs.io/docs/en/usage)  
@babel/preset-env：配置目标环境，还可配置按需加载@babel/polyfill  
@babel/plugin-transform-runtime+@babel/runtime：  
    1、避免@babel/polyfill全局污染,  
    2、重复使用Babel注入的helper程序git代码来节省代码(避免编译输出中的重复)  
@babel/plugin-syntax-dynamic-import：使babel支持动态导入 (https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/)  
postcss-loader：为CSS添加浏览器前缀  
px2rem-loader：px自动转rem  


自我定制：
    styleAttrInHtml.js(自定义了一个loader)将\<template>中style属性中的px转rem  
   