/*
 * @lc app=leetcode.cn id=726 lang=javascript
 *
 * [726] 原子的数量
 */

// @lc code=start
/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  let stack = [new Map()];
  const length = formula.length;
  let i = 0;

  const getNum = () => {
    let numStr = "";
    while (i < length && !isNaN(formula[i])) {
      numStr = numStr + formula[i];
      i++;
    }
    return Number(numStr || 1);
  };

  const getAtom = () => {
    let atom = formula[i];
    i++;
    while (i < length && formula[i] >= "a" && formula[i] <= "z") {
      atom = atom + formula[i];
      i++;
    }
    return atom;
  };

  while (i < length) {
    const s = formula[i];
    if (s === "(") {
      i++;
      stack.unshift(new Map());
    } else if (s === ")") {
      i++;
      const num = getNum();
      const top = stack.shift();
      for (const [atom, count] of top.entries()) {
        stack[0].set(atom, (stack[0].get(atom) || 0) + count * num);
      }
    } else {
      const atom = getAtom();
      const num = getNum();
      stack[0].set(atom, (stack[0].get(atom) || 0) + num);
    }
  }

  return Array.from(stack[0])
    .sort()
    .reduce((pre, [atom, count]) => {
      return pre + atom + (count > 1 ? count : "");
    }, "");
};
// @lc code=end
