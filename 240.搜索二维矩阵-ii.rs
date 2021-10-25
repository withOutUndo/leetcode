/*
 * @lc app=leetcode.cn id=240 lang=rust
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
use std::cmp::Ordering;
impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        let mut i = 0;
        let mut j = matrix[0].len() - 1;

        loop {
            match matrix[i][j as usize].partial_cmp(&target).unwrap() {
                Ordering::Equal => {
                    return true;
                }
                Ordering::Greater => {
                    if j == 0 {
                        return false;
                    }
                    j -= 1;
                }
                Ordering::Less => {
                    if i == matrix.len() - 1 {
                        return false;
                    }
                    i += 1;
                }
            };
        }
    }
}
// @lc code=end

