/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let pre = null,
    count = 0;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (count === 0) {
      pre = nums[i];
    }

    count += pre === nums[i] ? 1 : -1;
  }

  return pre;
};
// @lc code=end

/**
 * 投票算法
 *
 * 不相同就抵消，相同就加一，最后剩下的肯定是超过1/2数量的数
 */
