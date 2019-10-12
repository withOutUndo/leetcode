/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  res = 0;
  let obj = {};
  answers.map(i => {
    if (i === 0 || !obj[i]) {
      res = res + 1 + i;
      obj[i] = 1;
      return;
    }
    if (obj[i]) {
      obj[i]++;
      if (obj[i] === i + 1) {
        obj[i] = null;
      }
    }
  });
  return res;
};
