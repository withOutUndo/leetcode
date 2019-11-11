/*
 * @Author: xuhuan
 * @Date: 2019-10-30 13:11:40
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-11-10 01:15:35
 * @Description:
 */
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
  let res = [];
  let obj = {};
  let [x, y] = king;
  queens.forEach(i => {
    obj[i.join("_")] = true;
  });

  let fn = i => (x, y) => {
    if (!i && obj[`${x}_${y}`]) {
      res.push([x, y]);
      i = true;
    }
  };

  let fn1 = fn();
  let fn2 = fn();
  let fn3 = fn();
  let fn4 = fn();
  let fn5 = fn();
  let fn6 = fn();
  let fn7 = fn();
  let fn8 = fn();

  for (let i = 1; i < 8; i++) {
    fn1(x, y + i);
    if (i <= 7 - x) {
      fn2(x + i, y + i);
      fn3(x + i, y);
    }
    if (y >= i) {
      fn5(x, y - i);
      fn8(x + i, y - i);
    }
    if (x >= i) {
      fn4(x - i, y);
      fn6(x - i, y - i);
      fn7(x - i, y + i);
    }
  }

  return res;
};

console.log(
  queensAttacktheKing([[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]], [0, 0])
);
console.log(
  queensAttacktheKing(
    [[0, 0], [1, 1], [2, 2], [3, 4], [3, 5], [4, 4], [4, 5]],
    [3, 3]
  )
);
