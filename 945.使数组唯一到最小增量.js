/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function (A) {
  let arr = [];

  A.forEach((i) => {
    arr[i] = (arr[i] || 0) + 1;
  });

  let count = 0;
  for (let index = 0; index < arr.length; index++) {
    const i = arr[index];

    if (i > 1) {
      count += i - 1;
      arr[index + 1] = (arr[index + 1] || 0) + i - 1;
    }
  }

  return count;
};

console.log(minIncrementForUnique([3, 1, 2, 2, 1, 7]));
console.log(minIncrementForUnique([1, 2, 2, 2, 2, 2]));
