interface SaleOffices {
  clientList: any[];
  listen: (any) => void;
  trigger: () => void;
}
const saleOffices: Partial<SaleOffices> = {}; // 定义售楼处

saleOffices.clientList = []; // 缓存列表，存放订阅者的回调函数

saleOffices.listen = function (fn) {
  // 增加订阅者
  this.clientList.push(fn); // 订阅的消息添加进缓存列表
};

saleOffices.trigger = function () {
  // 发布消息
  for (let i = 0, fn; (fn = this.clientList[i++]); ) {
    fn.apply(this, arguments); // arguments是发布消息时带上的参数
  }
};

saleOffices.listen(function (price, squareMeter) {
  // 小明订阅消息
  console.log("价格= " + price);
  console.log("squareMeter= " + squareMeter);
});
saleOffices.listen(function (price, squareMeter) {
  // 小红订阅消息
  console.log("价格= " + price);
  console.log("squareMeter= " + squareMeter);
});
saleOffices.trigger(2000000, 88); // 输出：200万，88平方米
saleOffices.trigger(3000000, 110); // 输出：300万，110平方米
