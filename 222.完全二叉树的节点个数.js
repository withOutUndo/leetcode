/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) {
    return 0;
  }
  let totalLevel = 0;
  let head = root;
  while (head) {
    totalLevel++;
    head = head.left;
  }
  let levelCount = 1;
  let i = 0;
  let sum = 0;
  while (i < totalLevel) {
    sum += levelCount;
    levelCount = levelCount * 2;
    i++;
  }

  let stack = [{ index: 1, node: root, level: 1 }];
  let flag = false;

  let fn = (right) => {
    fn = () => null;
    return right !== null;
  }

  while (stack.length) {
    debugger;
    let {
      node: { left, right },
      index,
      level,
    } = stack.shift();

    if (level === totalLevel - 1 && fn(right)) {
      return sum;
    }

    if (right === null) {
      // console.log(index, level);
      flag = true;
    }

    if (flag && level >= totalLevel - 1 && (left || right)) {
      return sum - (2 ** level - index * 2 + (right ? 0 : 1));
    }

    left &&
      stack.unshift({ node: left, index: index * 2 - 1, level: level + 1 });
    right && stack.unshift({ node: right, index: index * 2, level: level + 1 });
  }
  return sum;
};
// @lc code=end

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);
const f = new TreeNode(6);
const g = new TreeNode(7);
c.left = f;
// c.right = g;
b.left = d;
b.right = e;
a.left = b;
a.right = c;
// d.left = new TreeNode(8);

console.log(countNodes(a));
