/*
 * @lc app=leetcode.cn id=930 lang=javascript
 *
 * [930] 和相同的二元子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  return nums.reduce(
    (pre, cur) => {
      let { countMap, sum, result } = pre;
      sum = sum + cur;
      result = result + (countMap[sum - goal] || 0);
      countMap[sum] = (countMap[sum] || 0) + 1;
      return { countMap, sum, result };
    },
    { countMap: { 0: 1 }, sum: 0, result: 0 }
  ).result;
};
// @lc code=end
