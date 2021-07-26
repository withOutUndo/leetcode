/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

  const length = nums.length;
  let dp = nums.map(_ => 1);
  dp[0] = 1;
  let res = 1;
  for (let index = 1; index < length; index++) {
    const item = nums[index];
    for (let j = index - 1; j >= 0; j--) {
      if (nums[j] < item) {
        dp[index] = Math.max(dp[j] + 1, dp[index]);
      }
    }
    
    res = Math.max(res, dp[index]);
  }

  return res;
};
// @lc code=end

