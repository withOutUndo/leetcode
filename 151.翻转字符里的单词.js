/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim();
  let length = s.length;
  let arr = [];

  for (let i = 0; i < length; i++) {
    const ele = s[i];

    if (ele !== ' ') {
      if (arr[0] && arr[0] !== ' ') {
        arr[0] = arr[0] + ele;
      } else {
        arr.unshift(ele);
      }
    } else {
      if (arr[0] !== ' ') {
        arr.unshift(ele)
      }
    }
    
  }

  console.log(arr);
  return arr.join('');
};


console.log(reverseWords('the sky is blue'));
console.log(reverseWords('  the example!'));