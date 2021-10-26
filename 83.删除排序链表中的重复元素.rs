/*
 * @lc app=leetcode.cn id=83 lang=rust
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
//
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn delete_duplicates(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        if head.is_none() {
            return None;
        }

        let mut node = head.as_mut().unwrap();
        let mut prev = node.val;

        while let Some(mut next) = std::mem::replace(&mut node.next, None) {
            if next.val == prev {
                node.next = next.next;
            } else {
                prev = next.val;
                node.next = Some(next);
                node = node.next.as_mut().unwrap();
            }
        }

        head
    }
}
// @lc code=end

