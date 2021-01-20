/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  /**
   * a<b最小的两个数
   * c<d<e
   */
  let a = Infinity,
    b = Infinity,
    c = -Infinity,
    d = -Infinity,
    e = -Infinity;

  nums.forEach((i) => {
    if (i >= e) {
      c = d;
      d = e;
      e = i;
    } else if (i >= d) {
      c = d;
      d = i;
    } else if (i >= c) {
      c = i;
    }
    if (i <= a) {
      b = a;
      a = i;
    } else if (i <= b) {
      b = i;
    }
  });

  return Math.max(a * b * e, c * d * e);
};
// @lc code=end
console.log(maximumProduct([2, 3, -1]));
console.log(maximumProduct([-100, -2, -3, 1]));
