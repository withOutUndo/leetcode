/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const { mod, arr } = digits.reduceRight(
    (pre, cur) => {
      if (pre.mod) {
        let i = pre.mod + cur;
        let mod = i > 9 ? 1 : 0;
        return {
          arr: [i % 10, ...pre.arr],
          mod,
        };
      }
      return {
        arr: [cur, ...pre.arr],
      };
    },
    {
      arr: [],
      mod: 1,
    }
  );

  if (!mod) {
    return arr;
  }
  return [mod, ...arr];
};
// @lc code=end
