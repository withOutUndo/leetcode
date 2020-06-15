/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (!s.length) {
    return 0;
  }
  let dp = [];
  s.split('').forEach((cur, index) => {
    const preItem = s[index - 1];
    const i = dp[index - 2] === undefined ? 1 : dp[index - 2];
    const j = dp[index - 1] === undefined ? 1 : dp[index - 1];
    let num = Number(preItem + cur);
    if (num === 0) {
      return dp[index] = 0;
    }
    if (cur === '0') { 
      if (num > 9 && num < 27) {
        return dp[index] = i;
      } else {
        return dp[index] = 0;
      }
    }
    if (preItem === '0') {
      return dp[index] = j;
    }
    if (num < 27) {
      return dp[index] = i + j;
    } else {
      return dp[index] = j;
    }
  });
  // console.log(dp);
  return dp[s.length - 1];
};

console.log(numDecodings('12341212121212121212121212121212') === 1542687);
console.log(numDecodings('012'));
console.log(numDecodings('19012'));
console.log(numDecodings('1000001'));
console.log(numDecodings('10000'));
console.log(numDecodings('110'));