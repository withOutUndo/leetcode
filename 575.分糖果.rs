/*
 * @lc app=leetcode.cn id=575 lang=rust
 *
 * [575] 分糖果
 */

// @lc code=start
use std::{collections::HashMap, iter::FromIterator};

impl Solution {
    pub fn distribute_candies(candy_type: Vec<i32>) -> i32 {
        HashMap::<i32, usize>::from_iter(
            candy_type
                .iter()
                .enumerate()
                .map(|(index, item)| (*item, index)),
        ).len().min(candy_type.len() >> 1) as i32
    }
}
// @lc code=end

