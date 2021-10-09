/*
 * @lc app=leetcode.cn id=352 lang=javascript
 *
 * [352] 将数据流变为多个不相交区间
 */

// @lc code=start

var SummaryRanges = function () {
  this.parents = [];
};

/**
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
  this.parents[val] = val;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  let res = [];
  let preIndex = null;
  this.parents.forEach((item, index) => {
    if (preIndex !== index - 1) {
      res.push([item, item]);
    } else {
      res[res.length - 1][1] = item;
    }
    preIndex = index;
  });

  return res;
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
// @lc code=end
