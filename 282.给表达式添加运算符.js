/*
 * @lc app=leetcode.cn id=282 lang=javascript
 *
 * [282] 给表达式添加运算符
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  const len = num.length;

  const res = [];
  const stack = [{
    // 当前项在str数组中的index,
    index: 0,
    // 当前项
    item: num[0],
    // 当前的运算符号
    symbol: "",
    // 当前入栈数据的index，主要用于在出栈的时候是否是num最后的一个字符了
    length: 1,
  }];
  // 暂时的数据，表示当前拼接的字符串
  const str = [];

  while (stack.length) {
    const { index, item, symbol, length } = stack.pop();
    str.length = index;
    str.push({item, symbol});
    if (length === len) {
      const arr = str
        .map((i) => ({ ...i, item: Number(i.item) }));
      let len = arr.length;

      let sum = 0;
      for (let i = 0; i < len; i++) {
        let { symbol, item } = arr[i];
        // 把所有的连续*号运算一起计算了
        while (i < len - 1 && arr[i + 1].symbol === '*') {
          item = Number(item * arr[i + 1].item)
          i++;
        }

        switch (symbol) {
          case '':
          case '+':
            sum = sum + item;
            break;
          case '-':
            sum = sum - item;
            break;
        }
      }
      if (sum === target) {
        res.push(str.map(i => i.symbol + i.item).join(''));
      }
    }
    const next = num[length];
    if (next) {
      const arr = ["+", "*", "-"];
      // 前一个字母不是0的话中就在前一个元素的基础上累加
      if (item !== "0") {
        stack.push({
          index: index,
          item: item + next,
          length: length + 1,
          symbol,
        });
      }
      stack.push(
        ...arr.map((i) => ({
          index: index + 1,
          length: length + 1,
          item: next,
          symbol: i,
        }))
      );
    }
  }

  return res;
};
// @lc code=end

let res = addOperators("1000000009", 9);
// let res = addOperators("105", 5);

console.log(res.length);
