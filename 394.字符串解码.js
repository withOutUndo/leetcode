/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  if (!s) {
    return '';
  }
  let stack = [];
  // 记录栈顶顶类型
  let stackTopType = "";

  s.split("").forEach((i) => {
    console.log(i);
    console.log(stack);
    let len = stack.length;
    if (!isNaN(i)) {
      if (len && stackTopType === "number") {
        stack[len - 1] += i;
        return;
      }
      stack.push(i);
      stackTopType = "number";
    } else if (i === "]") {
      let str = stack.pop();
      stack.pop();
      let num = stack.pop();
      // 把数字和字母乘起来
      let res = ''
      for (let index = 0; index < Number(num); index++) {
        res += str;
      }
      // 如果栈里面有数据。那么把字符串和栈顶顶数据连起来
      if (len > 3 && stack[len - 4] !== '[') {
        stack[len - 4] += res;
        return;
      }
      stack.push(res);
    } else if (i === "[") {
      stack.push('[');
      stackTopType = '[';
    } else {
      if (len && stackTopType === "string") {
        stack[len - 1] += i;
        return;
      }
      stack.push(i);
      stackTopType = "string";
    }

  });

  return stack[0];
};

console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"));
