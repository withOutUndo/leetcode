/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  const rootValue = root.val;
  let stack = [root];
  let res = -1;

  while (stack.length) {
    const top = stack.shift();
    if (res === -1 && top.val !== rootValue) {
      res = top.val;
      continue;
    }

    if (top.val !== rootValue && res !== -1 && top.val < res) {
      res = top.val;
      continue;
    }

    if (top.left) {
      stack.unshift(top.left, top.right);
    }
  }

  return res;
};
// @lc code=end
