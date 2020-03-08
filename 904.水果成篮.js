/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  let left = 0;
  let set = new Set();
  let obj = {};
  let res = 0;

  for (let i = 0; i < tree.length; i++) {
    let item = tree[i];
    obj[item] = i;
    set.add(item);
    let size = set.size;

    if (size === 3) {
      res = Math.max(res, i - left);
      var [a, b] = set;
      if (obj[b] < obj[a]) {
        [a, b] = [b, a];
      }
      left = obj[a] + 1;
      set.delete(a);
      continue
    }
  }
  res = Math.max(res, tree.length - left);

  return res;
};

console.log(totalFruit([3, 3, 3, 1, 3, 2, 2, 2, 3, 3, 4]));
console.log(totalFruit([1, 2, 1, 2, 1]));
console.log(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3]));
console.log(totalFruit([1, 1, 6, 5, 6, 6, 1, 1, 1, 1]));
