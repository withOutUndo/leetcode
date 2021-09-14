/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */

var findLongestWord = function (s, dictionary) {
  const len = s.length;
  /**
   * 用于存储当前位置的所有下一个字母的位置
   */
  const map = new Array(len + 1).fill(null).map((i) => new Array(26).fill(len));

  for (let i = len - 1; i >= 0; i--) {
    const c = s[i].charCodeAt() - 97;

    for (let j = 0; j < 26; j++) {
      if (j === c) {
        map[i][j] = i;
      } else {
        map[i][j] = map[i + 1][j];
      }
    }
  }

  return dictionary.reduce((pre, cur) => {
    let i = 0,
      j = 0;
    while (i < cur.length) {
      const n = map[j][cur[i].charCodeAt() - 97];
      if (n === len) {
        return pre;
      }

      /**
       * 继续寻找下一个字母
       */
      j = n + 1;
      i++;
    }

    return cur.length > pre.length || (pre.length === cur.length && cur.localeCompare(pre) < 0) ? cur : pre;
  }, "");
};
// @lc code=end
