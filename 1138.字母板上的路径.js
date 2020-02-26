/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  const A_CODE = "a".charCodeAt();
  var getPos = s => {
    const code = s.charCodeAt() - A_CODE;

    return [Math.floor(code / 5), code % 5];
  };

  let last = [0, 0];
  let res = '';
  var fn = type => (a, b) => (a > b ? type[0] : type[1]).repeat(Math.abs(a - b));
  var fnX = fn(['D', 'U']);
  var fnY = fn(['R', 'L']);
  for (let index = 0; index < target.length; index++) {
    const [x2, y2] = getPos(target[index]);
    let [x1, y1] = last;
    if (x2 > 4 && y1 > 0) {
      res = res + fnX(4, x1) + fnY(y2, y1) + 'D' + '!';
    } else {
      res = res + fnX(x2, x1)  + fnY(y2, y1) + '!';
    }
    last = [x2, y2];
  }

  return res;
};

console.log(alphabetBoardPath('leet'));
console.log(alphabetBoardPath('aeze'));
