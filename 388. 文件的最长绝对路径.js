/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  let array = input.split("\n");
  let stack = [];
  let curLen = 0;
  let res = 0;
  while (array.length) {
    let item = array.shift();
    // if (stack.length === 0) {
    //   stack.unshift(item);
    //   curLen = item.length;
    //   res = Math.max(res, curLen);
    //   continue;
    // }
    let matchRes = item.match(/\t/g);
    let tabLength = matchRes ? matchRes.length : 0;

    while (stack.length !== tabLength) {
      let del = stack.shift();
      curLen -= del.length;
    }

    item = item.replace(/\t/g, "");
    stack.unshift(item);
    curLen += item.length;
    if (item.match(/\./)) {
      res = Math.max(res, curLen + tabLength);
    }
  }
  return res;
};

console.log(lengthLongestPath("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"));
console.log(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"));

console.log(lengthLongestPath(''));
console.log(lengthLongestPath('a.'));
console.log(lengthLongestPath('    a.text'));