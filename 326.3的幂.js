// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。

// 示例 1:

// 输入: 27
// 输出: true
// 示例 2:

// 输入: 0
// 输出: false
// 示例 3:

// 输入: 9
// 输出: true
// 示例 4:

// 输入: 45
// 输出: false


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n <= 0) {
    return false;
  }
  const a = n.toString(3).split('');

  return a.reduce((pre, cur) => {
    return pre + Number(cur);
  }, 0) === 1;
};

var isPowerOfThree2 = function(n) {
  if (n < 1) {
      return false;
  }
  return (205891132094649 % n) === 0
};

console.log(isPowerOfThree2(27));
console.log(isPowerOfThree2(63));
console.log(isPowerOfThree2(45));
console.log(isPowerOfThree2(100));
console.log(isPowerOfThree2(19684));