/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  const row = grid.length;
  if (row === 0) {
    return 0;
  }
  const col = grid[0].length;
  if (col === 0) {
    return 0;
  }

  let roots = new Array(row).fill(0).map(i => [...new Array(col).fill(0)]);

  const findRoot = function(x, y) {
    const root = roots[x][y];

    if (root === 0) {
      roots[x][y] = `${x}_${y}`;
      return `${x}_${y}`;
    }
    if (root === `${x}_${y}`) {
      return root;
    } else {
      let arr = root.split("_");
      return findRoot(arr[0], arr[1]);
    }
  };

  const union = function(x1, y1, x2, y2) {
    rootA = findRoot(x1, y1);
    // rootB = findRoot(x2, y2);
    roots[x2][y2] = rootA;
  };
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const current = grid[i][j];
      const top = i > 0 ? grid[i - 1][j] : null;
      const left = grid[i][j - 1];
      if (current === "0") {
        continue;
      }

      if (top !== "1" && left !== "1") {
        roots[i][j] = `${i}_${j}`;
        continue;
      }

      if (top === "1" && left === "1") {
        const a = findRoot(i - 1, j);
        const b = findRoot(i, j - 1).split("_");

        roots[b[0]][b[1]] = a;
        roots[i][j] = a;
        continue;
      }

      if (top === "1") {
        union(i - 1, j, i, j);
      }

      if (left === "1") {
        union(i, j - 1, i, j);
      }
    }
  }

  let obj = {};
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!roots[i][j]) {
        continue;
      }
      const root = findRoot(i, j);

      if (!obj[root]) {
        count++;
        obj[root] = true;
      }
    }
  }

  return count;
};
/**
 * @param {character[][]} grid
 * @return {number}
 */
var DFSNumIslands = function(grid) {
  let count = 0;

  var DFS = (i, j) => {
    if (grid[i] && grid[i][j] === "1") {
      grid[i][j] = "0";
      DFS(i + 1, j);
      DFS(i, j + 1);
      DFS(i - 1, j);
      DFS(i, j - 1);
    }
  };

  grid.forEach((row, i) => {
    row.forEach((item, j) => {
      if (item === "1") {
        count++;
        DFS(i, j);
      }
    });
  });

  return count;
};

console.log(
  DFSNumIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ])
);

console.log(
  DFSNumIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "0", "1"]
  ])
);

console.log(DFSNumIslands([["1"]]));

console.log(DFSNumIslands([[]]));

console.log(DFSNumIslands([]));

console.log(
  DFSNumIslands([
    ["1", "1", "1", "1", "1", "1", "1"],
    ["0", "0", "0", "0", "0", "0", "1"],
    ["1", "1", "1", "1", "1", "0", "1"],
    ["1", "0", "0", "0", "1", "0", "1"],
    ["1", "0", "1", "0", "1", "0", "1"],
    ["1", "0", "1", "1", "1", "0", "1"],
    ["1", "1", "1", "1", "1", "1", "1"]
  ])
);
