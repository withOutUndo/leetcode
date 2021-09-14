/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  let res = [];
  const stack = [];
  while (root || stack.length) {
    // 把当前的所有左节点入栈
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const top = stack.pop();

    res.push(top.val);
    // 左边部分都遍历完了，开始右部分
    root = top.right;
  }

  return res;
};
// @lc code=end
