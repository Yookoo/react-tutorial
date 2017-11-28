let obj01 = {
  add :function (val) {
      return val + 10;
  }
}


var handler = {
  get :function (target, key, proxy) {
    //key[0] = key[0] + 10;
    console.log(target, key, proxy);

    console.log(target[key](arguments) + 10);
    return Reflect.get(target, key, proxy)
  },
  set : function (target, key, value, proxy) {
    //key[0] = key[0] + 10;
    console.log(target, key, value, proxy);
    return Reflect.set(target, key,value, proxy)
  }
};

//声明Proxy
//new Proxy({},{});
//这里是两个花括号，第一个花括号填被代理的对象，后边的花括号填代理后要做的事。
//这里我们比如要获取add的参数先给它加10，在调用add方法，就相当于给参数加了20
/*
{
  get :function (target,key) {
    if(key === 'add'){
      console.log(key);
    }

  },
  set :function (target,prop,val) {
    console.log(target,prop,val);
  }
 */
var pro = new Proxy(obj01,handler);

console.log(pro.add(100));
