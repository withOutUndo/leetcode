/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let left = [];
  let right = [];

  nums.reduceRight((pre, cur) => {
    right.unshift(pre);
    return pre * cur;
  }, 1);

  nums.reduce((pre, cur, index) => {
    left.push(pre * right[index]);
    return pre * cur;
  }, 1);

  return left;
};

console.log(productExceptSelf([1, 2, 3, 4]));
