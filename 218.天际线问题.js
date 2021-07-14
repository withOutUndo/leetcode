/*
 * @lc app=leetcode.cn id=218 lang=javascript
 *
 * [218] 天际线问题
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  const bds = buildings
    .reduce((pre, cur) => {
      const [l, r, h] = cur;
      pre.push([l, -h]);
      pre.push([r, h]);
      return pre;
    }, [])
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  return bds.reduce(
    (pre, cur) => {
      let { h, maxH, result } = pre;
      const [x, y] = cur;
      if (y < 0) {
        h.push(-y);
      } else {
        for (let index = 0; index < h.length; index++) {
          if (h[index] === y) {
            h[index] = 0;
            break;
          }
        }
      }

      const maxHeight = Math.max(...h);
      if (maxHeight !== maxH) {
        maxH = maxHeight;
        result.push([x, maxH]);
      }
      return { h, maxH, result };
    },
    { h: [], maxH: 0, result: [] }
  ).result;
};
// @lc code=end
