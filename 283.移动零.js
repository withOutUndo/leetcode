/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0, j = i + 1;

  for (; i <= nums.length - 1 && j <= nums.length - 1; i++) {
    const ele = nums[i];
    if (ele === 0) {
      while (nums[j] === 0) {
        j++;
      }
      if (j <= nums.length - 1) {
        nums[i] = nums[j];
        nums[j] = 0;

      }
    } else {
      j++;
    }
  }
};

moveZeroes([4,2,4,0,0,3,0,5,1,0]);
// @lc code=end

