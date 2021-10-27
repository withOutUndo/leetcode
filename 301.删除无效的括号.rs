/*
 * @lc app=leetcode.cn id=301 lang=rust
 *
 * [301] 删除无效的括号
 */

// @lc code=start
use std::{cmp::Ordering, collections::HashMap, convert::TryInto};
pub struct StackItem {
    index: usize,
    str: String,
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

        for i in s.chars() {
            match i {
                '(' => l_count += 1,
                ')' => match l_count.cmp(&0) {
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
                str: match s.get(index..index + 1) {
                    Some(a) => a.to_string(),
                    _ => "".to_string(),
                },
                l_count,
                r_count,
            });

            match s.get(index..index + 1) {
                Some("(") => {
                    if l_count > 0 {
                        stack.push(StackItem {
                            index,
                            str: "".to_string(),
                            l_count: l_count - 1,
                            r_count,
                        })
                    }
                }
                Some(")") => {
                    if r_count > 0 {
                        stack.push(StackItem {
                            index,
                            str: "".to_string(),
                            l_count,
                            r_count: r_count - 1,
                        })
                    }
                }
                _ => {}
            }
        };

        push_to_stack(&mut stack, 0, l_count, r_count);

        let mut cache: Vec<String> = vec![];
        while let Some(StackItem {
            index,
            str,
            l_count,
            r_count,
        }) = stack.pop()
        {
            unsafe {
                cache.set_len(index.try_into().unwrap());
            }
            cache.push(str.clone());

            if index == len - 1 {
                if l_count == 0 && r_count == 0 && Solution::check_valid(&cache) {
                    let string = cache.join("");
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

    fn check_valid(vec: &Vec<String>) -> bool {
        let mut l = 0;
        for i in vec.iter() {
            match i.as_str() {
                "(" => l += 1,
                ")" => {
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
