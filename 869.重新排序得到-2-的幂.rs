/*
 * @lc app=leetcode.cn id=869 lang=rust
 *
 * [869] 重新排序得到 2 的幂
 */

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn reordered_power_of2(n: i32) -> bool {
        fn gen_arr(n: i32) -> Vec<i32> {
            let mut arr: Vec<i32> = vec![0; 10];
            for i in n.to_string().as_bytes().iter() {
                arr[(i - b'0') as usize] += 1;
            }
            arr
        }
        let mut map = HashMap::new();
        let mut i = 0;

        while 1 << i <= 10_i32.pow(9) {
            map.insert(gen_arr(1 << i), true);
            i += 1;
        }

        match map.get(&gen_arr(n)) {
            Some(a) => true,
            _ => false,
        }
    }
}
// @lc code=end
