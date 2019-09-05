/*
 * @Author: xuhuan
 * @Date: 2019-08-27 23:11:02
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-08-27 23:19:46
 * @Description: 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

  const length = nums.length;
  nums.push(-Infinity);
  
  for (let index = 0; index < length; index++) {
    if (nums[index] > nums[index + 1]) {
      return index;
    }
  }
};

console.log(findPeakElement([1,2,3,4]));


