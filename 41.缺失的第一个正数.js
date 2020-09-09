/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.forEach(i => {
      res = i > 0 ? Math.min(res, i) : res;
    });
};