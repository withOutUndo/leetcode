/*
 * @lc app=leetcode.cn id=1711 lang=javascript
 *
 * [1711] 大餐计数
 */

// @lc code=start
/**
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
  const max =
    deliciousness.reduce((pre, cur) => {
      return cur > pre ? cur : pre;
    }, 0) * 2;

  let vArr = [];
  let i = 1;
  while (i <= max) {
    vArr.push(i);
    i = i << 1;
  }

  let vMap = {};
  let res = 0;
  const mod = 10 ** 9 + 7;

  for (let index = 0; index < deliciousness.length; index++) {
    const element = deliciousness[index];

    vArr.forEach((i) => {
      res = (res + (vMap[i - element] || 0)) % mod;
    });

    vMap[element] = (vMap[element] || 0) + 1;
  }

  return res;
};
// @lc code=end
