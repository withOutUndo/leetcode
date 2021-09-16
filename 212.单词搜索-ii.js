/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const map = board.reduce((pre, cur, x) => {
    cur.forEach((i, y) => {
      if (!pre[i]) {
        pre[i] = [];
      }

      pre[i].push([x, y]);
    });
    return pre;
  }, {});

  const dfs = (word) => {
    const s = word[0];
    const stack = (map[s] || []).map((i) => ({
      pos: i,
      visited: {
        [`${i[0]},${i[1]}`]: true,
      },
      index: 0,
    }));

    while (stack.length) {
      const {
        pos: [x, y],
        visited,
        index,
      } = stack.pop();
      if (index === word.length - 1) {
        return true;
      }

      const next = word[index + 1];

      const nextPos = [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
      ].filter(
        ([x, y]) =>
          !!(board[x] && board[x][y] === next && !visited[`${x},${y}`])
      );
      stack.push(
        ...nextPos.map((i) => ({
          pos: i,
          index: index + 1,
          visited: { ...visited, [i.join(",")]: true },
        }))
      );
    }

    return false;
  };

  return words
    .filter((word) => {
      return word.split("").every((i) => map[i]);
    })
    .filter((word) => dfs(word));
};
// @lc code=end
