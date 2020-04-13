/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let res = true;

  let check = (i) => {
    const num = i.filter((i) => i > 0 && i < 10);
    return [...new Set(num)].length === num.length;
  };

  board.map((i) => (res = res && check(i)));

  if (!res) {
    return false;
  }

  for (let i = 0; i < 9; i++) {
    res =
      res &&
      check([
        board[0][i],
        board[1][i],
        board[2][i],
        board[3][i],
        board[4][i],
        board[5][i],
        board[6][i],
        board[7][i],
        board[8][i],
      ]);

    if (!res) {
      return false;
    }
  }

  for (let i = 0; i < 9; i = i + 3) {
    for (let j = 0; j < 9; j = j + 3) {
      res =
        res &&
        check([
          board[i][j],
          board[i][j+ 1],
          board[i][j + 2],
          board[i + 1][j],
          board[i + 1][j + 1],
          board[i + 1][j + 2],
          board[i + 2][j],
          board[i + 2][j + 1],
          board[i + 2][j + 2],
        ]);

      if (res === false) {
        return false;
      }
    }
  }

  return res;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
console.log(
  isValidSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
