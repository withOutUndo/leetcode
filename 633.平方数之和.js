/*
 * @Author: xuhuan
 * @Date: 2019-08-21 13:07:09
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-08-21 13:11:24
 * @Description: 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let max = Math.sqrt(c) * Math.sqrt(0.5);

  for (let i = 0; i <= max; i++) {
    let j = Math.sqrt(c - i * i);
    if (parseInt(j) === j) {
      return true;
    }
  }
  return false;
};

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(25));
console.log(judgeSquareSum(24));