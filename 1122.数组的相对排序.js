/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let map = {};
  let res = [];
  arr1.forEach((i) => {
      map[i] = (map[i] || 0) + 1;
  });

  arr2.forEach(i => {
      for (let j = 0; j < map[i]; j++) {
          res.push(i);
      }
      delete map[i];
  })

  map.length = 1001;
  Array.from(map).forEach((i, index) => {
      for (let j = 0; j < i; j++) {
          res.push(index);
      }
  })

  return res;
};
// @lc code=end
