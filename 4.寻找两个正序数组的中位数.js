/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let length = nums1.length + nums2.length;
  let index = Math.ceil(length / 2) - 1;
  let count = length % 2 === 0 ? 2 : 1;
  let arr = [];

  while (nums1.length && nums2.length) {
    let i = nums1[0];
    let j = nums2[0];
    if (i < j) {
      item = nums1.shift();
    } else {
      item = nums2.shift();
    }

    if (index === 0) {
      arr.push(item);
      if (arr.length === count) {
        return arr.reduce((a, b) => a + b, 0) / count;
      }
      continue;
    }
    index--;
  }

  while (nums1.length) {
    let item = nums1.shift();
    if (index === 0) {
      arr.push(item);
      if (arr.length === count) {
        return arr.reduce((a, b) => a + b, 0) / count;
      }
      continue;
    }
    index--;
  }

  while (nums2.length) {
    let item = nums2.shift();
    if (index === 0) {
      arr.push(item);
      if (arr.length === count) {
        return arr.reduce((a, b) => a + b, 0) / count;
      }
      continue;
    }
    index--;
  }
};
// @lc code=end

