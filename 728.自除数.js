/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let res = [];

  const check = (num) => {
    let t = num;

    while (t) {
      let k = t % 10;
      t = (t / 10) | 0;
      if (num % k !== 0) {
        return false;
      }
    }

    return true;
  };

  for (let i = left; i <= right; i++) {
    if (check(i)) {
      res.push(i);
    }
  }

  return res;
};
// @lc code=end
