class Event {
  constructor() {
    this.events = {};
  }
  // 绑定
  on(eventName, cb) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events.eventName.push(cb);
  }

  // 解绑
  off(eventName, cb) {
    if (!this.events[eventName]) return;
    if (!cb) {
      delete this.events[eventName];
      return;
    }
    this.events[eventName] = this.events[eventName].filter((fn) => fn !== cb);
  }

  once(eventName, cb) {
    const onceCb = (...args) => {
      cb(...args);
      this.off(eventName, onceCb);
    };
    this.on(eventName, onceCb);
  } // 绑定一次

  // 触发事件
  trigger(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    this.events.eventName.forEach((cb) => {
      cb(...args);
    });
  }
}
