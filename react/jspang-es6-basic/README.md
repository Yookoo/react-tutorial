
# Day01
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
***
# Day02

## ES6的数字操作
### 二进制和八进制*
- 二进制声明
```javascript
let binary = 0b010101;
console.log(binary + '的二进制是0b010101');
```
- 八进制声明
```javascript
let octal = 0o666;
console.log(octal + '的八进制是0o666');
```

### 数字判断和转换

- 数字验证Nunber.isFinite(XX)

Finite(有限的)
```javascript
let n = 11/4;
console.log(Number.isFinite(n));
console.log(Number.isFinite("jspang"));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));
```
- NaN验证
```javascript
console.log(Number.isNaN(NaN));
```
- 整数验证
```javascript
console.log(Number.isInteger(binary));
```
- 转换为整数(Number.parseInt(string, radix))

    参数:string解析值。如果字符串参数不是字符串，则将其转换为字符串(使用ToString抽象操作)。
    参数:radix基数.表示2到36之间的整数。指定10用于人类常用的十进制数字系统。通常默认值为10。
```javascript
console.log(Number.parseInt("010101",2));
```

- 转换为浮点数(Number.parseFloat(string))
    参数:string解析值。如果字符串参数不是字符串，则将其转换为字符串(使用ToString抽象操作)。
```javascript
console.log(Number.parseFloat(n));
```
### 整数取值范围操作

- 整数的最大取值范围是2的53次方
```javascript
let max = Math.pow(2,53);
console.log(max); //9007199254740992
```
- 最大安全整数、最小安全整数
```javascript
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.MAX_VALUE);  //1.7976931348623157e+308
console.log(Number.MIN_VALUE);  //5e-324
```

## ES6的新数组知识
### JSON->数组格式转换
  - 用法:Array.from(XX)
```javascript
let json = {
  '0': 'jspang',
  '1': '技术胖',
  '3': '大胖逼逼叨',
  'length':5
}
let arr01 = Array.from(json);
console.log(arr01);
```
## 文本/变量-> 数组
  - 用法:Array.of(XX)
```javascript
let arr02 = Array.of(3,4,5,6);
console.log(arr02);
let arr03 = Array.of('json','hello','react');
console.log(arr03);
```
### 数组的查询(find()实例方法)
- value:当前要查找的值
- index:当前要查找的数组索引
- arr:当前被查找的数组
```javascript
let arr04 = [1,2,3,4,5,6,7,8,9,0];
console.log(arr04.find(function (value,index,arr04) {
  return value>5; //6
  //return index>7; //9
}));
```
### 数组填充(fill()实例方法)
- str:填充的字符串
- start : 起始索引
- end：结束索引
```javascript
console.log(arr04.fill('jspang',2,5));
//(10) [1, 2, "jspang", "jspang", "jspang", 6, 7, 8, 9, 0]
```
### 数组的遍历
  - for...of循环
```javascript
for (let i of arr04) {
  console.log(i);
}
```
  - for...of输出索引
```javascript
for (let i of arr04.keys()) {
  console.log(i);
}
```
  - for...of同时输出索引和值
```javascript
for (let [i,val] of arr04.entries()) {
  console.log(i+':'+ val);
}
```
  - entries()实例方法
```javascript
let list = arr04.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
//(2) [0, 1]
//list.next().value是一个数组里面包括[index,value]
```
### 箭头函数和扩展
- 传统方法
```javascript
function add1(a,b){
  return a + b;
}
console.log(add1(2,3)); //3
```
  - 默认值
```javascript
function add2(a,b=1){
  return a + b;
}
console.log(add2(1));
```
  - 抛出错误
```javascript
function add3(a, b = 1){
  if (a == 0) {
    throw new Error('This is Error')
  }
  return a + b;
}
console.log(add3(2));
```
  - 函数中的严谨模式
```javascript
function add4(a, b){
  'use strict'
  if (a == 0) {
    throw new Error('This is Error')
  }
  return a + b;
}
console.log(add4(2,3));
```
  - 获得需要传递的参数个数
