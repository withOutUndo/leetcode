/*
 * @lc app=leetcode.cn id=1838 lang=javascript
 *
 * [1838] 最高频元素的频数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums = nums.sort((a, b) => a - b);

  let l = 0,
    r = 1, res = 1;
  const length = nums.length;
  while (r < length) {
    const a = (nums[r] - nums[r - 1]) * (r - l);
    if (k>= a) {
      r++;
      k-=a;
      res = Math.max(res, r - l);
    } else {
      k+= (nums[r - 1] - nums[l]);
      l++;
    }

  }
  return res;
};
// @lc code=end
