/*
 * @Author: xuhuan
 * @Date: 2019-11-07 18:38:19
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-11-07 18:40:09
 * @Description:
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = [-1, -1];

  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (n > target) {
      return res;
    }
    if (target === n) {
      if (res[0] === -1) {
        res[0] = i;
      }
      res[1] = i;
    }
  }

  return res;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
