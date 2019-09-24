/*
 * @Author: xuhuan
 * @Date: 2019-09-24 12:49:57
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-09-24 14:15:08
 * @Description: 
 */
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  if (n === 1) {
    return 0;
  }
  let flag = 2;
  let res = 0;
  while (flag <= Math.sqrt(n)) {
    if (n % flag === 0) {
      res += flag;
      n = n / flag;
      flag = 2;
    } else {
      flag++;
    }
  }

  return res + n;
};

console.log(minSteps(1));
console.log(minSteps(2));
console.log(minSteps(3));
console.log(minSteps(4));
console.log(minSteps(1000));
console.log(minSteps(1001));
console.log(minSteps(1002));
console.log(minSteps(1003));
console.log(minSteps(1004));
