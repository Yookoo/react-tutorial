//day02的第二部分今天学的有点多，将其分开写更加清晰
//ES6中的函数和数组补漏
//对象的函数解构
let json ={
  a : 'jspang',
  b : '技术胖'
}

function fun1(a,b ='jspang'){
  console.log(a,b);
}
fun1(json);
// {a: "jspang", b: "技术胖"} "jspang"

// 数组的函数解构

let arr = ['jspang', '技术胖','ES6'];

function fun2(a,b,c){
  console.log(a,b,c);
}
fun2(...arr);
// jspang 技术胖 ES6

// in的用法
// 对象

console.log('a' in json); //true

// 数组

let arr01 =[,,,,,,];
console.log(arr01.length); //6
console.log(0 in arr01); //false
console.log(0 in arr);  //true


//数组的遍历方法
// forEach
// filter
// some
// map
// forEach 传值时val在前index在后
arr.forEach((val,index)=>console.log(index,val));
//0 "jspang"
//1 "技术胖"
//2 "ES6"
arr.filter(x=>console.log(x));
//jspang
//技术胖
//ES6
arr.some(x=>console.log(x));
//jspang
//技术胖
//ES6
console.log(arr.map(x=>'web'));
//(3) ["web", "web", "web"]


//数组转换字符串
//join()
//toString()
console.log(arr.join('|'));
//jspang|技术胖|ES6
console.log(arr.toString());
//jspang,技术胖,ES6
