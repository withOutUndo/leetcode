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
  let res = root.val === targetSum ? 1 : 0;
  const stack = [
    {
      node: root,
      sum: root.val,
      sumMap: {
        [root.val]: 1,
      },
    },
  ];

  const joinStack = (node, sum, sumMap) => {
    const val = sum + node.val;
    if (sumMap[val - targetSum]) {
      res += sumMap[val - targetSum];
    }
    if (val === targetSum) {
      res++;
    }
    stack.push({
      node,
      sum: val,
      sumMap: {
        ...sumMap,
        [val]: (sumMap[val] || 0) + 1,
      },
    });
  };

  while (stack.length) {
    const {
      node: { left, right },
      sum,
      sumMap,
    } = stack.pop();

    if (left) {
      joinStack(left, sum, sumMap);
    }

    if (right) {
      joinStack(right, sum, sumMap);
    }
  }

  return res;
};
// @lc code=end
