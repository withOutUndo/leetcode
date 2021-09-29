/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const length = s.length;
  let parent = new Array(s.length).fill(0).map((_, index) => index);

  const findRoot = (x, parent) => {
    while (parent[x] !== x) {
      x = parent[x];
    }
    return x;
  };

  const merge = (x, y, parent) => {
    let xRoot = findRoot(x, parent);
    let yRoot = findRoot(y, parent);

    if (xRoot !== yRoot) {
      parent[xRoot] = yRoot;
    }
    if (xRoot == yRoot && xRoot == -1) {
      parent[x] = y;
    }
  };

  pairs.forEach((i) => {
    const [x, y] = i;
    merge(x, y, parent);
  });

  parent = parent.map((i) => findRoot(i, parent));

  let str = parent
    .reduce((pre, cur, index) => {
      if (!pre[cur]) {
        pre[cur] = [];
      }
      pre[cur].push(s[index]);
      return pre;
    }, [])
    .map((i) => i.sort((a, b) => a.charCodeAt() - b.charCodeAt()));

  let res = "";
  for (let index = 0; index < length; index++) {
    res += str[parent[index]].shift();
  }
  return res;
};
// @lc code=end

console.log(
  smallestStringWithSwaps("dcab", [
    [0, 3],
    [1, 2],
  ])
);
