/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let queue = [{ node: root, left: true }];
  let res = [];
  while (queue.length) {
    let arr = [];
    let q = [];
    for (let index = 0; index < queue.length; index++) {
      const {node, left} = queue[index];
      
      if (node) {
        if (left) {
          arr.push(node.val);
        } else {
          arr.unshift(node.val);
        }
        let a = [
          { node: node.left, left: !left },
          { node: node.right, left: !left },
        ];
        q.push(...a);
      }
    }
    queue = q;
    arr.length && res.push(arr);
  }
  return res;
};
// @lc code=end
