/*
 * @Author: xuhuan
 * @Date: 2019-11-29 13:04:39
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-11-30 14:45:37
 * @Description:
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  const stack = [];

  for (let index = 0; index < s.length; index++) {
    const item = s[index];

    if (item === ")") {
      let str = "";
      while (stack[0] !== "(") {
        let s = stack.shift();
        if (s.length > 1) {
          s = s
            .split("")
            .reverse()
            .join("");
        }
        str += s;
      }

      stack.shift();
      stack.unshift(str);
    } else {
      stack.unshift(item);
    }
  }

  return stack.reverse().join("");
};

console.log(reverseParentheses("((abc)(def))(ghi(jkl))"));
console.log(reverseParentheses(""));
