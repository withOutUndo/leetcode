/*
 * @lc app=leetcode.cn id=21 lang=rust
 *
 * [21] 合并两个有序链表
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
    pub fn merge_two_lists(
        mut l1: Option<Box<ListNode>>,
        mut l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut res = ListNode::new(0);
        let mut node = &mut res;
        while let (Some(a), Some(b)) = (l1.as_ref(), l2.as_ref()) {
            if a.val < b.val {
                node.next = l1.take();
                node = node.next.as_mut().unwrap();
                l1 = node.next.take();
            } else {
                node.next = l2.take();
                node = node.next.as_mut().unwrap();
                l2 = node.next.take();
            }
        }

        node.next = l1.or(l2);
        res.next
    }
}

// @lc code=end

