/*
 * @lc app=leetcode.cn id=1104 lang=javascript
 *
 * [1104] 二叉树寻路
 */

// @lc code=start
/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function (label) {
  let h = Math.ceil(Math.log2(label + 1));

  let res = [label];

  while (h > 1) {
    label = ((1 << (h - 1)) + (1 << h) - 1 - label) >> 1;
    res.unshift(label);
    h--;
  }

  return res;
};
// @lc code=end
pathInZigZagTree(1);
