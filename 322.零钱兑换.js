/*
 * @Author: xuhuan
 * @Date: 2019-09-25 12:44:09
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-09-26 08:59:33
 * @Description:
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount < 1) {
    return 0;
  }
  let dp = new Array(amount + 1).fill(amount + 1);
  coins.map(i => (dp[i] = 1));

  for (let i = 1; i < amount + 1; i++) {
    coins.map(j => (dp[i] = Math.min(dp[i], dp[i - j] + 1 || dp[i])));
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 100));
console.log(coinChange([2], 3));
