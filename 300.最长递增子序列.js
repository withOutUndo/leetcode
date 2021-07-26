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
var lengthOfLIS = function (nums) {
  const length = nums.length;
  let dp = nums.map((_) => 1);
  let arr = [0];
  dp[0] = 1;
  let res = 1;
  for (let index = 0; index < length; index++) {
    const item = nums[index];

    let l = 0,
      r = arr.length - 1;
    while (l < r) {
      let mid = (l + r + 1) >> 1;
      if (arr[mid] < item) {
        l = mid;
      } else {
        r = mid - 1;
      }
    }

    dp[index] = r + 1;
    arr[dp[index]] = Math.min(arr[dp[index]] || Infinity, item);

    res = Math.max(res, dp[index]);
  }

  return res;
};
// @lc code=end

lengthOfLIS([0,0,0,0,0]);
