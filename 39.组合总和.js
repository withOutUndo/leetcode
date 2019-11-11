/*
 * @Author: xuhuan
 * @Date: 2019-11-07 19:04:42
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-11-07 21:32:59
 * @Description:
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let res = [];

  var fn = (arr, t, i) => {
    let ele = candidates[i];

    if (t === ele) {
      res.push([...arr, t]);
      return;
    }

    if (t < ele || i === candidates.length) {
      return;
    }

    fn([...arr, ele], t - ele, i);
    fn([...arr], t, i + 1);
  };

  candidates = candidates.sort((a, b) => a - b);
  fn([], target, 0);

  return res;
};

console.log(combinationSum([2, 3, 6, 7], 8));
