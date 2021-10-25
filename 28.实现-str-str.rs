/*
 * @lc app=leetcode.cn id=28 lang=rust
 *
 * [28] 实现 strStr()
 */

// @lc code=start
impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        if "" == &needle {
            return 0;
        }

        let len1 = haystack.len();
        let len2 = needle.len();
        if len2 > len1 {
            return -1;
        }

        for i in 0..len1 - len2 + 1 {
            if &haystack[i..i + len2] == &needle[0..] {
                return i as i32;
            }
        }

        -1
    }
}
// @lc code=end

