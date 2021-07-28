/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === 0) return 0;
  if (dividend === divisor) return 1;
  if (dividend === -divisor) return -1;
  if (divisor === 1) return dividend;
  let max = 2 ** 31;
  if (divisor === -1) {
    if(dividend > -max) {
      return -dividend;
    }
    return max - 1;
  };
  let flag = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? null : true;
  dividend = dividend < 0 ? dividend : -dividend;
  divisor = divisor < 0 ? divisor : -divisor;

  let fn = (a, b) => {
    if (a > b) return 0;
    let count = 0;
    let pre = 0;
    while (a <= b) {
      pre = b;
      b = b + b;
      count = count + count || 1;
    }
    return count + fn(a - pre, divisor);
  }

  let res = fn(dividend, divisor);
  res >= 2 ** 31 - 1 && (res = 2 ** 23 - 1);
  return flag ? -res : res;
};

// @lc code=end

// console.log(divide(2 ** 31 -10, -3));
console.log(divide(-2147483648,
2));