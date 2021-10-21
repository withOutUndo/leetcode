/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let i = digits.length - 1;
  let mod = 1;

  while (mod && i > -1) {
    const sum = digits[i] + mod;
    if (sum > 9) {
      mod = (sum / 10) | 0;
      digits[i] = sum % 10;
    } else {
      mod = 0;
      digits[i] = sum;
    }
    i--;
  }

  if (mod) {
    digits.unshift(mod);
  }

  return digits;
}
// @lc code=end

console.log(plusOne([9,9,9,9]))