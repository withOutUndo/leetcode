/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stack = [];
  let i = 0;
  const baseK = k;
  num = num.split("");
  for (; i < num.length && k; i++) {
    while (num[i] < stack[0] && stack.length && k) {
      stack.shift();
      k--;
    }
    stack.unshift(num[i]);
  }
  let arr = stack
    .reverse()
    .concat(num.filter((_, index) => index >= i))
    .splice(0, num.length - baseK);

  while (arr[0] === "0" && arr.length > 1) {
    arr.shift();
  }

  return arr.join("") || "0";
};
// @lc code=end
