/*
 * @lc app=leetcode.cn id=639 lang=javascript
 *
 * [639] 解码方法 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let len = s.length;
  let arr = new Array(len).fill(1);
  const mod = 10 ** 9 + 7;

  if (s[0] === "0" || s.match(/[03-9]0/)) {
    return 0;
  }

  arr[0] = s[0] === "*" ? 9 : 1;

  for (let i = 1; i < len; i++) {
    const pre = s[i - 1];
    const cur = s[i];

    if (pre === "*" && cur === "*") {
      arr[i] = arr[i - 1] * 9 + (arr[i - 2] || 1) * 15;
    } else if (pre !== "*" && cur === "*") {
      let b = 1;
      if (pre === "1") {
        b = 9 * (arr[i - 2] || 1);
      } else if (pre === "2") {
        b = 6 * (arr[i - 2] || 1);
      } else {
        b = 0;
      }
      arr[i] = arr[i - 1] * 9 + b;
    } else if (pre === "*" && cur !== "*") {
      const map = {
        0: 2,
        1: 2,
        2: 2,
        3: 2,
        4: 2,
        5: 2,
        6: 2,
        7: 1,
        8: 1,
        9: 1,
      };
      arr[i] = (cur === "0" ? 0 : arr[i - 1]) + (arr[i - 2] || 1) * map[cur];
    } else {
      const a = cur !== "0" ? arr[i - 1] : 0;
      let b;
      if (cur === "0") {
        b = arr[i - 2] || 1;
      } else if (pre === "0") {
        b = 0;
      } else {
        b = Number(pre + cur) <= 26 ? arr[i - 2] || 1 : 0;
      }
      arr[i] = a + b;
    }

    arr[i] = arr[i] % mod;
  }

  return arr[len - 1];
};
// @lc code=end

let a = numDecodings("1003");

console.log(a);
