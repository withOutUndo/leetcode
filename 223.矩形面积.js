/*
 * @lc app=leetcode.cn id=223 lang=javascript
 *
 * [223] 矩形面积
 */

// @lc code=start
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  const aX = ax2 - ax1;
  const aY = ay2 - ay1;

  const bX = bx2 - bx1;
  const bY = by2 - by1;

  const cX = Math.max(0, Math.min(ax2, bx2) - Math.max(ax1, bx1));
  const cY = Math.max(0, Math.min(ay2, by2) - Math.max(ay1, by1));

  return aX * aY + bX * bY - (cX > 0 && cY > 0 ? cX * cY : 0);
};
// @lc code=end

let ax1 = -2,
  ay1 = -2,
  ax2 = 2,
  ay2 = 2,
  bx1 = -2,
  by1 = -2,
  bx2 = 2,
  by2 = 2;

const r = computeArea(
  (ax1 = -3),
  (ay1 = 0),
  (ax2 = 3),
  (ay2 = 4),
  (bx1 = 0),
  (by1 = -1),
  (bx2 = 9),
  (by2 = 2)
);

console.log(r);
