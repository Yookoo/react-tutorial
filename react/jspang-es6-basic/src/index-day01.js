//day01:
//数组的解构赋值
let [a=5,[b,c]] = [,[2],4];
console.log("a:" + a);
console.log("b:" + b);
console.log("c:" + c);

//
//对象的解构赋值
//注意{不能作为开头，如果需要{开头时需要在最外层包裹()
let foo;
({foo} = {foo:"jspang"});
console.log(foo);

//字符串解构赋值
let str = "jspang" ;
const [s1,s2,s3,s4,s5,s6] = str ;
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);


//对象扩展运算符(...) 和 rest运算符()
function test(...args){
  console.log(args[0]);
  console.log(args[1]);
  console.log(args[2]);
  console.log(args[3]);
}
test(1,2,3);
//利用对象扩展运算符解决数组赋值问题
//我们都知道两个数组相赋值时，是对内存堆栈的引用，并不是真正的赋值。我可以使用对象扩展运算符解决这个问题
let arr1 = ['www','jspang','com'];
let arr2 = arr1;
arr2.push("123");
console.log(arr1);
console.log(arr2);

//解决方法:
let arr3 = ['www','jspang','com'];
let arr4 = [...arr3];
arr4.push("123");
console.log(arr3);
console.log(arr4);



//字符串模版
let jspang='技术胖';
let blog = `<b>非常高兴你能看到这篇文章</b>，
我是你的老朋友${jspang}。<br/>这节课我们学习字符串模版。`;
document.write(blog);

//对运算的支持：

//字符串查找
//ES5的写法
console.log(blog.indexOf(jspang)>0);
//ES6的新方法
console.log(blog.includes(jspang));
console.log(blog.startsWith(jspang));
console.log(blog.endsWith(jspang));
console.log('jspang|'.repeat(3));
