## 搭建开发环境
1. 建立一个项目的工程目录，并在目录下边建立两个文件夹：src和dist
2. 在src目录下新建一个index.html和index.js文件
*注意:在引入js文件时，引入的是dist目录下的文件*
3. 初始化项目
```
npm init -y
```
4. 全局安装Babel-cli
```
npm install -g babel-cli
```
5. 本地安装babel-preset-es2015 和 babel-cli
```
npm install --save-dev babel-preset-es2015 babel-cli
```
6. 在根目录新建.babelrc文件
```
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}

```

7. 编译ES6为ES5
```
babel src/index.js -o dist/index.js
```
8. 在package.json配置快捷操作
```
"scripts": {
   "build": "babel src/index.js -o dist/index.js"
 }
```
9. 快捷运行程序
```
npm run build
```
## 新的声明方式

1. var：它是variable的简写，可以理解成变量的意思。
2. let：它在英文中是“让”的意思，也可以理解为一种声明的意思。
3. const：它在英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量。


## 变量的解构赋值

1. 数组的解构赋值
```javascript
let [a=5,[b,c]] = [,[2],4];
console.log("a:" + a);
console.log("b:" + b);
console.log("c:" + c);
```
2. 对象的解构赋值
*注意{不能作为开头，如果需要{开头时需要在最外层包裹()*
```javascript
let foo;
({foo} = {foo:"jspang"});
console.log(foo);
```
//字符串解构赋值
```javascript
let str = "jspang" ;
const [s1,s2,s3,s4,s5,s6] = str ;
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);
```

## 对象扩展运算符(...) 和 rest运算符(...)
```javascript
function test(...args){
  console.log(args[0]);
  console.log(args[1]);
  console.log(args[2]);
  console.log(args[3]);
}
test(1,2,3);
```
1. 利用对象扩展运算符解决数组赋值问题
*我们都知道两个数组相赋值时，是对内存堆栈的引用，并不是真正的赋值。我可以使用对象扩展运算符解决这个问题*
```javascript
let arr1 = ['www','jspang','com'];
let arr2 = arr1;
arr2.push("123");
console.log(arr1);
console.log(arr2);
```
*解决方法:*
```javascript
let arr3 = ['www','jspang','com'];
let arr4 = [...arr3];
arr4.push("123");
console.log(arr3);
console.log(arr4);
```


## 字符串模版
```javascript
let jspang='技术胖';
let blog = `<b>非常高兴你能看到这篇文章</b>，
我是你的老朋友${jspang}。<br/>这节课我们学习字符串模版。`;
document.write(blog);
```
- 对运算的支持：

- 字符串查找
 - ES5的写法
```javascript
console.log(blog.indexOf(jspang)>0);
```
 - ES6的新方法
```javascript
console.log(blog.includes(jspang));
console.log(blog.startsWith(jspang));
console.log(blog.endsWith(jspang));
console.log('jspang|'.repeat(3));
```
