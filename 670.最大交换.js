var maximumSwap = function(num) {
  const obj = {};

  var nums = num
    .toString()
    .split("")
    .map(Number);
  nums.forEach((i, index) => {
    obj[i] = index;
  });

  index = 0;
  while (index !== -1 && index < nums.length) {
    for (let i = 9; i >= nums[index] + 1; i--) {
      if (obj[i] && obj[i] > index) {
        [nums[index], nums[obj[i]]] = [nums[obj[i]], nums[index]];
        index = -2;
        break;
      }
    }
    index++;
  }

  return Number(nums.join(""));
};