/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const length = nums.length;
  let res = 0;
  // 第0位置为0；确保dp[i]===k的数据
  let dp = [0];
  let cache = {};

  for (let i = 1; i <= length; i++) {
    dp[i] = (dp[i - 1] || 0) + nums[i - 1];
  }

  for (let index = 0; index < dp.length; index++) {
    if (cache[dp[index] - k]) {
      res += cache[dp[index] - k];
    }
    cache[dp[index]] = (cache[dp[index]] || 0) + 1;
  }

  return res;
};
