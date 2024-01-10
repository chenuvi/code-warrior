// function call(fn, context, ...args) {
//   if (context === null || context === undefined) {
//     context = globalThis;
//   }
//   const symbolFn = Symbol();

//   context.__temp__ = fn;
//   const res = context.__temp__(...args);
//   delete context.__temp__;
//   return res;
// }

function myCall(context, ...args) {
  // 正确判断上下文对象并赋予作用域参数 如果没有赋予全局作用域
  if (context === null || context === undefined) {
    context = globalThis;
  }
  //
  let symbolFn = Symbol();
  context[symbolFn] = this;
  const fn = context[symbolFn](...args);
  delete context[symbolFn];
  return fn;
}

Function.prototype.myCall = myCall;

const person = {
  name: "张三",
};
function func(numA, numB) {
  console.log("🚀 ~ file: call.js:33 ~ func ~ this:", this);
  console.log(numA, numB);
  return numA + numB;
}
const res = func.myCall(person, 1, 2);
console.log("返回的值为：" + res);

export { myCall };
