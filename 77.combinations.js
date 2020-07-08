/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let l = 0;
  let res = [];
  let cache = [];
  let cur = 1;

  while (l >= 0) {
    if (l < k && cur <= n) {
      cache.push(cur);
      cur++;
      l++;
    } else if (l == k) {
      res.push([...cache]);
      cur = cache.pop() + 1;
      l--;
    } else {
      cur = cache.pop() + 1;
      l--;
    }
  }

  return res;
};

combine(4, 3);
