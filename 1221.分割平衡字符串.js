/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let countL = 0;
  let res = 0;
  const length = s.length;

  for (let index = 0; index < length; index++) {
    const a = s[index];
    if (a === "L") {
      countL += 1;
    } else {
      countL -= 1;
    }

    if (!countL) {
      res += 1;
    }
  }

  return res;
};
// @lc code=end
