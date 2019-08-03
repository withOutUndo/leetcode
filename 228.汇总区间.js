/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const length = nums.length;
  let stack = [];
  let res = [];

  const fn = (len, top, stack) => {
    if (len === 1) {
      return `${top}`;
    } else {
      return `${stack[0]}->${top}`;
    }
  };

  nums.forEach((i, index) => {
    let len = stack.length;
    const top = stack[len - 1];

    if (len && i - top !== 1) {
      res.push(fn(len, top, stack));
      stack = [];
    }
    stack.push(i);
    
    if (index === length - 1) {
      len = stack.length;
      res.push(fn(len, i, stack));
    }
  });
  return res;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
