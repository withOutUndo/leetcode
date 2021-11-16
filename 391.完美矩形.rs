/*
 * @lc app=leetcode.cn id=391 lang=rust
 *
 * [391] 完美矩形
 */

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn is_rectangle_cover(rectangles: Vec<Vec<i32>>) -> bool {
        // 统计面积
        let s = rectangles
            .iter()
            .fold(0, |pre, i| pre + (i[2] - i[0]) * (i[3] - i[1]));

        // 记录所有矩形组成的 最小左下点 和 最大左上点
        let (x, y, a, b) = rectangles
            .iter()
            .fold((100001, 100001, -100001, -100001), |(x, y, a, b), i| {
                (x.min(i[0]), y.min(i[1]), a.max(i[2]), b.max(i[3]))
            });

        // 面积不等返回false
        if s != (a - x) * (b - y) {
            return false;
        }

        // 统计点（矩形的四个点）的数量，
        let mut map: HashMap<(i32, i32), i32> =
            rectangles.iter().fold(HashMap::new(), |mut pre, i| {
                let mut f = |a, b| {
                    pre.insert(
                        (a, b),
                        if let Some(count) = pre.get(&(a, b)) {
                            count
                        } else {
                            &0
                        } + 1,
                    )
                };
                f(i[0], i[1]);
                f(i[2], i[3]);
                f(i[0], i[3]);
                f(i[2], i[1]);
                pre
            });

        // 查看四个定点的数量
        match (
            map.remove(&(x, y)),
            map.remove(&(a, b)),
            map.remove(&(x, b)),
            map.remove(&(a, y)),
        ) {
            // 有四个顶点
            (Some(a), Some(b), Some(c), Some(d)) => {
                // 数量大于1就返回false
                if a > 1 || b > 1 || c > 1 || d > 1 {
                    return false;
                }
            }
            // 只有 左下点 和 右上点，左上 或者 右下 没有，返回false
            (Some(_), Some(_), ..) => {
                return false;
            }
            _ => {}
        }

        // 其余点如果出现次数不是偶数则返回false
        for (_, a) in map.iter() {
            if a % 2 != 0 {
                return false;
            }
        }

        true
    }
}

// @lc code=end

