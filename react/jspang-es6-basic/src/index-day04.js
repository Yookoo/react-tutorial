//day04
//set和weakSet 数据结构

//Set 的声明

let set01 = new Set(['jdl','sjfl','阿凡达']);
console.log(set01);
//Set(3) {"jdl", "sjfl", "阿凡达"}
//Set和Array虽然很像,但是有一些略微的区别
// 1.Set中没有重复值
// 2.Set中的元素是无序的

//Set的增删改查
//在Array中 我们使用push来添加一个元素,在Set中我们使用add
//增加
set01.add('zxc');
console.log(set01);
//删除
set01.delete('jdl');
console.log(set01);
//查找
//因为Set是无序的所以我们不能使用set[1],这样来获取它的元素，而是直接使用它的值
console.log(set01.has('sjfl')); //true

//清空
set01.clear();
console.log(set01); //Set(0) {}

//Set的值是无法修改的，如果想修改只能先把不需要的删除，再添加需要的

//Set 循环
// for ... of (同array)
//
let set02 = new Set(['jspang','技术胖','web','jspang']);
for (let item of set02){
    console.log(item);
}


//forEach
//箭头函数
set02.forEach((value)=>console.log(value));
//传统方法
set02.forEach(function(val){
  console.log(val);
});

//Size属性
//Set的Size属性接Array的length属性类似,用来获取Set中的元素数量

console.log(set02.size); //4

//WeakSet
//set和weakSet的区别就是weakset中的元素都必须是对象
//WeakSet的声明
let weakset=new WeakSet();
let obj={a:'jspang',b:'技术胖'}
weakset.add(obj);
console.log(weakset);
//这里要注意的是，WeakSet在声明时不能进行初始化,必须使用add方法添加元素

//map 数据结构

//Json和map格式的对比
//map的效率和灵活性更好
//map的声明
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

//map的增删查

//增加set
map01.set('hobby','coding');
console.log(map01);
//Map(2) {{…} => "iam", "hobby" => "coding"}

//获取get
console.log(map01.get(json));
//iam

//删除delete
map01.delete(json);
console.log(map01);
//Map(1) {"hobby" => "coding"}

//查找 has
console.log(map01.has('hobby'));
//true

//清空clear
map01.clear();
//数量size
console.log(map01.size); // 0

// 用Proxy进行预处理
// 代理模式
// 声明对象
const target = {
    name: 'Billy Bob',
    age: 15
};
const handler = {
    get(target, key, proxy) {
        const today = new Date();
        console.log(`GET request made for ${key} at ${today}`);
        return Reflect.get(target, key, proxy);
    }
};

//声明Proxy
//var p = new Proxy(target, handler);
//这里是两个花括号，第一个花括号填被代理的对象，后边的花括号填代理后要做的事。

const proxy = new Proxy(target, handler);
// 添加代理后我们调用proxy.name就会打印 GET request made for name at Tue Nov 28 2017 23:24:10 GMT+0800 (CST)
proxy.name;
//GET request made for name at Tue Nov 28 2017 23:24:10 GMT+0800 (CST)
//参考 http://pinggod.com/2016/%E5%AE%9E%E4%BE%8B%E8%A7%A3%E6%9E%90-ES6-Proxy-%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF/
