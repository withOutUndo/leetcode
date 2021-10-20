/*
 * @lc app=leetcode.cn id=453 lang=typescript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
function minMoves(nums: number[]): number {
  const length = nums.length;
  let min = nums.reduce((a, b) => a > b ? b : a, Infinity);

  return nums.reduce((a, b) => a + b - min,0);
};
// @lc code=end

