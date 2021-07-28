/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  if (!head) {
    return null;
  }
  if (n === 0) {
    return head;
  }
  let arr = [];
  let res = head;
  let flag = true;
  while (head) {
    if (arr.length == n + 1) {
      arr.shift();
      flag = false;
    }
    arr.push(head);
    head = head.next;
  }
  arr[0].next = arr[2] || null;
  if (flag && arr.length === n) {
    return arr[1] || null;
  }
  return !flag ? res : arr[0];
};
// @lc code=end
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}


let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);
let f = new ListNode(6);
e.next = f;
d.next = e;
c.next = d;
b.next = c;
a.next = b;
removeNthFromEnd(f, 1);
