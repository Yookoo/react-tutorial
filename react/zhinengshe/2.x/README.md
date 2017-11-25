#从零搭建React开发环境
## 安装全局webpack
 - 安装webpack的cli
`npm install -g webpack`

- 安装webpack-dev-server
`npm install -g webpack-dev-server`

## 初始化项目(在项目根目录下)

`npm init`

## 安装本地webpack

`npm install webpack -D`               #webpack本地依赖库
`npm install webpack-dev-server -D`    #webpack服务器的本地依赖

## 安装 babel 编译器

`npm install babel-core -D`            #后台编译babel工具
`npm install babel-preset-env -D`      #babel对ES2015+的预设
`npm install babel-loader -D`          #babel加载器
`npm install babel-preset-react -D`    #babel-react预设

## react依赖

`npm install react -D`                 #react本身
`npm install react-dom -D`             #react-dom本身
`npm install react-hot-loader -D`      #热更新插件

## 样式加载器
`npm install style-loader -D`
`npm install css-loader -D`

## 配置 webpack.config.js

## 配置 .babelrc
