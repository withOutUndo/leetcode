/*
 * @lc app=leetcode.cn id=229 lang=typescript
 *
 * [229] 求众数 II
 */

// @lc code=start
function majorityElement(nums: number[]): number[] {
  let a = null,
    b = null,
    aCount = 0,
    bCount = 0;

  nums.forEach((i) => {
    if (aCount === 0 && i !== b) {
      a = i;
      aCount += 1;
    } else if (bCount === 0 && i !== a) {
      b = i;
      bCount += 1;
    } else if (i === a) {
      aCount += 1;
      aCount === 0 && (a = null);
    } else if (i === b) {
      bCount += 1;
      bCount === 0 && (b = null);
    } else {
      aCount--;
      bCount--;
    }
  });

  aCount = nums.filter((i) => i === a).length;
  bCount = nums.filter((i) => i === b).length;

  let res = [];
  let n = nums.length / 3;
  if (aCount > n) {
    res.push(a);
  }
  if (bCount > n) {
    res.push(b);
  }

  return res;
}
// @lc code=end

majorityElement([1, 1, 1, 3, 3, 2, 2, 2]);
majorityElement([1]);
majorityElement([3, 2, 3]);
