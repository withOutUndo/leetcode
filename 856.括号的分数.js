var scoreOfParentheses = function(S) {
  const stack = [];

  for (let index = 0; index < S.length; index++) {
    const i = S[index];
    if (i === "(") {
      stack.unshift(i);
      continue;
    }
    if (i === ")") {
      let sum = 0;
      while (stack[0] !== "(") {
        sum = sum + stack.shift();
      }

      stack[0] = sum ? sum * 2 : 1;
    }
  }

  return stack.reduce((pre, cur) => pre + cur, 0);
};

console.log(scoreOfParentheses("(()(()))"));
