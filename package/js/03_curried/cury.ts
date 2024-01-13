function curry(fn: (...args: any[]) => any) {
  const arity = fn.length;
  // 获取原函数的参数个数
  return function curried(...args: any[]) {
    if (args.length >= arity) {
      return fn.apply(this.args);
    } else {
      return function (...remainArgs: any[]) {
        return curried.apply(this, [...args, ...remainArgs]);
      };
    }
  };
}
