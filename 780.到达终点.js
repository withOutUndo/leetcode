/*
 * @lc app=leetcode.cn id=780 lang=javascript
 *
 * [780] 到达终点
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
  while (tx >= sx && ty >= sy) {
    if (sx == tx && sy == ty) return true;

    if (tx > ty) {
      if (ty > sy) tx %= ty;
      else return (tx - sx) % ty == 0;
    } else {
      if (tx > sx) ty %= tx;
      else return (ty - sy) % tx == 0;
    }
  }
  return false;
};
// @lc code=end

console.log(reachingPoints(1, 14, 999999996, 14));
console.log(reachingPoints(1, 1, 3, 5));
