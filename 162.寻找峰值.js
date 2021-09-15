/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const length = nums.length;
  nums.push(-Infinity);

  for (let index = 0; index < length; index++) {
    if (nums[index] > nums[index + 1]) {
      return index;
    }
  }
};
// @lc code=end
