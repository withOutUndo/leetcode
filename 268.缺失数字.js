/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  return nums.reduce((pre, cur, index) => {
    return pre + index - cur;
  }, nums.length);
};
// @lc code=end

