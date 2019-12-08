/*
 * @Author: xuhuan
 * @Date: 2019-12-07 14:01:02
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-12-07 14:36:44
 * @Description:
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let res = Infinity;
  const length = triangle.length;
  if (length === 1) {
    return triangle[0][0];
  }
  for (let i = 1; i < length; i++) {
    const arrA = triangle[i];
    const arrB = triangle[i - 1];

    for (let j = 0; j < arrA.length; j++) {
      arrA[j] =
        arrA[j] +
        Math.min(
          arrB[j - 1] === undefined ? Infinity : arrB[j - 1],
          arrB[j] === undefined ? Infinity : arrB[j]
        );

      if (i === length - 1) {
        res = Math.min(arrA[j], res);
      }
    }
  }
  console.log(triangle);
  return res;
};

// console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
// console.log(minimumTotal([[2]]));
// console.log(minimumTotal([[-1], [3, 2], [-3, 1, -1]]));
console.log(minimumTotal([[1], [-5, -2], [3, 6, 1], [-1, 2, 4, -3]]));
