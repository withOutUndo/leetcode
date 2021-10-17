/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const setVisited = (node, visited) => {
    node.visited = visited;
    return node;
  };
  let stack = [setVisited(root, false)];

  while (stack.length) {
    const node = stack.pop();

    if (node.visited) {
      k--;
      if (k == 0) {
        return node.val;
      }
    } else {
      node.right && stack.push(setVisited(node.right, false));
      stack.push(setVisited(node, true));
      node.left && stack.push(setVisited(node.left, false));
    }
  }
};
// @lc code=end
