/*
 * @Author: xuhuan
 * @Date: 2019-08-30 13:10:49
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-09-29 22:10:26
 * @Description:
 */
/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
  let cacheObj = {};
  for (let index = 0; index < row.length; index++) {
    cacheObj[row[index]] = index;
  }
  let res = 0;
  for (let i = 0; i < row.length; i += 2) {
    let a = row[i];
    let b = row[i + 1];
    let x;

    if (a % 2 === 0) {
      x = a + 1;
    } else {
      x = a - 1;
    }
    if (x !== b) {
      res++;
      row[cacheObj[x]] = b;
      cacheObj[b] = cacheObj[x];
    }
  }

  return res;
};

// console.log(minSwapsCouples([0, 2, 3, 1]));
console.log(
  minSwapsCouples([
    5,
    1,
    3,
    18,
    7,
    14,
    12,
    0,
    9,
    4,
    13,
    11,
    8,
    15,
    10,
    2,
    6,
    17,
    16,
    19
  ])
);
// console.log(minSwapsCouples([3, 5, 17, 7, 18, 9, 16, 11, 1, 19, 4, 0, 15, 13, 2, 8, 14, 10, 6, 12]));
