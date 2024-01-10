function myMap(callbackFn, thisArg) {
  //thisArg 为设置的循环过后的返回值，如果没有确定 默认为undefined
  if (typeof callbackFn !== "function") {
    throw new Error(`${callbackFn} is not a function`);
  }
  if (!Array.isArray(this)) {
    throw new Error(`${this} is not a Array`);
  }
  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[i] = callbackFn.call(thisArg, arr[i], i, arr);
  }
  return res;
}

Array.prototype.myMap = myMap;

// 测试代码

let arr = [1, 2, 3, 4];
let res = arr.myMap((item, index) => {
  return (arr[index] = item * 2);
});
console.log("🚀 ~ file: map.js:20 ~ res ~ res:", res);
