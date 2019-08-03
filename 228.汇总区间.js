/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const length = nums.length;
  let start = (end = nums[0]);
  let res = [];

  for (let i = 1; i <= length; i++) {
    if (nums[i] - 1 === nums[i - 1]) {
      end = nums[i];
    } else {
      if (start === end) {
        res.push(`${start}`);
      } else {
        res.push(`${start}->${end}`);
      }
      start = end = nums[i];
    }
  }
  return res;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
