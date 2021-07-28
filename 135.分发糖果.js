/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let arr = ratings.reduce((pre, i, index) => {
    let l = index === 0 ? -Infinity : ratings[index - 1];
    const x = Number(pre[index - 1] || 0);
    const y = l < i ? x + 1 : Math.min(1, x - 1);
    if (y === 0) {
      pre.push(1);
      let k = index - 1;
      let last = y;
      while (k >= 0 && pre[k] === last + 1 && ratings[k] > ratings[k + 1]) {
        last = pre[k];
        pre[k]++;
        k--;
      }
      return pre;
    }
    pre.push(y);
    return pre;
  }, []);
  
  return arr.reduce((a, b) => a + b, 0);
};
// @lc code=end

console.log(candy([1,2,2,13,5,7,3,1,2,3,4,8,9,0,1,2,3,7,3]))
console.log(candy([1, 4, 2, 5, 7, 9, 8, 6, 4, 3, 1, 1, 3, 1, 4]));
