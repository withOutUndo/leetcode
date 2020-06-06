/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let length = s.length;
  let i = 0;
  let res = 0;
  let arr = [];
  while (i < length) {
    let index = arr.findIndex(item => item === s[i]);
    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(s[i])
    res = Math.max(res, arr.length);
    i++;
  }

  return res;
};

console.log(lengthOfLongestSubstring('abcadefe'));
console.log(lengthOfLongestSubstring('abc'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('aa'));
