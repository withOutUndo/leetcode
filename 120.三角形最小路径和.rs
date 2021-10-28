/*
 * @lc app=leetcode.cn id=120 lang=rust
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
impl Solution {
    pub fn minimum_total(mut triangle: Vec<Vec<i32>>) -> i32 {
        let mut pre: &mut Vec<i32> = &mut vec![];
        triangle.iter_mut().rev().enumerate().for_each(|(i, x)| {
            if i != 0 {
                x.iter_mut().enumerate().for_each(|(j, y)| {
                    *y = *y
                        + if pre[j] > pre[j + 1] {
                            pre[j + 1]
                        } else {
                            pre[j]
                        }
                })
            }
            pre = x;
        });
        triangle[0][0]
    }
}
// @lc code=end

