/*
 * @Author: xuhuan
 * @Date: 2019-08-04 14:02:58
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-09-26 13:19:28
 * @Description:
 */
/**
 * @param {number[][]} books
 * @param {number} shelf_width
 * @return {number}
 */
var minHeightShelves = function(books, shelf_width) {
  let dp = [0];
  const length = books.length;

  for (let i = 1; i <= length; i++) {
    let width = 0;
    let height = 0;
    let j = i;

    while (0 < j) {
      height = Math.max(height, books[j - 1][1]);
      width += books[j - 1][0];
      if (width > shelf_width) {
        break;
      }
      dp[i] = Math.min(dp[j - 1] + height, dp[i] || Infinity);
      j--;
    }
  }
  return dp[length];
};

console.log(
  minHeightShelves([[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]], 4)
);
