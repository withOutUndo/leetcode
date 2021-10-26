/*
 * @lc app=leetcode.cn id=100 lang=rust
 *
 * [100] 相同的树
 */

// @lc code=start
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn is_same_tree(
        p: Option<Rc<RefCell<TreeNode>>>,
        q: Option<Rc<RefCell<TreeNode>>>,
    ) -> bool {
        match (&p, &q) {
            (Some(a), Some(b)) => {}
            (None, None) => return true,
            _ => return false,
        }

        let mut stack_p = vec![p.unwrap()];
        let mut stack_q = vec![q.unwrap()];

        while stack_p.len() > 0 {
            let p = stack_p.pop().unwrap();
            let q = stack_q.pop().unwrap();

            if p.borrow().val != q.borrow().val {
                return false;
            }

            match (p.borrow_mut().left.take(), q.borrow_mut().left.take()) {
                (Some(_), None) | (None, Some(_)) => return false,
                (Some(a), Some(b)) => {
                    stack_p.push(a);
                    stack_q.push(b);
                }
                _ => {}
            };

            match (p.borrow_mut().right.take(), q.borrow_mut().right.take()) {
                (Some(_), None) | (None, Some(_)) => return false,
                (Some(a), Some(b)) => {
                    stack_p.push(a);
                    stack_q.push(b);
                }
                _ => {}
            };
        }

        true
    }
}
// @lc code=end

