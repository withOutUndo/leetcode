/*
 * @lc app=leetcode.cn id=13 lang=rust
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let len = s.len();
        let mut pre = 0;
        let mut res = 0;

        for i in 0..len {
            let a = &s[i..i + 1];
            let num = match a {
                "I" => 1,
                "V" => 5,
                "X" => 10,
                "L" => 50,
                "C" => 100,
                "D" => 500,
                "M" => 1000,
                _ => 0,
            };
            if pre == 0 {
                pre = num;
            } else if pre < num {
                res += (num - pre);
                pre = 0;
            } else {
                res += pre;
                pre = num;
            }
        }
        res + pre
    }
}

// @lc code=end

