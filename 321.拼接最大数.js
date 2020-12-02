/*
 * @lc app=leetcode.cn id=321 lang=javascript
 *
 * [321] 拼接最大数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  let res = null;

  let start = Math.max(0, k - nums2.length);
  let end = Math.min(k, nums1.length);

  for (; start <= end; start++) {
    let a = removeKdigits(nums1, nums1.length - start);
    let b = removeKdigits(nums2, nums2.length - k + start);
    let c = merge(a, b);
    if (res) {
      res = compare(res, c);
    } else {
      res = c;
    }
  }

  return res;
};

var removeKdigits = function (num, k) {
  let stack = [];
  let i = 0;
  const baseK = k;
  for (; i < num.length && k; i++) {
    while (num[i] > stack[0] && stack.length && k) {
      stack.shift();
      k--;
    }
    stack.unshift(num[i]);
  }
  let arr = stack
    .reverse()
    .concat(num.filter((_, index) => index >= i))
    .splice(0, num.length - baseK);

  // while (arr[0] === "0" && arr.length > 1) {
  //   arr.shift();
  // }

  return arr;
};

const merge = function (nums1, nums2) {
  let res = [];
  while (nums1.length && nums2.length) {
    if (nums1[0] === nums2[0]) {
      let i = 1;
      while (i < nums1.length && i < nums2.length && nums1[i] === nums2[i]) {
        i++;
      }
      if (nums2[i] === undefined || nums1[i] > nums2[i]) {
        res.push(nums1.shift());
        continue;
      }
      if (nums1[i] === undefined || nums2[i] > nums1[i]) {
        res.push(nums2.shift());
        continue;
      }
    }
    if (nums1[0] > nums2[0]) {
      res.push(nums1.shift());
    } else {
      res.push(nums2.shift());
    }
  }
  while (nums1.length) {
    res.push(nums1.shift());
  }
  while (nums2.length) {
    res.push(nums2.shift());
  }
  return res;
};

const compare = function (nums1, nums2) {
  let i = 0;
  while (i < nums1.length) {
    if (nums1[i] === nums2[i]) {
      i++;
      continue;
    }
    if (nums1[i] > nums2[i]) {
      return nums1;
    } else {
      return nums2;
    }
  }
  return nums1;
};
// @lc code=end
