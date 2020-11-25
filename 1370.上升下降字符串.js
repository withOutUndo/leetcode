/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  let res = '';
  let count = s.length;
  let map = new Array(26).fill(0);

  const getCode = s => s.charCodeAt() - 97;

  for(let i = 0; i < count; i++) {
    map[getCode(s[i])] += 1;
  }
  let index = 0;
  let flag = 1;
  while(count) {
    while(!map[index]) {
      if(index > 25) flag = -1;
      if(index < 0) flag = 1;
      index += flag;
    }
    res += String.fromCharCode(index + 97);
    map[index]--;
    index += flag;
    count--;
  }

  return res;
};
// @lc code=end

console.log(sortString('acb'));