```javascript
console.log(add4.length);
```
  - 箭头函数01
```javascript
var add5 = (a,b=1)=>a+b;
console.log(add5(3));
```
  - 箭头函数02
  注意函数中有多个语句是需要加{}和return
```javascript
var add6 = (a,b=1)=>{
  console.log('jspang');
  return a+b;
}
console.log(add6(4));
```

## ES6中的函数和数组补漏

### 对象的函数解构
```javascript
let json ={
  a : 'jspang',
  b : '技术胖'
}

function fun1(a,b ='jspang'){
  console.log(a,b);
}
fun1(json);
// {a: "jspang", b: "技术胖"} "jspang"
```
### 数组的函数解构
```javascript
let arr = ['jspang', '技术胖','ES6'];

function fun2(a,b,c){
  console.log(a,b,c);
}
fun2(...arr);
// jspang 技术胖 ES6
```
### in的用法
  - 对象
```javascript
console.log('a' in json); //true
```
  - 数组
```javascript
let arr01 =[,,,,,,];
console.log(arr01.length); //6
console.log(0 in arr01); //false
console.log(0 in arr);  //true
```

### 数组的遍历方法
  - forEach
  - filter
  - some
  - map
```javascript
// forEach 传值时val在前index在后
arr.forEach((val,index)=>console.log(index,val));
//0 "jspang"
//1 "技术胖"
//2 "ES6"
```
```javascript
arr.filter(x=>console.log(x));
//jspang
//技术胖
//ES6
```
```javascript
arr.some(x=>console.log(x));
//jspang
//技术胖
//ES6
```
```javascript
console.log(arr.map(x=>'web'));
//(3) ["web", "web", "web"]
```

### 数组转换字符串
  - join()
  - toString()
```javascript
console.log(arr.join('|'));
//jspang|技术胖|ES6
```
```javascript
console.log(arr.toString());
//jspang,技术胖,ES6
```

## ES6的对象

### 对象的赋值

  - 将变量直接赋给对象,变量名就是对象的属性名，变量的值就是属性的值
```javascript
let name = 'jspang';
let skill = 'web';
var obj1 = {name,skill};
console.log(obj1);
//{name: "jspang", skill: "web"}
```

  - 将变量的值作为对象的属性名
```javascript
let key = 'skill';
var obj2 = {
  [key] : 'web'
}
console.log(obj2);
{skill: "web"}
```

### 对象方法
```javascript
var obj3={
    add:function(a,b){
        return a+b;
    }
}
console.log(obj3.add(1,2));  //3
```
  - Object.is(a,b) 对象比较(只能用来比较对象的属性值)
```javascript
//传统方法比较对象的值
var obj01 = {name:'jspang'};
var obj02 = {name:'jspang'};
console.log('obj01.name === obj02.name',obj01.name === obj02.name);//true
console.log('obj01 === obj02',obj01 === obj02);//false
```
```javascript
//Object.is(a,b)
console.log('Object.is(obj01.name,obj02.name)',Object.is(obj01.name,obj02.name)); //true
console.log('Object.is(obj01,obj02)',Object.is(obj01,obj02)); //false
```

  - 区分=== 和 is方法的区别。
```javascript
console.log(+0 === -0);  //true
console.log(NaN === NaN ); //false
console.log(Object.is(+0,-0)); //false
console.log(Object.is(NaN,NaN)); //true

console.log(+0 === -0);  //true
console.log(NaN === NaN ); //false
console.log(Object.is(+0,-0)); //false
console.log(Object.is(NaN,NaN)); //true
```
  小技巧 : ===为同值相等，is()为严格相等。

### Object.assign( )合并对象(同数组合并)
```javascript
let a = {a :'jspang'};
let b = {b : '技术派'};
let c = {c : 'web'};
let d = Object.assign(a,b,c);
console.log(d);
```
## Symbol 全局标记

### Symbol声明
```javascript
var f = Symbol();
console.log(typeof(f));
```
### Symbol打印
```javascript
var g = Symbol('jspang');
console.log(g);  //红色
console.log(g.toString()); //黑色
```
###  使用Symbol构建对象的key值

