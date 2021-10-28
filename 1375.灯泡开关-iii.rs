/*
 * @lc app=leetcode.cn id=1375 lang=rust
 *
 * [1375] 灯泡开关 III
 */

// @lc code=start
impl Solution {
    pub fn num_times_all_blue(light: Vec<i32>) -> i32 {
        let mut res = 0;
        let mut acc = 0;
        let mut sum = 0;
        for (index, item) in light.iter().enumerate() {
            sum = sum + index + 1;
            acc = acc + item;
            if sum as i32 == acc {
                res += 1;
            }
        }
        res
    }
}
// @lc code=end

