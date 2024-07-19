interface Lengthwise {
    length: number;
  }
  function Leng<T extends Lengthwise>(arg:T): T {
    console.log(arg)
    return arg
  }

Leng({length:2})// 正确
Leng({length:2,rr:2})// 正确
Leng({rr:2}) // 错误
/**
 * keyof 是 TypeScript 中用来获取对象类型所有键（属性名）的操作符。
可以使用 keyof 来定义泛型约束，限制泛型参数为某个对象的键。
 */
function getVal<T, K extends keyof T>(obj:T,key: K){
  return obj[key]
}
let x = { a: 1, b: 2, c: 3 };
getVal(x,'a');// 正确
getVal(x,'d'); // 错误