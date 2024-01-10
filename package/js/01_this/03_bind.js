function myBind(thisArg, ...args) {
  console.log("🚀 ~ file: 03_bind.js:2 ~ myBind ~ args:", args)
  // 2. 返回绑定this的新函数
  return (...reArgs) => {
    console.log("🚀 ~ file: 03_bind.js:5 ~ return ~ reArgs:", reArgs)
    // this ：原函数（原函数.myBind）
    //3. 合并绑定和新传入的参数，注意先后顺序
    console.log("🚀 ~ file: 03_bind.js:9 ~ return ~ this:", this)
    return this.call(thisArg, ...args, ...reArgs);
  };
}

Function.prototype.myBind = myBind;

// ------------- 测试代码 ----------------

globalThis.c = 10;
const obj = { c: 1 };
function add(numA, numB) {
  console.log(this);
  console.log(numA, numB);
  return numA + numB + this.c;
}
const res1 = add.myBind(obj, 1, 2);
console.log("🚀 ~ file: 03_bind.js:25 ~ res1:", res1());
const res2 = add.myBind(null, 1, 2);
console.log("🚀 ~ file: 03_bind.js:25 ~ res2:", res2);
