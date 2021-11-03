/*
 * @lc app=leetcode.cn id=407 lang=rust
 *
 * [407] 接雨水 II
 */

// @lc code=start
use std::cmp::Ordering;
use std::collections::BinaryHeap;

#[derive(Copy, Clone, Eq, PartialEq)]
struct Item {
    h: i32,
    x: usize,
    y: usize,
}

// The priority queue depends on `Ord`.
// Explicitly implement the trait so the queue becomes a min-heap
// instead of a max-heap.
impl Ord for Item {
    fn cmp(&self, other: &Self) -> Ordering {
        // to make implementations of `PartialEq` and `Ord` consistent.
        other.h.cmp(&self.h)
    }
}

// `PartialOrd` needs to be implemented as well.
impl PartialOrd for Item {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

impl Solution {
    pub fn trap_rain_water(height_map: Vec<Vec<i32>>) -> i32 {
        let m = height_map.len();
        let n = height_map[0].len();

        if m < 3 || n < 3 {
            return 0;
        }
        let mut visited = vec![vec![false; n]; m];
        let mut pq: BinaryHeap<Item> = BinaryHeap::new();

        for i in 0..m {
            for j in 0..n {
                if i == 0 || j == 0 || i == m - 1 || j == n - 1 {
                    pq.push(Item {
                        h: height_map[i][j],
                        x: i,
                        y: j,
                    });
                    visited[i][j] = true;
                }
            }
        }

        let next_point: Vec<(i32, i32)> = vec![(-1, 0), (0, 1), (1, 0), (0, -1)];
        let mut res = 0;
        while pq.len() > 0 {
            if let Some(Item { h, x, y }) = pq.pop() {
                for (i, j) in next_point.iter() {
                    let nx = (x as i32 + i) as usize;
                    let ny = (y as i32 + j) as usize;

                    if nx >= m || ny >= n || visited[nx][ny] {
                        continue;
                    }

                    if h > height_map[nx][ny] {
                        res += h - height_map[nx][ny];
                    }
                    pq.push(Item {
                        h: h.max(height_map[nx][ny]),
                        x: nx,
                        y: ny,
                    });
                    visited[nx][ny] = true;
                }
            }
        }

        res
    }
}
// @lc code=end

