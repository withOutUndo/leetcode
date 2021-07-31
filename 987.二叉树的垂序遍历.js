/*
 * @lc app=leetcode.cn id=987 lang=javascript
 *
 * [987] 二叉树的垂序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  const stack = [{ node: root, row: 0, col: 0 }];
  const arr = [];

  while (stack.length) {
    const { node, row, col } = stack.shift();

    arr.push([col, row, node.val]);

    if (node.left) {
      stack.unshift({ node: node.left, row: row + 1, col: col - 1 });
    }

    if (node.right) {
      stack.unshift({ node: node.right, row: row + 1, col: col + 1 });
    }
  }

  return arr
    .sort((a, b) => {
      return a[0] !== b[0]
        ? a[0] - b[0]
        : a[1] !== b[1]
        ? a[1] - b[1]
        : a[2] - b[2];
    })
    .reduce(
      (pre, cur) => {
        const { res, lastCol } = pre;
        if (lastCol !== cur[0]) {
          res.push([]);
        }
        res[res.length - 1].push(cur[2]);

        return { res, lastCol: cur[0] };
      },
      { res: [], lastCol: null }
    ).res;
};
// @lc code=end
