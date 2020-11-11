/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  // let index = undefined;
  const swap = (m, n) => {
      [nums[m], nums[n]] = [nums[n], nums[m]];
  }
  while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
  }
  if (i >= 0) {
      let j = nums.length - 1;
      while (nums[j] <= nums
      [i]) {
          j--;
      }
      swap(i, j);
  }
  for (let count = 1; count < (nums.length - i) / 2; count++) {
      swap(count + i, nums.length - count);
  }
};
// @lc code=end
