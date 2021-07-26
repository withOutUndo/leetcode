/*
 * @lc app=leetcode.cn id=1743 lang=javascript
 *
 * [1743] 从相邻元素对还原数组
 */

// @lc code=start
/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function (adjacentPairs) {
    const map = adjacentPairs.reduce((pre, item) => {
        const [x, y] = item;
        pre[x] = (pre[x] || []).concat(y);
        pre[y] = (pre[y] || []).concat(x);
        return pre;
    }, {});

    let stack = [];
    for (let key in map) {
        if (map[key].length === 1) {
            stack = [+key];
            break;
        }
    }

    let res = [];
    const cache = {};
    while (stack.length) {
        const top = stack.shift();
        res.push(top);
        cache[top] = true;

        const next = map[top].filter(i => !cache[i]);
        if (next.length) {
            stack.unshift(next[0]);
        }
    }

    return res;
};
// @lc code=end

restoreArray([[2,1],[3,4],[3,2]])