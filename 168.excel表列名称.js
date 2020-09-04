/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let res = '';
  function getStr(n) {
    return String.fromCharCode(64 + (n || 26));
  } 
  while (n >= 1) {
    res = getStr(n % 26) + res;

    if (n % 26 === 0) {
      n = n -1;
    }

    if (n === 26) {
      break;
    }
    n = Math.floor(n / 26);
  }

  return res;
};
// @lc code=end

