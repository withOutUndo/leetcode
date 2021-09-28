/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (!root) {
    return 0;
  }
  let res = 0;
  const sum = [];
  const stack = [
    {
      node: root,
      level: 0,
    },
  ];

  const joinStack = (node, level) => {
    stack.push({
      node,
      level: level + 1,
    });
  };

  while (stack.length) {
    const {
      node: { left, right, val },
      level,
    } = stack.pop();

    sum.length = level + 1;
    const num = (sum[level - 1] || 0) + val;
    sum[level] = num;
    if (num === targetSum) {
      res++;
    }
    for (let i = 0; i < level; i++) {
      if (num - sum[i] === targetSum) {
        res++;
      }
    }

    if (left) {
      joinStack(left, level);
    }

    if (right) {
      joinStack(right, level);
    }
  }

  return res;
};
// @lc code=end
