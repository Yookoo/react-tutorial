'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//day03
//ES6的对象

//对象的赋值
//将变量直接赋给对象,变量名就是对象的属性名，变量的值就是属性的值
var name = 'jspang';
var skill = 'web';
var obj1 = { name: name, skill: skill };
console.log(obj1);
//{name: "jspang", skill: "web"}


//讲变量的值作为对象的属性名
var key = 'skill';
var obj2 = _defineProperty({}, key, 'web');
console.log(obj2);
{
    skill: "web";
}

//对象方法

var obj3 = {
    add: function add(a, b) {
        return a + b;
    }
};
console.log(obj3.add(1, 2)); //3

//Object.is(a,b) 对象比较(只能用来比较对象的属性值)
//传统方法比较对象的值

var obj01 = { name: 'jspang' };
var obj02 = { name: 'jspang' };
console.log('obj01.name === obj02.name', obj01.name === obj02.name); //true
console.log('obj01 === obj02', obj01 === obj02); //false

//Object.is(a,b)
console.log('Object.is(obj01.name,obj02.name)', Object.is(obj01.name, obj02.name)); //true
console.log('Object.is(obj01,obj02)', Object.is(obj01, obj02)); //false

//区分=== 和 is方法的区别。

console.log(+0 === -0); //true
console.log(NaN === NaN); //false
console.log(Object.is(+0, -0)); //false
console.log(Object.is(NaN, NaN)); //true

console.log(+0 === -0); //true
console.log(NaN === NaN); //false
console.log(Object.is(+0, -0)); //false
console.log(Object.is(NaN, NaN)); //true

//===为同值相等，is()为严格相等。

//Object.assign( )合并对象(同数组合并)
var a = { a: 'jspang' };
var b = { b: '技术派' };
var c = { c: 'web' };
var d = Object.assign(a, b, c);
console.log(d);

//Symbol 全局标记

//Symbol声明
var f = Symbol();
console.log(typeof f === 'undefined' ? 'undefined' : _typeof(f));

var g = Symbol('jspang');
console.log(g); //红色
console.log(g.toString()); //黑色

// 使用Symbol构建对象的key值


var jspang = Symbol();
var obj = _defineProperty({}, jspang, '技术胖');
console.log(obj);
console.log(obj[jspang]);
obj[jspang] = 'web';
console.log(obj);
console.log(obj[jspang]);
// 技术胖
// web
// 有人就会问了，这和不声明jspang=Symbol();有什么区别呢？
// Symbol对象中属性的的保护作用

// 没有保护的写法
var person = { name: 'jspang', skill: 'web', age: 18 };

for (var item in person) {
    console.log(person[item]);
}
// jspang
// web
// 18

var person2 = { name: 'jspang', skill: 'web' };
var age = Symbol();
person2[age] = 18;
for (var _item in person2) {
    console.log(person2[_item]);
    // jspang
    // web
}
console.log(person2);
// {name: "jspang", skill: "web", Symbol(): 18}
