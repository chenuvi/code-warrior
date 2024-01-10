function myReduce(callbackFn, initialValue) {
  //thisArg 为设置的forEach循环过后的返回值，如果没有确定 默认为undefined
  if (typeof callbackFn !== "function") {
    throw new Error(`${callbackFn} is not a function`);
  }
  if (!Array.isArray(this)) {
    throw new Error(`${this} is not a Array`);
  }
  const arr = this;
  // 初始值
  let previousValue, currentValue, currentIndex;
  if ([null, undefined].includes(initialValue)) {
    previousValue = arr[0];
    currentValue = arr[1];
    currentIndex = 1;
  } else {
    previousValue = initialValue;
    currentValue = arr[0];
    currentIndex = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    previousValue = callbackFn(previousValue, currentItem, i, arr);
  }

  return previousValue;
}

Array.prototype.myReduce = myReduce;
