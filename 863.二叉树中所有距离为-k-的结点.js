/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  const transferGraph = (root) => {
    let queue = [root];
    let graph = {};

    const setGraph = (x, y) => {
      if (!graph[x]) {
        graph[x] = [];
      }
      if (!graph[y]) {
        graph[y] = [];
      }
      graph[x].push(y);
      graph[y].push(x);
    };

    while (queue.length) {
      const top = queue.shift();
      if (top.left) {
        setGraph(top.val, top.left.val);
        queue.push(top.left);
      }
      if (top.right) {
        setGraph(top.val, top.right.val);
        queue.push(top.right);
      }
    }

    return graph;
  };

  const graph = transferGraph(root);

  let res = [];
  let stack = [{ val: target.val, distance: 0 }];
  let visited = {};
  while (stack.length) {
    const { val, distance } = stack.shift();
    visited[val] = true;
    if (distance === k) {
      res.push(val);
      continue;
    }
    const next = (graph[val] || []).filter((i) => !visited[i]);
    stack.unshift(...next.map((i) => ({ val: i, distance: distance + 1 })));
  }

  return res;
};
// @lc code=end

/**
 * 1. 树转图
 * 
 * 树转图，再遍历
 */