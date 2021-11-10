/*
 * @lc app=leetcode.cn id=495 lang=rust
 *
 * [495] 提莫攻击
 */

// @lc code=start
impl Solution {
    pub fn find_poisoned_duration(time_series: Vec<i32>, duration: i32) -> i32 {
        if time_series.len() == 0 {
            return 0;
        }

        let mut res = duration;

        for i in 1..time_series.len() {
            res += (time_series[i] - time_series[i - 1]).min(duration);
        }

        res
    }
}
// @lc code=end

