/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return /(?:^[A-Z]+$)|(?:^[a-z]+$)|(?:^[A-Z][a-z]+$)/.test(word);
};
// @lc code=end
