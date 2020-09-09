/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let arr = s.split('');
  let i = 0, j = arr.length - 1;
  const reg = /[a-zA-Z0-9]/;
  while (arr.length) {
    while (!reg.test(arr[0]) && arr.length) {
      arr.shift();
    }
    while (!reg.test(arr[arr.length - 1]) && arr.length) {
      arr.pop();
    }
    if (!arr.length) {
      break;
    }
    if (arr[0].toLowerCase() !== arr[arr.length - 1].toLowerCase()) {
      return false;
    }
    arr.shift();
    arr.pop();
  }

  return true;
};
// @lc code=end

