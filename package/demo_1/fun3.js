// 设计一个flat函数将如下数组arr=[1,2,['3',4,'5',[6,[7,8],9]]]输出为1,2,'3',4,'5',6,7,8,9。
// 要求不能改变数组中的原始数据类型
const arr = [1, 2, ["3", 4, "5", [6, [7, 8], 9]]];
function my_flat(arr) {
  if (!Array.isArray(arr)) return;
  let res = [];
  arr.forEach((item, index) => {
    if (Array.isArray(item)) {
      res = res.concat(my_flat(item));
    } else {
      res.push(item);
    }
  });
  return res;
}
const res = my_flat(arr);
console.log("🚀 ~ file: fun3.js:17 ~ res:", res);
