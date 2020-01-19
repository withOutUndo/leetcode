/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  let stack = [];
  let star = [];
  s.split("").map((i, index) => {
    if (i === "(") {
      stack.unshift({ value: i, index });
    }
    if (i === ")") {
      if (stack[0] && stack[0].value === "(") {
        stack.shift();
      } else {
        stack.unshift({ value: i, index });
      }
    }

    if (i === "*") {
      star.push({ value: i, index });
    }
  });

  if (stack.length === 0) {
    return true;
  }

  return stack
  .filter(i => i.value !== "*")
  .map((i, index) => {
    let aLen = star.length;
    // console.log(star);
    if (aLen) {
      if (i.value === "(" && star[aLen - 1].index > i.index) {
        star.pop();
        return null;
      }
      if (i.value === ")" && star[0].index < i.index) {
        star.shift();
        return null;
      }
    }
    return i;
  }).reduce((pre, cur) => {
    return pre && !cur;
  }, true);
};

console.log(checkValidString("(*))"));
console.log(checkValidString("(*)))"));
console.log(checkValidString("(*)())"));
