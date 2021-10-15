/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const genStr = (s) => {
    const len = s.length;
    let str = "";
    let num = 0;
    let pre = null;

    // <= len，是为了方便把最后的数字统计出来。
    for (let i = 0; i <= len; i++) {
      const a = s[i] || null;
      if (a !== pre) {
        str += (num ? `${num}${pre}` : "");
        num = 1;
        pre = a;
      } else {
        num++;
      }
    }

    return str;
  };

  let pre = '1';
  let i = 1;
  while (i < n) {
    pre = genStr(pre);
    i++;
  }

  return pre;
};
// @lc code=end

countAndSay(20);