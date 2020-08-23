var shortestSeq = function (big, small) {
  let left = 0;
  let len = Number.MAX_SAFE_INTEGER;
  let res = [];

  let count = new Array(small.length).fill(0);

  let indexCache = small.reduce((pre, cur, index) => {
    pre[cur] = index;
    return pre;
  }, {});

  for (let i = 0; i < big.length; i++) {
    const item = big[i];
    const index = indexCache[item];

    if (index >= 0) {
      count[index]++;
      if (count.every((i) => i > 0)) {
        while (left < i) {
          const index = indexCache[big[left]];
          if (index >= 0 && count[index] > 1) {
            left++;
            count[index] = count[index] - 1;
          } else if (index === undefined) {
            left++;
          } else {
            break;
          }
        }
        if (i - left < len) {
          len = i - left;
          res = [left, i];
        }
      }
    }
  }

  return res;
};

console.log(shortestSeq([7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7], [1, 5, 9, 7, 8]));
