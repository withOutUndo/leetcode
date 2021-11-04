/*
 * @lc app=leetcode.cn id=1049 lang=rust
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
impl Solution {
    pub fn last_stone_weight_ii(stones: Vec<i32>) -> i32 {
        let len = stones.len();
        let sum = stones.iter().fold(0, |a, b| a + b) as usize;
        let half = (sum >> 1) as usize;
        let mut f = vec![vec![0; half + 1]; len + 1];

        for i in 1..len + 1 {
            let s = stones[i - 1] as usize;
            for j in 0..half + 1 {
                f[i][j] = f[i - 1][j];
                if j >= s as usize {
                    f[i][j] = f[i][j].max(f[i - 1][j - s] + s);
                }
            }
        }
        (match (f[len][half], sum - f[len][half]) {
            (a, b) if a > b => a - b,
            (a, b) => b - a,
        }) as i32
    }
}
// @lc code=end

