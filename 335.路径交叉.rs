/*
 * @lc app=leetcode.cn id=335 lang=rust
 *
 * [335] 路径交叉
 */

// @lc code=start
impl Solution {
    pub fn is_self_crossing(d: Vec<i32>) -> bool {
        if d.len() < 4 {
            return false;
        }

        for i in 3..d.len() {
            if d[i] >= d[i - 2] && d[i - 1] <= d[i - 3] {
                return true;
            }
            if i > 3 && d[i] + d[i - 4] >= d[i - 2] && d[i - 1] == d[i - 3] {
                return true;
            }
            if i > 4
                && d[i - 1] <= d[i - 3]
                && d[i - 2] > d[i - 4]
                && d[i] + d[i - 4] >= d[i - 2]
                && d[i - 1] + d[i - 5] >= d[i - 3]
            {
                return true;
            }
        }

        false
    }
}
// @lc code=end

