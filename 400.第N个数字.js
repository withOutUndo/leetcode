/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  if (n < 10) {
    return n;
  }
  num = 0;
  i = 1;
  let res;
  while (n > 9 * 10 ** (i - 1) * i) {
    n = n - 9 * 10 ** (i - 1) * i;
    console.log(n);
    i++;
  }
  var a = n % i;
  var num = Math.floor(n / i) + 10 ** (i - 1);
  num = num.toString();

  if (a > 0) {
    res = num[a - 1];
  } else {
    res = (10 + (num[i - 1]) - 1) % 10;
  }
  return res;
};

// findNthDigit(367);
// findNthDigit(3);
// findNthDigit(9);
// findNthDigit(11);
// findNthDigit(12389843);
console.log(findNthDigit(29))
