"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//数组的解构赋值
var _ref = [, [2], 4],
    _ref$ = _ref[0],
    a = _ref$ === undefined ? 5 : _ref$,
    _ref$2 = _slicedToArray(_ref[1], 2),
    b = _ref$2[0],
    c = _ref$2[1];

console.log("a:" + a);
console.log("b:" + b);
console.log("c:" + c);

//
//对象的解构赋值
//注意{不能作为开头，如果需要{开头时需要在最外层包裹()
var foo = void 0;
var _foo = { foo: "jspang" };
foo = _foo.foo;

console.log(foo);

//字符串解构赋值
var str = "jspang";

var _str = _slicedToArray(str, 6),
    s1 = _str[0],
    s2 = _str[1],
    s3 = _str[2],
    s4 = _str[3],
    s5 = _str[4],
    s6 = _str[5];

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);

//对象扩展运算符(...) 和 rest运算符()
function test() {
  console.log(arguments.length <= 0 ? undefined : arguments[0]);
  console.log(arguments.length <= 1 ? undefined : arguments[1]);
  console.log(arguments.length <= 2 ? undefined : arguments[2]);
  console.log(arguments.length <= 3 ? undefined : arguments[3]);
}
test(1, 2, 3);
//利用对象扩展运算符解决数组赋值问题
//我们都知道两个数组相赋值时，是对内存堆栈的引用，并不是真正的赋值。我可以使用对象扩展运算符解决这个问题
var arr1 = ['www', 'jspang', 'com'];
var arr2 = arr1;
arr2.push("123");
console.log(arr1);
console.log(arr2);

//解决方法:
var arr3 = ['www', 'jspang', 'com'];
var arr4 = [].concat(arr3);
arr4.push("123");
console.log(arr3);
console.log(arr4);

//字符串模版
var jspang = '技术胖';
var blog = "<b>\u975E\u5E38\u9AD8\u5174\u4F60\u80FD\u770B\u5230\u8FD9\u7BC7\u6587\u7AE0</b>\uFF0C\n\u6211\u662F\u4F60\u7684\u8001\u670B\u53CB" + jspang + "\u3002<br/>\u8FD9\u8282\u8BFE\u6211\u4EEC\u5B66\u4E60\u5B57\u7B26\u4E32\u6A21\u7248\u3002";
document.write(blog);

//对运算的支持：

//字符串查找
//ES5的写法
console.log(blog.indexOf(jspang) > 0);
//ES6的新方法
console.log(blog.includes(jspang));
console.log(blog.startsWith(jspang));
console.log(blog.endsWith(jspang));
console.log('jspang|'.repeat(3));
