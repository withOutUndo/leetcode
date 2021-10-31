/*
 * @lc app=leetcode.cn id=260 lang=rust
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
impl solution {
    pub fn single_number(nums: vec<i32>) -> vec<i32> {
        let sum = nums.iter().fold(0, |pre, cur| pre ^ cur);
        let mut i = 0;
        while (sum >> i) & 1 == 0 {
            i += 1;
        }
        let mut res = vec![0, 0];

        for item in nums.iter() {
            if ((item >> i) & 1) == 1 {
                res[0] ^= item;
            } else {
                res[1] ^= item;
            }
        }

        res
    }
}
// @lc code=end

