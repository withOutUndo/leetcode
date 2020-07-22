var lastStoneWeight = function(stones) {
  stones = stones.sort((a, b) => b - a);

  while(stones.length > 1) {
    let [a, b] = stones;

    stones.splice(0, 2);
    if (a === b) {
      continue;
    }    

    let x = Math.abs(a - b);
    if (stones.length === 0) {
        return x;
    }

    for (var i = 0, len = stones.length; i < len; i++) {
      if (stones[i] <= x) {
        stones.splice(i, 0, x);
        break;
      }
      if (i == len - 1) {
        stones.push(x);
      }
    }
  }

  return stones[0] || 0;
}

console.log(lastSotoneWeight([1, 2, 3, 4, 5]));
