function myApply(context, argsArray) {
  // 正确判断上下文对象并赋予作用域参数 如果没有赋予全局作用域
  if (context === null || context === undefined) {
    context = globalThis;
  }
  let symbolFn = Symbol("uniqueFn");
  context[symbolFn] = this;
  let res = context[symbolFn](...argsArray);
  delete context[symbolFn];
  return res;
}

Function.prototype.myApply = myApply;

// ------------- 测试代码 ----------------
const person = {
  name: "张三",
};
function func(numA, numB) {
  console.log(this);
  console.log(numA, numB);
  return numA + numB;
}
const res = func.myApply(person, [1, 2]);
console.log("返回的值为：" + res);
