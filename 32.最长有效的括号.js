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
      continue;
    }
  }
  
  if (!stack.length) {
    return s.length;
  }
  // 把整个数组的长度放到栈里面
  stack.push({s: '', i: s.length});
  let res = stack[0].i;
  for (let i = 1; i < stack.length; i++) {
    res = Math.max(stack[i].i - stack[i - 1].i - 1, res);
  }

  return res;
};

console.log(longestValidParentheses("(()()()((())"));
