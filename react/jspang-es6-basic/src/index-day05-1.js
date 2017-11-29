/**
 * day05
 * promise对象的使用
 * 解决回调地狱的问题
 *
 */

// 通过promise解决ES5函数的多层嵌套
// 洗菜做饭->坐下来吃饭->收拾桌子洗碗。
let state=1;

function step1(resolve,reject){
    console.log('1.开始-洗菜做饭');
    if(state==1){
        resolve('洗菜做饭--完成');
    }else{
        reject('洗菜做饭--出错');
    }
}
function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭');
    //state=0;
    if(state==1){
        resolve('坐下来吃饭--完成');
    }else{
        reject('坐下来吃饭--出错');
    }
}

function step3(resolve,reject){
    console.log('3.开始-收拾桌子洗完');
     if(state==1){
        resolve('收拾桌子洗完--完成');
    }else{
        reject('收拾桌子洗完--出错');
    }
}

new Promise(step1).then(function (val) {
  console.log(val);
  return new Promise(step2);
}).then(function (val) {
  console.log(val);
  return new Promise(step3);
}).then(function (val) {
  console.log(val);
})
/**
 *
 * class类的使用
 */
//class类的声明
class Person {

  constructor(name,age){
    this.name=name;
    this.age=age;
  }

  show(){
    console.log('我是'+this.name+',今年'+this.age+'岁了。');
  }
}

let xiaoming = new Person('小明',18);
xiaoming.show();
//class类的继承extends
class Coder extends Person {
  constructor(name,age,skill){
    super(name,age);
    this.skill= skill;
  }

  show(){
    console.log('我是'+this.name+',今年'+this.age+'岁了。我会'+this.skill+'。');
  }
}
let xiaobai = new Coder('小白',20,'码代码');
xiaobai.show();
