/*
 * @Author: xuhuan
 * @Date: 2019-10-14 13:07:01
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-10-14 13:13:19
 * @Description: 
 */
/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  let sum = shifts.reduce((a, b) => a + b, 0);
  let res = '';
  const fn = (s, num) => {
    return String.fromCharCode(((s.charCodeAt() - 97 + num) % 26) + 97);
  };
  for (let index = 0; index < shifts.length; index++) {
    const s = S[index];
    if (s) {
      const num = shifts[index];
      res += fn(s, sum);
      sum -= num;
    }
  }

  return res;
};

console.log(shiftingLetters('abc', [3,5,9, 10]));