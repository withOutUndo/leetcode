/*
 * @lc app=leetcode.cn id=788 lang=javascript
 *
 * [788] 旋转数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  const invalidMap = {
    3: true,
    4: true,
    7: true,
  };

  const requiredMap = {
    2: true,
    5: true,
    6: true,
    9: true,
  };
  const filter = (num) => {
    let count = 0;
    while (num) {
      let mod = num % 10;

      if (invalidMap[mod]) {
        return false;
      }

      if (requiredMap[mod]) {
        count++;
      }
      num = (num / 10) | 0;
    }
    return count > 0;
  };
  return new Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter(filter).length;
};
// @lc code=end
