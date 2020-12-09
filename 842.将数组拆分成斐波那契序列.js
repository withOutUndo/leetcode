/*
 * @lc app=leetcode.cn id=842 lang=javascript
 *
 * [842] 将数组拆分成斐波那契序列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function (S) {
  let max = 2 ** 31 - 1;
  const dfs = (res, index) => {
    let num = 0;
    let length = res.length;
    const sum = res[length - 1] + res[length - 2];
    if (index > S.length - 1 && res.length > 2) {
      return res;
    }
    for (let count = 0; count < 10 && index + count < S.length; count++) {
      num = num * 10 + Number(S[index + count]);
      if (!isNaN(sum) && sum < num) {
        break;
      }
      if(num > max) {
        break;
      }
      if (length < 2 || sum === num) {
        let r = dfs(res.concat(num), index + count + 1);
        if (r) {
          return r;
        }
      }
      if (count === 0 && S[index + count] === '0') {
        count = 10;
      }
    }
  };

  return dfs([], 0) || [];
};

// @lc code=end

console.log(splitIntoFibonacci("0123"));
