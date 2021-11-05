/*
 * @lc app=leetcode.cn id=1218 lang=rust
 *
 * [1218] 最长定差子序列
 */

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn longest_subsequence(arr: Vec<i32>, difference: i32) -> i32 {
        let mut map: HashMap<i32, i32> = HashMap::new();
        let mut res = 1;
        arr.iter().for_each(|x| {
            let num = if let Some(a) = map.get(&(x - difference)) {
                a
            } else {
                &0
            } + 1;
            map.insert(*x, num);

            res = res.max(num);
        });
        res
    }
}
// @lc code=end

