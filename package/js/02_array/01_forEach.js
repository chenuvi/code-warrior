function myForEach(callbackFn, thisArg) {
  //thisArg 为设置的forEach循环过后的返回值，如果没有确定 默认为undefined
  if (typeof callbackFn !== "function") {
    throw new Error(`${callbackFn} is not a function`);
  }
  if (!Array.isArray(this)) {
    throw new Error(`${this} is not a Array`);
  }
  let arr = this;
  for (let i = 0; i < this.length; i++) {
    arr[i] = callbackFn.call(thisArg, arr[i], i, arr);
  }
}

Array.prototype.myForEach = myForEach;

var arr = [1, 2, 4, 5];
arr.myForEach((num, index) => {
  return (arr[index] = num * 2);
});
console.log(arr); // [2 , 4 , 8 , 10]
