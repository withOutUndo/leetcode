/*
 * @Description: 给一个有 n 个结点的有向无环图，找到所有从 0 到 n-1 的路径并输出（不要求按顺序）
 *
 * 二维数组的第 i 个数组中的单元都表示有向图中 i 号结点所能到达的下一些结点（译者注：有向图是有方向的，即规定了a→b你就不能从b→a）空就是没有下一个结点了。
 * @Author: your name
 * @Date: 2019-08-12 13:02:31
 * @LastEditTime: 2019-08-12 14:01:07
 * @LastEditors: Please set LastEditors
 */
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const target = graph.length - 1;

  let res = [];

  const fn = (next, arr) => {
    for (let index = 0; index < next.length; index++) {
      const ele = next[index];
      if (ele === target) {
        res.push([...arr, ele]);
        continue;
      }

      fn(graph[ele], [...arr, ele]);
    }
  };

  fn(graph[0], [0]);

  return res;
};

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
