/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let length = columnTitle.length;

  if (!length) {
    return;
  }

  return columnTitle
    .split("")
    .map((i) => String.prototype.charCodeAt.call(i) - 64)
    .reduce((pre, cur, index) => {
      return pre + cur * 26 ** (length - index - 1);
    }, 0);
};
// @lc code=end
