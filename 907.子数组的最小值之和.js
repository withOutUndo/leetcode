/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
  const len = A.length;
  let dp = new Array(len);
  let res = 0;
  let mod = 1000000007;
  for (let i = 0; i < len; i++) {
    dp[i] = [];
    for (let j = i; j < len; j++) {
      if (i === j) {
        dp[i][j] = A[i];
      } else {
        dp[i][j] = Math.min(dp[i][j - 1], A[j]);
      }
      res += dp[i][j];
      res %= mod;
    }
  }
  
  return res;
};