```javascript
var jspang = Symbol();
var obj={
    [jspang]:'技术胖'
}
console.log(obj[jspang]);
obj[jspang]='web';
console.log(obj[jspang]);
// 技术胖
// web
```
 *有人就会问了，这和不声明jspang=Symbol();有什么区别呢？*

### Symbol对象中属性的的保护作用

  - 没有保护的写法
```javascript
var person ={name:'jspang',skill:'web',age:18};
for (let item in person){
    console.log(person[item]);
}
// jspang
// web
// 18
```
  - 有保护的写法
```javascript
let person2={name:'jspang',skill:'web'};
let age=Symbol();
person2[age]=18;
for (let item in person2){
    console.log(person2[item]);
    // jspang
    // web
}
console.log(person2);
// {name: "jspang", skill: "web", Symbol(): 18}
```
 *我们看到person2对象的age的属性名被隐藏了，但是它的值仍然可以被修改。*

## set和weakSet 数据结构

### Set 的声明
```javascript
 let set01 = new Set(['jdl','sjfl','阿凡达']);
 console.log(set01);
 //Set(3) {"jdl", "sjfl", "阿凡达"}
```

  Set和Array虽然很像,但是有一些略微的区别

    1. Set中没有重复值
    2. Set中的元素是无序的

### Set的增删改查

    在Array中 我们使用push来添加一个元素,在Set中我们使用add
  - 增加
```javascript
 set01.add('zxc');
 console.log(set01);
```
  - 删除
```javascript
 set01.delete('jdl');
 console.log(set01);
```
  - 查找

      因为Set是无序的所以我们不能使用set[1],这样来获取它的元素，而是直接使用它的值
```javascript
 console.log(set01.has('sjfl')); //true
```
  - 清空
```javascript
 set01.clear();
 console.log(set01); //Set(0) {}
```
  *Set的值是无法修改的，如果想修改只能先把不需要的删除，再添加需要的*

### Set 循环
 - for ... of (同array)
```javascript
 let set02 = new Set(['jspang','技术胖','web','jspang']);
 for (let item of set02){
     console.log(item);
 }
```

  - forEach

      箭头函数
```javascript
 set02.forEach((value)=>console.log(value));
 ```
      传统方法
```javascript
 set02.forEach(function(val){
   console.log(val);
 });
```
### Size属性

    Set的Size属性接Array的length属性类似,用来获取Set中的元素数量
```javascript
 console.log(set02.size); //4
```
### WeakSet

  set和weakSet的区别就是weakset中的元素都必须是对象

### WeakSet的声明

```javascript
 let weakset=new WeakSet();
 let obj={a:'jspang',b:'技术胖'}
 weakset.add(obj);
 console.log(weakset);
```
 *这里要注意的是，WeakSet在声明时不能进行初始化,必须使用add方法添加元素*

## map 数据结构

### Json和map格式的对比

  - map的效率和灵活性更好
### map的声明
```javascript
 let json = {
     name:'jspang',
     skill:'web'
 }
 console.log(json);
 //{name: "jspang", skill: "web"}
 var map01=new Map();
 map01.set(json,'iam');
 console.log(map01);
 //Map(1) {{…} => "iam"}
 var map02=new Map();
 map02.set('iam',json);
 console.log(map02);
 //Map(1) {"iam" => {…}}
```
### map的增删查

  - 增加set
```javascript
 map01.set('hobby','coding');
 console.log(map01);
 //Map(2) {{…} => "iam", "hobby" => "coding"}
```
  - 获取get
```javascript
 console.log(map01.get(json));
 //iam
```
  - 删除delete
```javascript
 map01.delete(json);
 console.log(map01);
 //Map(1) {"hobby" => "coding"}
```
  - 查找 has
```javascript
 console.log(map01.has('hobby'));
 //true
```

  - 清空clear
```javascript
 map01.clear();
```
### 数量size
```javascript
 console.log(map01.size); // 0
```
