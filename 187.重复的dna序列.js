/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const map = {
    A: 0,
    C: 1,
    G: 2,
    T: 3,
  };

  let num = 0;

  const L = 10,
    len = s.length;

  for (let i = 0; i < L - 1; i++) {
    num = (num << 2) | map[s[i]];
  }

  const cache = {};
  const res = [];

  for (let i = L - 1; i < len; i++) {
    num = ((num << 2) & ((1 << L * 2) - 1)) | map[s[i]];
    cache[num] = (cache[num] || 0) + 1;
    if (cache[num] === 2) {
      res.push(s.slice(i - L + 1, i + 1));
    }
  }

  return res;
};
// @lc code=end

/**
 * 使用20位2进制数来存储一个10位字母的序列。
 * 
 * 加一位字母
 * (num << 2) | map[s[i]]
 * 
 * 取后20位
 * 按位与上(1 << 20) - 1
 * 
 */

const a = findRepeatedDnaSequences("AAAAAAAAAAAAA");

console.log(a);
