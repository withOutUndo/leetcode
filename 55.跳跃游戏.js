/*
 * @Author: xuhuan
 * @Date: 2019-11-11 23:28:37
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-11-12 13:05:06
 * @Description:
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let length = nums.length;
  let dp = [];
  dp[length - 1] = true;

  for (let index = length - 2; index > -1 ; index--) {
    let n = nums[index];

    while (n > 0) {
      console.log(n);
      if (dp[Math.min(n + index, length - 1)]) {
        dp[index] = true;
        break;
      }
      n--;
    }
  }

  return dp[0] === true;
};

console.log(canJump([ 2, 3, 1, 1, 4 ]));
console.log(canJump([ 3, 2, 1, 0, 4 ]));