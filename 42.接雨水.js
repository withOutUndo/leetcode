/*
 * @Author: xuhuan
 * @Date: 2019-09-05 21:08:47
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-09-06 00:18:39
 * @Description:
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let arr = [];
  let res = 0;

  const fn = height => {
    let arr = [];
    let length = 0;
    let sum = 0;
    height.forEach(i => {
      if (arr.length === 0 && i) {
        arr.push(i);
        return;
      }
      if (arr[0] > i) {
        arr.push(i);
        length++;
        sum += i;
        return;
      }
      if (arr[0] <= i) {
        arr.push(i);
        if (length) {
          res = res + length * Math.min(arr[0], arr[length + 1]) - sum;
        }
        arr = [i];
        length = 0;
        sum = 0;
        return;
      }
    });

    return arr;
  };

  arr = fn(height);
  fn(arr.reverse());

  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 4]));
