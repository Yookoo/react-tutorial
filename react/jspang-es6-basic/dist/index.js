'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//day02
// ES6的数字操作
// 二进制和八进制
// 二进制声明
var binary = 21;
console.log(binary + '的二进制是0b010101');
//八进制声明
var octal = 438;
console.log(octal + '的八进制是0o666');

//数字判断和转换
//数字验证Nunber.isFinite(XX)
//Finite(有限的)
var n = 11 / 4;
console.log(Number.isFinite(n));
console.log(Number.isFinite("jspang"));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));

//NaN验证
console.log(Number.isNaN(NaN));
//整数验证
console.log(Number.isInteger(binary));

//转换为整数(Number.parseInt(string, radix))
//参数:string解析值。如果字符串参数不是字符串，则将其转换为字符串(使用ToString抽象操作)。
//参数:radix基数.表示2到36之间的整数。指定10用于人类常用的十进制数字系统。通常默认值为10。
console.log(Number.parseInt("010101", 2));

//转换为浮点数(Number.parseFloat(string))
//参数:string解析值。如果字符串参数不是字符串，则将其转换为字符串(使用ToString抽象操作)。
console.log(Number.parseFloat(n));

//整数取值范围操作
//整数的最大取值范围是2的53次方
var max = Math.pow(2, 53);
console.log(max); //9007199254740992

//最大安全整数、最小安全整数
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324

//ES6的新数组知识
//JSON->数组格式转换
//Array.from(XX)
var json = {
  '0': 'jspang',
  '1': '技术胖',
  '3': '大胖逼逼叨',
  'length': 5
};
var arr01 = Array.from(json);
console.log(arr01);

//文本/变量-> 数组
// Array.of(XX)
var arr02 = Array.of(3, 4, 5, 6);
console.log(arr02);
var arr03 = Array.of('json', 'hello', 'react');
console.log(arr03);

//数组的查询(find()实例方法)
//value:当前要查找的值
//index:当前要查找的数组索引
//arr:当前被查找的数组
var arr04 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr04.find(function (value, index, arr04) {
  return value > 5; //6
  //return index>7; //9
}));

//数组填充(fill()实例方法)
//str:填充的字符串
//start : 起始索引
//end：结束索引
console.log(arr04.fill('jspang', 2, 5));
//(10) [1, 2, "jspang", "jspang", "jspang", 6, 7, 8, 9, 0]

//数组的遍历
//for...of循环
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = arr04[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var i = _step.value;

    console.log(i);
  }

  //for...of输出索引
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = arr04.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _i = _step2.value;

    console.log(_i);
  }
  //for...of同时输出索引和值
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = arr04.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var _step3$value = _slicedToArray(_step3.value, 2),
        _i2 = _step3$value[0],
        val = _step3$value[1];

    console.log(_i2 + ':' + val);
  }
  //entries()实例方法
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var list = arr04.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);
//(2) [0, 1]
//list.next().value是一个数组里面包括[index,value]

//箭头函数和扩展
//传统方法
function add1(a, b) {
  return a + b;
}
console.log(add1(2, 3)); //3

// 默认值
function add2(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return a + b;
}
console.log(add2(1));

//抛出错误
function add3(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (a == 0) {
    throw new Error('This is Error');
  }
  return a + b;
}
console.log(add3(2));

//函数中的严谨模式

function add4(a, b) {
  'use strict';

  if (a == 0) {
    throw new Error('This is Error');
  }
  return a + b;
}
console.log(add4(2, 3));

//获得需要传递的参数个数
console.log(add4.length);

//箭头函数01
var add5 = function add5(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a + b;
};
console.log(add5(3));
//箭头函数02
var add6 = function add6(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  console.log('jspang');
  return a + b;
};
console.log(add6(4));
