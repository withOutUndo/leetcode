/*
 * @lc app=leetcode.cn id=496 lang=rust
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
        let mut stack: Vec<&i32> = vec![];
        let mut map = HashMap::new();

        nums2.iter().for_each(|x| {
            map.insert(x, &(-1));
            while let Some(a) = stack.last() {
                if x > a {
                    map.insert(a, x);
                    stack.pop();
                } else {
                    break;
                }
            }
            stack.push(x);
        });

        nums1.iter().map(|x| **map.get(x).unwrap()).collect()
    }
}

// @lc code=end
