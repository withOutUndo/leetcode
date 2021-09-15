/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
const preorderTraversalNew = function (root) {
  if (!root) {
    return [];
  }
  const s = [];
  const path = [];
  const setVisited = (node, bool) => {
    node.visited = bool;
    return node;
  };
  s.push(setVisited(root, false));
  while (s.length) {
    root = s.pop();
    const visited = root.visited;
    if (visited) {
      path.push(root.val);
    } else {
      s.push(setVisited(root, true));
      root.right && s.push(setVisited(root.right, false));
      root.left && s.push(setVisited(root.left, false));
    }
  }

  return path;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  return preorderTraversalNew(root);
};
// @lc code=end
