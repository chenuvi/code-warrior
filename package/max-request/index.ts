// 前端面试题 - 7. 实现一个批量请求函数, 能够限制并发量?

// 思路：promise.all
// promise.all实现并行

// resolve success实现全部返回

// curr实现游标遍历

// remain max实现最大并行数控制

import { Result, Urls } from "./type";

class MultiRequest {
  private max: number = 3;
  private queue: Urls = [];
  private curr: number = 0;

  constructor(urls: Urls = [], max: number = 6) {
    this.queue = [...urls];
    this.max = max;
  }

  private ajax(url: string, timeout = 0): Promise<Result> {
    // 用AbortController控制超时
    const control = new AbortController();
    const id = setTimeout(() => control.abort, timeout);
    // 用fetch创建一个异步请求任务
    const promise = fetch(url, { signal: control.signal })
      .then((res) => res.json())
      .then((jsonRes) => {
        return {
          result: jsonRes,
          url,
          success: true,
        };
      })
      .catch((error) => {
        return {
          success: false,
          url,
          result: error,
        };
      })
      .finally(() => {
        clearTimeout(id);
      });

    return promise;
  }

  private pick(remain: Urls): Urls {
    let count = remain.length;
    let length = this.queue.length;
    const todo = remain;

    while (count < this.max && this.curr < length) {
      const ele = this.queue[this.curr++];
      if (!ele) {
        break;
      }
      count++;
      todo.push(ele);
    }
    return todo;
  }

  public next(results: Result[] = []) {
    const remain = results
      .filter((i) => !i.success)
      .map((result) => result.url);
    const todo = this.pick(remain);
    if (todo.length) {
      console.log(`batch: ${String(todo)}`);
      Promise.all(
        todo.map((url) => {
          return this.ajax(url);
        })
      ).then((arr) => {
        this.next(arr);
      });
    }
  }

  public add(url: string) {
    console.log("add url: ", url);
    url && this.queue.push(url);
  }

  public run() {
    this.next(undefined);
  }
}
