/*
 * @Author: xuhuan
 * @Date: 2019-09-20 13:14:34
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-09-20 13:22:37
 * @Description:
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const length = nums.length;
  let res = Number.MIN_SAFE_INTEGER;
  let max = 1;
  let min = 1;
  for (let i = 0; i < length; i++) {
    if (nums[i] < 0) {
      let tep = max;
      max = min;
      min = tep;
    }
    max = Math.max(max * nums[i], max);
    min = Math.min(min * nums[i], min);
    console.log(max, min);
    res = Math.max(max, res);
  }
  return res;
};

console.log(maxProduct([-2, -3, 4, -5, 6]));
