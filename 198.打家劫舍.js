/*
 * @Author: xuhuan
 * @Date: 2019-09-23 12:34:31
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-09-23 12:55:43
 * @Description:
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let len = nums.length;
  if (!len) {
    return 0;
  }
  let dp = [nums[0]];
  
  for (let index = 1; index < len; index++) {
    const element = nums[index];
    dp[index] = Math.max(element + (dp[index - 2] || 0), dp[index - 1]);
  }
  return dp[len - 1];
};

console.log(rob([1, 2, 3, 4, 5]));
