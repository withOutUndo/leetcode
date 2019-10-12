/*
 * @Author: xuhuan
 * @Date: 2019-10-10 20:14:33
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-10-10 20:15:07
 * @Description: 
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let a = 0;
  let b = 1;
  let res = 0;

  for (let index = 0; index < n; index++) {
    res = a + b;
    a = b;
    b = res;
  }
  
  return res;
};


console.log(climbStairs(20));