/**
 * BFS
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, relation, k) {
  let res = 0;
  const relationMap = relation.reduce((pre, cur) => {
    const [s, e] = cur;
    if (!pre[s]) {
      pre[s] = [];
    }

    pre[s].push(e);

    return pre;
  }, {});

  const queue = [{ node: 0, level: 0 }];

  while (queue.length) {
    const { node, level } = queue.shift();
    const nextNode = relationMap[node] || [];
    if (k === level + 1) {
      if (nextNode.find((i) => i === n - 1)) {
        res = res + 1;
      }
    } else {
      nextNode.forEach((i) => {
        queue.push({ node: i, level: level + 1 });
      });
    }
  }

  return res;
};
