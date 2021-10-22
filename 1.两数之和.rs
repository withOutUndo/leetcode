/*
 * @lc app=leetcode.cn id=1 lang=rust
 *
 * [1] 两数之和
 */

// @lc code=start
use std::collections::HashMap;
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = HashMap::new();

        for (i, a) in nums.iter().enumerate() {
            let b = target - a;
            match map.get(&b) {
                Some(j) => {
                    return vec![i as i32, *j];
                }
                None => {
                    map.insert(a, i as i32);
                }
            }
        }

        vec![]
    }
}
// @lc code=end
