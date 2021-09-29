/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
  let arr = Array.from(N.toString());
  let len = arr.length;

  let index;
  // 找到第一位开始下降的索引位置
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      index = i;
      break;
    }
  }

  // 本身就是单调递增
  if (index === undefined) {
    return N;
  }

  // 把当前位置减一，与index - 1位比较，不满足则继续往前找
  while (index > 0) {
    if (arr[index] - 1 < arr[index - 1]) {
      index--;
    } else {
      break;
    }
  }

  // 必须要第0位减一，那么直接返回9{1,}
  if (index === 0 && arr[0] === "1") {
    return 10 ** (len - 1) - 1;
  }

  // 中间位置，则当前位置减一，后续位置置位9
  arr[index] = arr[index] - 1;
  for (let i = index + 1; i < len; i++) {
    arr[i] = "9";
  }

  return Number(arr.join(""));
};
// @lc code=end

console.log(monotoneIncreasingDigits(111110) === 99999);
console.log(monotoneIncreasingDigits(11111) === 11111);
console.log(monotoneIncreasingDigits(10) === 9);
console.log(monotoneIncreasingDigits(123331) === 122999);
