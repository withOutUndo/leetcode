/*
 * @lc app=leetcode.cn id=563 lang=rust
 *
 * [563] 二叉树的坡度
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
    pub fn find_tilt(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        fn dfs(root: Option<Rc<RefCell<TreeNode>>>) -> (i32, i32) {
            if let Some(node) = root {
                let mut node = node.borrow_mut();
                let x = dfs(node.left.take());
                let y = dfs(node.right.take());
                (x.0 + y.0 + (x.1 - y.1).abs(), x.1 + y.1 + node.val)
            } else {
                (0, 0)
            }
        }
        dfs(root).0
    }
}
// @lc code=end

