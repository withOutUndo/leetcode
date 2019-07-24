/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(i => i ** 2).sort((a, b) => a - b);
};

var sortedSquares = function(A) {
  let index = 0;

  while (A[index] < 0) index++;
  var i = index - 1;
  var j = index;
  var len = A.length;
  A = A.map(i => i ** 2);
  var res = [];

  while (i >= 0 && j < len) {
    if (A[i] >= A[j]) {
      res.push(A[j]);
      j++;
    } else {
      res.push(A[i]);
      i--;
    }
  }

  while (j < len) {
    res.push(A[j]);
    j++;
  }

  while (i >= 0) {
    res.push(A[i]);
    i--;
  }

  return res;
};
