/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  return nums.sort((a, b) => {
    return Number('' + b + a) - Number('' + a + b);
  }).join('').replace(/^0*/, '') || '0';
};
// @lc code=end

