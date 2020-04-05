/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (S, indexes, sources, targets) {
  let arr = S.split("");
  indexes.forEach((i, index) => {
    let source = sources[index];
    let target = targets[index];
    let length = source.length;
    let s = arr.slice(i, i + length).join("");

    if (s === source) {
      arr.splice(i, length, target, ...new Array(length - 1).fill(""));
    }
  });

  return arr.join("");
};

console.log(
  findReplaceString("abaaaacd", [0, 2], ["a", "cd"], ["eee", "ffff"]) ===
    "eeebaaaacd"
);

console.log(
  findReplaceString("abcd", [0, 2], ["a", "cd"], ["eee", "ffff"]) === "eeebffff"
);

console.log(
  findReplaceString(
    "vmokgggqzp",
    [3, 5, 1],
    ["kg", "ggq", "mo"],
    ["s", "so", "bfr"]
  )
);
