/*
 * @Author: xuhuan
 * @Date: 2019-10-13 01:52:33
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-10-13 01:56:39
 * @Description: 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0;
  obj = {};

  height.forEach((i, index) => {
    if (i > max) {
      max = i;
    }

    if (obj[i]) {
      obj[i]['right'] = Math.max(index, obj[i]['right']);
      obj[i]['left'] = Math.min(index, obj[i]['left']);
    } else {
      obj[i] = {
        left: index,
        right: index
      };
    }
  });

  let minLeft = Infinity,
    maxRight = 0;
  let res = 0;
  for (let index = max; index > 0; index--) {
    if (obj[index]) {
      const { left, right } = obj[index];
      minLeft = Math.min(left, minLeft);
      maxRight = Math.max(right, maxRight);

      res = Math.max(res, (maxRight - minLeft) * index);
    }
  }

  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
