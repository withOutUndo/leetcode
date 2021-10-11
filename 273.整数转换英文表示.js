/*
 * @lc app=leetcode.cn id=273 lang=javascript
 *
 * [273] 整数转换英文表示
 */

// @lc code=start
/**
 * @param {number} num
 * @return {let}
 */
var numberToWords = function (num) {
  const low = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const mid = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const high = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function buildNumber(num) {
    let a = num % 10;
    num = num / 10 | 0;
    let b = num % 10;
    num = num / 10 | 0;
    let c = num;
    let ans = "";
    if (c != 0) {
      ans = low[c] + " " + "Hundred ";
    }
    if (b == 1) {
      ans = ans + mid[a];
    } else if (b == 0) {
      ans = ans + low[a];
    } else {
      ans = ans + high[b] + " " + low[a];
    }
    return ans.trim() + " ";
  }

  if (num == 0) {
    return "Zero";
  }
  let part1 = num % 1000;
  num = num / 1000 | 0;
  let part2 = num % 1000;
  num = num / 1000 | 0;
  let part3 = num % 1000;
  num = num / 1000 | 0;
  let part4 = num;
  let ans = "";
  if (part4 != 0) {
    ans = buildNumber(part4) + "Billion ";
  }
  if (part3 != 0) {
    ans = ans + buildNumber(part3) + "Million ";
  }
  if (part2 != 0) {
    ans = ans + buildNumber(part2) + "Thousand ";
  }
  if (part1 != 0) {
    ans = ans + buildNumber(part1);
  }
  return ans.trim();
};
// @lc code=end

numberToWords(123124123)