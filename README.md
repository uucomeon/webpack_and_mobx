1.打开CMD 创建文件夹 
mkdir webpack-test
cd webpack-test

2.安装node_modules 
npm install

3.初始化 package.json 
npm init

4.全局安装webpack 与 webpack-cli
npm install -g webpack
npm install -g webpack-cli

5.创建 
app/Greeter.js  
app/main.js 
public/index.html

main.js是入口文件 
Greeter.js是待编译文件
index.html是结果文件,结果文件里引用了bundle.js是编译后的文件

6.通过命令行编译
webpack --mode development app/main.js --output-filename bundle.js --output-path public

7.通过配置文件来使用Webpack
(1).创建webpack.config.js
加入内容：
module.exports = {
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    }
};
(2).在工程目录下执行命令
webpack

8.不使用webpack也可以，在package.json中加入
{ 
"scripts": { "start": "webpack" }
}
执行 npm start 即可

