//day02
// ES6的数字操作
// 二进制和八进制
// 二进制声明
let binary = 0b010101;
console.log(binary + '的二进制是0b010101');
//八进制声明
let octal = 0o666;
console.log(octal + '的八进制是0o666');

//数字判断和转换
//数字验证Nunber.isFinite(XX)
//Finite(有限的)
let n = 11/4;
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
console.log(Number.parseInt("010101",2));

//转换为浮点数(Number.parseFloat(string))
//参数:string解析值。如果字符串参数不是字符串，则将其转换为字符串(使用ToString抽象操作)。
console.log(Number.parseFloat(n));

//整数取值范围操作
//整数的最大取值范围是2的53次方
let max = Math.pow(2,53);
console.log(max); //9007199254740992

//最大安全整数、最小安全整数
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.MAX_VALUE);  //1.7976931348623157e+308
console.log(Number.MIN_VALUE);  //5e-324
