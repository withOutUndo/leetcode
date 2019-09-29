/*
 * @Author: xuhuan
 * @Date: 2019-09-29 21:07:04
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-09-29 21:38:42
 * @Description: 
 */
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  let strObj = {};
  let indexObj = {};
  let res = [];

  S.split("").forEach((i, index) => {
    indexObj[index] = i;
    if (!strObj[i]) {
      strObj[i] = {};
      strObj[i]["start"] = index;
    }
    strObj[i]["end"] = index;
  });
  tag = 0;
  while (tag < S.length) {
    let s = indexObj[tag];
    let {start, end} = strObj[s];

    for (let i = start; i < end; i++) {
      const {end: e} = strObj[indexObj[i]];
      if (end < e) {
        end = e
      }
    }

    res.push(end - start + 1);
    tag = end + 1;
  }

  return res;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));
console.log(partitionLabels("abc"));
