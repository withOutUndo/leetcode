/*
 * @lc app=leetcode.cn id=721 lang=javascript
 *
 * [721] 账户合并
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  let parent = {};
  let nameMap = {};

  const find = (x, parent) => {
    if (parent[x] === undefined) {
      parent[x] = x;
    }
    while (parent[x] !== x) {
      x = parent[x];
    }

    return x;
  };

  const union = (x, y, parent) => {
    const xRoot = find(x, parent);
    const yRoot = find(y, parent);

    parent[yRoot] = xRoot;
  };

  accounts.forEach((i) => {
    let name = i[0];
    const len = i.length;
    let x = i[1];
    if (x && parent[x] === undefined) {
      nameMap[x] = [i[0]];
    }
    for (let j = 1; j < len; j++) {
      union(x, i[j], parent);
    }
  });

  for (const key in parent) {
    if (parent.hasOwnProperty(key)) {
      const root = find(parent[key], parent);
      nameMap[root].push(key);
    }
  }

  let res = [];
  for (const key in nameMap) {
    if (nameMap.hasOwnProperty(key)) {
      const arr = nameMap[key];
      if (arr.length > 1) {
        res.push([arr[0], ...arr.splice(1).sort()]);
      }
    }
  }

  return res;
};
// @lc code=end

console.log(
  accountsMerge([
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"],
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["Mary", "mary@mail.com"],
  ])
);
