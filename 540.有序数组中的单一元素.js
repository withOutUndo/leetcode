/*
 * @Author: xuhuan
 * @Date: 2019-09-10 13:03:22
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-09-10 13:10:17
 * @Description:
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  const length = nums.length;

  for (let index = 0; index < length; index += 2) {
    if (nums[index] !== nums[index + 1]) {
      return nums[index];
    }
  }
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
