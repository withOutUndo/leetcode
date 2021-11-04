/*
 * @lc app=leetcode.cn id=367 lang=rust
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
use std::cmp::Ordering;

impl Solution {
    pub fn is_perfect_square(num: i32) -> bool {
        let mut left = 1;
        let mut right = num.min(46341);

        while left < right {
            let mid = (left + right) >> 1;
            match (mid * mid).cmp(&num) {
                Ordering::Equal => {
                    return true;
                }
                Ordering::Less => {
                    left = mid + 1;
                }
                Ordering::Greater => {
                    right = mid;
                }
            };
        };

        left * left == num || right * right == num
    }
}
// @lc code=end

