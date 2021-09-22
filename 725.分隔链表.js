/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let len = 0;
  let node = head;
  while (node) {
    len += 1;
    node = node.next;
  }

  let res = [];
  let count = 0;
  node = head;

  while (head) {
    // 当前分隔链表节点个数
    let a = Math.ceil((len - count) / k);
    res.push(head);
    while (a) {
      // 等于1的时候需要断开链表
      if (a === 1) {
        let next = head.next;
        head.next = null;
        head = next;
      } else {
        head = head.next;
      }
      count++;
      a--;
    }
    k--;
  }

  // k 大于 总链表长度。
  while (k) {
    res.push(null);
    k--;
  }

  return res;
};
// @lc code=end
