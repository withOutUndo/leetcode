/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  for (let node = head; node !== null; node = node.next.next) {
    const newNode = new Node(node.val, node.next, null);
    node.next = newNode;
  }

  for (let node = head; node !== null; node = node.next.next) {
    if (node.random) {
      node.next.random = node.random.next;
    }
  }

  const newHead = head.next;

  for (let node = head; node !== null; node = node.next) {
    const next = node.next;
    node.next = next.next;
    if (node.next) {
      next.next = node.next.next;
    }
  }

  return newHead;
};
// @lc code=end

/**
 * 借鉴leetcode官方思路
 * 
 * A -> A' -> B -> B' -> C -> C'
 */