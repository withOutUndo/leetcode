/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  let length = M.length;
  let res = 0;
  let arr = new Array(length).fill(0).map((_, i) => i);

  let obj = {};

  const fn = item => {
    let arr = M[item];
    return arr
      .map((i, index) => (i && !obj[index] ? index : null))
      .filter(i => i !== null);
  };

  while (arr.length) {
    let list = [arr[0]];
    while (list.length) {
      let i = list.shift();
      obj[i] = true;
      let index = arr.findIndex(item => item === i);
      if (index > -1) {
        arr.splice(index, 1);
      }
      let nextArr = fn(i);
      list.push(...nextArr);
    }

    res++;
  }

  return res;
};

// console.log(
//   findCircleNum([
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1]
//   ])
// );

// console.log(
//   findCircleNum([
//     [1, 1, 0],
//     [1, 1, 1],
//     [0, 1, 1]
//   ])
// );

// console.log(
//   findCircleNum([
//     [1, 0, 0, 1],
//     [0, 1, 1, 0],
//     [0, 1, 1, 1],
//     [1, 0, 1, 1]
//   ])
// );

console.log(
  findCircleNum([
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e],
    [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
  ])
);
