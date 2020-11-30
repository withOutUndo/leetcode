/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function (S) {
  if (S.length === 0) return '';
  let arr = S.split('').reduce((pre, cur) => {
    let code = cur.charCodeAt() - 97;
    pre[code] = (pre[code] || 0) + 1;
    return pre;
  }, []);

  let max =arr.reduce((pre, cur) => pre > cur ? pre : cur, 0);

  if (max > Math.ceil(S.length / 2)) {
    return '';
  }

  let idx = arr.findIndex(i => i === max);

  let resArr = [];
  let index = 0;
  while (max) {
    resArr[index] = String.fromCharCode(idx + 97);
    index += 2;
    max--;
  }
  delete arr[idx];

  arr.forEach((i, idx) => {
    while (i) {
      if (index > S.length - 1) {
        index = 1;
      }
      resArr[index] = String.fromCharCode(idx + 97);
      index += 2;
      i--;
    }
  })

  return resArr.join('');
};
// @lc code=end

console.log(reorganizeString('vvvlo'));