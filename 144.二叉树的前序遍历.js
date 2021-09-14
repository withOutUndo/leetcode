/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (!root) {
    return [];
  }
  const stack = [root];
  const res = [];

  while (stack.length) {
    const top = stack.pop();
    res.push(top.val);

    if (top.right) {
      stack.push(top.right);
    }
    if (top.left) {
      stack.push(top.left);
    }
  }

  return res;
};
// @lc code=end

