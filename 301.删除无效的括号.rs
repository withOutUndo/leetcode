/*
 * @lc app=leetcode.cn id=301 lang=rust
 *
 * [301] 删除无效的括号
 */

// @lc code=start
use std::{cmp::Ordering, collections::HashMap, str};
pub struct StackItem {
    index: usize,
    str: u8,
    l_count: i32,
    r_count: i32,
}

impl Solution {
    pub fn remove_invalid_parentheses(s: String) -> Vec<String> {
        let mut l_count = 0;
        let mut r_count = 0;
        let len = s.len();
        let mut res: Vec<String> = vec![];
        let mut map = HashMap::<String, bool>::new();
        let s = s.as_bytes();

        for i in s.iter() {
            match i {
                b'(' => l_count += 1,
                b')' => match l_count.cmp(&0) {
                    Ordering::Greater => l_count -= 1,
                    _ => r_count += 1,
                },
                _ => {}
            }
        }

        let mut stack: Vec<StackItem> = Vec::new();

        let push_to_stack = |stack: &mut Vec<StackItem>, index: usize, l_count, r_count| {
            stack.push(StackItem {
                index,
                str: s[index],
                l_count,
                r_count,
            });

            match s[index] {
                b'(' => {
                    if l_count > 0 {
                        stack.push(StackItem {
                            index,
                            str: 0,
                            l_count: l_count - 1,
                            r_count,
                        })
                    }
                }
                b')' => {
                    if r_count > 0 {
                        stack.push(StackItem {
                            index,
                            str: 0,
                            l_count,
                            r_count: r_count - 1,
                        })
                    }
                }
                _ => {}
            }
        };

        push_to_stack(&mut stack, 0, l_count, r_count);

        let mut cache: Vec<u8> = vec![];
        while let Some(StackItem {
            index,
            str,
            l_count,
            r_count,
        }) = stack.pop()
        {
            unsafe {
                cache.set_len(index);
            }
            cache.push(str);

            if index == len - 1 {
                if l_count == 0 && r_count == 0 && Solution::check_valid(&cache) {
                    let cache: Vec<u8> = cache.iter().filter(|i| *i > &0).map(|i| *i).collect();
                    let string = str::from_utf8(&cache).unwrap().to_string();
                    match map.get(&string) {
                        None => {
                            map.insert(string.clone(), true);
                            res.push(string);
                        }
                        _ => {}
                    }
                }
                continue;
            }

            push_to_stack(&mut stack, index + 1, l_count, r_count);
        }
        res
    }

    fn check_valid(vec: &Vec<u8>) -> bool {
        let mut l = 0;
        for i in vec.iter() {
            match i {
                b'(' => l += 1,
                b')' => {
                    if l > 0 {
                        l -= 1
                    } else {
                        return false;
                    }
                }
                _ => {}
            }
        }
        l == 0
    }
}
// @lc code=end
