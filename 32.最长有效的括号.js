/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const arr = s.split("");
  const stack = [];
  const obj = {
    "(": ")",
  };
  let res = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (stack.length < 1) {
      stack.push({s:element, i: index});
      continue;
    }
    const stackLast = stack[stack.length - 1].s;
    if (obj[stackLast] !== element) {
      stack.push({s:element, i: index});
      continue;
    }

    if (obj[stackLast] === element) {
      stack.pop();
      if (stack.length) {
        res = Math.max(res, index - stack[stack.length - 1].i);
      } else {
        res = Math.max(res, index);
      }
      continue;
    }
  }

  return res;
};

console.log(longestValidParentheses("(()()()((()))()"));
