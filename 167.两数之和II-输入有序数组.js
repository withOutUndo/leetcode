/*
 * @Author: xuhuan
 * @Date: 2019-09-18 12:06:20
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-09-18 12:38:28
 * @Description: 
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {


  const length = numbers.length;
  let left = 0;
  let right = length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    
    if(sum > target) {
      right -= 1;
    } else {
      left += 1;
    }
  }
};


console.log(twoSum([1,2,3,4,5,6,7], 9));