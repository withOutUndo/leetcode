/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (!head) {
    return null;
  }
  let stack = [head];
  const res = head;
  let mHead = [];

  while (stack.length) {
    const top = stack.pop();
    if (top.changePrev && mHead.length) {
      const h = mHead.pop();
      h.next = top;
      top.prev = h;
    }

    if (top.next) {
      top.next.changePrev = !!top.child;
      stack.push(top.next);
    }

    if (top.child) {
      top.next = top.child;
      top.child.prev = top;
      stack.push(top.child);
      top.child = null;
    }

    if (!top.next && !top.child) {
      mHead.push(top);
    }
  }

  return res;
};
// @lc code=end

