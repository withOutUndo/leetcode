/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b !== 0) {
    const c = (a & b) << 1;
    a = a ^ b;
    b = c;
  }

  return a;
};
// @lc code=end

/**
 * 解题思路
 *
 * 位运算
 *
 * 1、转换为二进制相加时，
 *   (10101)2  a
 *  +(01010)2  b
 *  =(11111)2  a ^ b;
 *
 *   (00010)2  a
 *  +(00010)2  b
 *  =(00100)2  (a & b) << 1
 *
 * 所以该题分别处理进位与不进位即可
 */
