/*
 * @lc app=leetcode.cn id=67 lang=rust
 *
 * [67] 二进制求和
 */

// @lc code=start
impl Solution {
    pub fn add_binary(a: String, b: String) -> String {
        let mut va = Vec::from(a);
        let mut vb = Vec::from(b);
        va.reverse();
        vb.reverse();
        let a_len = va.len();
        let b_len = vb.len();
        let mut modulo = 0;
        let mut i = 0;
        let mut res = String::from("");

        while i < a_len || i < b_len {
            modulo = modulo + va.get(i).unwrap_or(&b'0') - b'0';
            modulo = modulo + vb.get(i).unwrap_or(&b'0') - b'0';

            res = match modulo % 2 {
                1 => "1".to_string() + &res,
                _ => "0".to_string() + &res,
            };

            modulo = match modulo > 1 {
                true => 1,
                _ => 0,
            };
            i += 1;
        }

        if modulo > 0 {
            "1".to_string() + &res
        } else {
            res
        }
    }
}
// @lc code=end
