/*
 * @lc app=leetcode.cn id=517 lang=javascript
 *
 * [517] 超级洗衣机
 */

// @lc code=start
/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (machines) {
  const sum = machines.reduce((a, b) => a + b, 0);
  const len = machines.length;

  if (sum % len !== 0) {
    return -1;
  }

  const avg = (sum / len) | 0;
  let res = 0,
    s = 0;

  machines.forEach((i) => {
    i = i - avg;
    s += i;
    res = Math.max(res, Math.abs(s), i);
  });

  return res;
};
// @lc code=end
