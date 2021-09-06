/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const mid = ((r - l) >> 1) + l;

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};
// @lc code=end
