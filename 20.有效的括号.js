/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const arr = s.split("");
  const stack = [];
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const stackLast = stack[stack.length - 1];
    if (stack.length < 1 || obj[stackLast] !== element) {
      stack.push(element);
    }

    if (obj[stackLast] === element) {
      stack.pop();
    }
  }

  if (stack.length) {
    return false;
  }
  return true;
};

console.log(isValid('(){}[]'));
console.log(isValid('()}{[]'))
