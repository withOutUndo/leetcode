/*
 * @lc app=leetcode.cn id=1818 lang=javascript
 *
 * [1818] 绝对差值和
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
  const mod = 1000000007;
  const sum = nums1.reduce((sum, cur, i) => {
    return (sum + Math.abs(cur - nums2[i])) % mod;
  }, 0);

  nums1Copy = Array.from(nums1).sort((a, b) => a - b);

  const length = nums1.length;
  let max = 0;

  const binarySearch = (arr, target) => {
    let l = 0,
      r = length - 1;
    while (l + 1 < r) {
      let mid = Math.floor((l + r) / 2);
      if (arr[mid] < target) {
        l = mid;
      } else if (arr[mid] > target) {
        r = mid;
      } else {
        return mid;
      }
    }

    if (Math.abs(arr[l] - target) > Math.abs(arr[r] - target)) {
      return r;
    } else {
      return l;
    }
  };
  let n = length;
  function findclosed(val, nums1) {
    let left = 0,
      right = n - 1;
    while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2);

      if (nums1[mid] == val) {
        left = mid;
        right = mid;
        break;
      } else if (nums1[mid] < val) {
        left = mid;
      } else {
        right = mid;
      }
    }
    let maxleft = nums1[left];
    let minright = nums1[right];
    if (Math.abs(maxleft - val) > Math.abs(minright - val)) {
      return minright;
    } else {
      return maxleft;
    }
  }

  for (let i = 0; i < length; i++) {
    const element = nums2[i];
    const index = binarySearch(nums1Copy, element);

    max = Math.max(
      max,
      Math.abs(nums1[i] - element) - Math.abs(nums1Copy[index] - element)
    );
  }

  return (sum - max + mod) % mod;
};
// @lc code=end
