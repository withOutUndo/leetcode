use std::collections::HashMap;

impl Solution {
    pub fn max_product(words: Vec<String>) -> i32 {
        let map = words.iter().fold(HashMap::new(), |mut map, item| {
            let key = item
                .as_bytes()
                .iter()
                .fold(0, |pre, i| pre | 1 << (i - b'a'));

            let length = item.len();
            match map.get(&key) {
                Some(value) if &length > value => {
                    map.insert(key, length);
                }
                None => {
                    map.insert(key, length);
                }
                _ => {}
            };
            map
        });

        let mut res = 0;
        for (a, b) in map.iter() {
            for (c, d) in map.iter() {
                if a & c == 0 {
                    res = res.max(b * d);
                }
            }
        }
        res as i32
    }
}
