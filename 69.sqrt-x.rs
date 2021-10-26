/*
 * @lc app=leetcode.cn id=69 lang=rust
 *
 * [69] Sqrt(x)
 */

// @lc code=start
impl Solution {
    pub fn my_sqrt(x: i32) -> i32 {
        if x == 0 {
            return 0;
        }
        let c = x as i64;
        let mut x: i64 = x as i64;

        while let xi = (x + c/x) / 2 {
            if xi >= x {
                break;
            }
            x = xi;
        }

        x as i32
    }
}
// @lc code=end

