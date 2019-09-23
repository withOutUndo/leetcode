/*
 * @Author: xuhuan
 * @Date: 2019-09-23 13:05:04
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-09-23 13:13:36
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

  let fn = (dp, len, start) => {
    for (let index = start; index < len; index++) {
      const element = nums[index];
      dp[index] = Math.max(element + (dp[index - 2] || 0), dp[index - 1]);
    }
    return dp[len - 1] || dp[0];
  };

  let res1 = fn([nums[0], nums[0]], len - 1, 2);
  let res2 = fn([0], len, 1);

  return Math.max(res1, res2);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 3, 2]));
console.log(rob([0]));
