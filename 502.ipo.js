/*
 * @lc app=leetcode.cn id=502 lang=javascript
 *
 * [502] IPO
 */

// @lc code=start
// 默认最大堆
const defaultCmp = (x, y) => x > y;
// 交换元素
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
// 堆类，默认最大堆
class Heap {
  constructor(cmp = defaultCmp) {
    this.container = [];
    this.cmp = cmp;
  }
  // 插入
  insert(data) {
    const { container, cmp } = this;
    container.push(data);
    let index = this.size() - 1;
    while (index) {
      let parent = (index - 1) >> 1;
      if (!cmp(container[index], container[parent])) {
        return;
      }
      swap(container, index, parent);
      index = parent;
    }
  }
  // 弹出堆顶，并返回
  pop() {
    const { container, cmp } = this;
    if (!this.size()) {
      return null;
    }

    swap(container, 0, this.size() - 1);
    const res = container.pop();
    const length = this.size();
    let index = 0,
      exchange = index * 2 + 1;

    while (exchange < length) {
      // 以最大堆的情况来说：如果有右节点，并且右节点的值大于左节点的值
      let right = index * 2 + 2;
      if (right < length && cmp(container[right], container[exchange])) {
        exchange = right;
      }
      if (!cmp(container[exchange], container[index])) {
        break;
      }
      swap(container, exchange, index);
      index = exchange;
      exchange = index * 2 + 1;
    }

    return res;
  }
  // 获取堆大小
  size() {
    return this.container.length;
  }
}

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  const n = capital.length;
  const list = capital
    .map((i, index) => [i, profits[index]])
    .sort((a, b) => a[0] - b[0]);

  let queue = new Heap();

  let i = 0;
  while (k-- > 0) {
    while (i < n && list[i][0] <= w) {
      queue.insert(list[i][1]);
      i++;
    }
    if (!queue.size()) {
      break;
    }
    w += queue.pop();
  }
  return w;
};
// @lc code=end
