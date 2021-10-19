/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let i = 1;
  while (i <= 30 && num >= 1 << i) {
    i++;
  }

  const a = i === 31 ? 0x7fffffff : (1 << i) - 1;

  return num ^ a;
};
// @lc code=end

// var a = findComplement(3247923);
var a = findComplement(1);
console.log(findComplement(1));
console.log(findComplement(2));
console.log(findComplement(4));
console.log(findComplement(8));
console.log(findComplement(16));
console.log(findComplement(1 << 30));

console.log(a);
