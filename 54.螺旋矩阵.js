/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let i = 0, j = -1, dir = 0, row = matrix.length, col = matrix && matrix[0] && matrix[0].length;

  if (row === 1) {
    return matrix[0] || [];
  }

  let counts = [col, row, col, row];

  let fns = [
    (i, j) => [i, j + 1],
    (i, j) => [i + 1, j],
    (i, j) => [i, j - 1],
    (i, j) => [i - 1, j],
  ]

  let result = [];
  
  for(let index = 0; index < row * col;) {
    const mod = dir % 4;
    let x = counts[mod];
    switch (mod) {
      case 0:
      case 2:
        counts[1]--;
        counts[3]--;
        break;
      case 1:
      case 3:
        counts[0]--;
        counts[2]--;
        break;
    }
    while(x > 0) {
      [i, j] = fns[mod](i, j);
      result.push(matrix[i][j]);
      index++;
      x--;
    }
    dir++;
  }

  return result;
};


console.log(spiralOrder([]));

console.log(spiralOrder([
  []
]));

console.log(spiralOrder([
  [1],
  [2]
]));

console.log(spiralOrder([
  [1, 2],
]));

console.log(spiralOrder([
  [1, 2, 3, 4],
  [10, 11, 12, 5],
  [9, 8, 7, 6],
]));