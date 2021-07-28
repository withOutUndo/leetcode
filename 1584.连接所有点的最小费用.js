/*
 * @lc app=leetcode.cn id=1584 lang=javascript
 *
 * [1584] 连接所有点的最小费用
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const len = points.length;
  let visited = {};
  let dis = new Array(len).fill(Infinity);
  let res = 0;

  for (let i = 0; i < len - 1; i++) {
    let [x, y] = points[i];
    visited[i] = true;

    points.forEach((m, n) => {
      if (visited[n]) return;
      dis[n] = Math.min(dis[n], Math.abs(m[0] - x) + Math.abs(m[1] - y));
    });
    let minIndex = dis.reduce((pre, cur, index) => {
      if (cur < dis[pre]) {
        return index;
      }
      return pre;
    }, 0);
    res = res + dis[minIndex];
    dis[minIndex] = Infinity;
  }
  console.log(res);

  return res;
};
// @lc code=end
minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]].sort(() => Math.random() - 0.5));