/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  let length = expression.length;
  let arr = [];
  let cache = [];
  let char = { "/": true, "+": true, "-": true };

  for (let i = 0; i < length; i++) {
    let item = expression[i];
    if (char[item] && item !== "/" && cache.length) {
      cache.length === 3 && cache.push("+");
      arr.push([...cache.reverse()]);
      cache = [];
    }
    if (char[item] || char[cache[0]] || !cache.length) {
      cache.unshift(item);
    } else {
      cache[0] += item;
    }
  }
  cache.length === 3 && cache.push('+');
  arr.push([...cache.reverse()]);

  const mapToNumber = (i) => (char[i] ? i : Number(i));

  const add = (a, b) => {
    let [q, w, e, r] = a.map(mapToNumber);
    let [z, x, c, v] = b.map(mapToNumber);

    let m = w * v;
    let n = x * r;
    let l = Number(`${q}${m}`) + Number(`${z}${n}`);

    return [l > 0 ? "+" : "-", Math.abs(l), "/", r * v];
  };

  const format = ([x, a, _, b]) => {
    if (a == 0) {
      return "0/1";
    }

    let i = 2;

    while (i <= a && i <= b) {
      if (a % i === 0 && b % i === 0) {
        a /= i;
        b /= i;
      } else {
        i++;
      }
    }

    return `${x === "-" ? x : ""}${a}/${b}`;
  };

  return format(
    arr.reduce(
      (pre, cur) => {
        return add(pre, cur);
      },
      ["+", "0", "/", "1"]
    )
  );
};

// console.log(fractionAddition("-1/2+1/2"));
console.log(fractionAddition('-4/10'))
