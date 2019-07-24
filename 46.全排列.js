function permute(nums) {
  var n = nums.length;
  var k = 0;
  var res = [];
  var x = [];
  x[k] = -1;
  var canUsed = n => {
    return x.slice(0, k).every(m => m != n);
  };
  while (k >= 0) {
    x[k] = x[k] + 1;
    while (x[k] < n && !canUsed(x[k])) {
      x[k] = x[k] + 1;
    }
    if (x[k] > n - 1) {
      k = k - 1;
    } else if (k == n - 1) {
      res.push(x.map(i => nums[i]));
    } else {
      k = k + 1;
      x[k] = -1;
    }
  }

  return res;
}
