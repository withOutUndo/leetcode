/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let length = s.length;
  let leftStack = [];
  let startStack = [];

  for (let i = 0; i < length; i++) {
    const j = s[i];

    switch (j) {
      case "(":
        leftStack.unshift(i);
        break;
      case ")": {
        if (leftStack.length) {
          leftStack.shift();
          break;
        }
        if (startStack.length) {
          startStack.shift();
          break;
        }
        return false;
      }
      case "*":
        startStack.unshift(i);
        break;
    }
  }

  while (leftStack.length) {
    const left = leftStack.shift();
    const start = startStack.shift();
    if (left > start) {
      return false;
    }
  }

  return leftStack.length === 0;
};
// @lc code=end

const a = checkValidString(
  "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
);

console.log(a);
