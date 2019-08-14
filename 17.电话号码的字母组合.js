/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 12:42:04
 * @LastEditTime: 2019-08-14 13:18:14
 * @LastEditors: Please set LastEditors
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
    return [];
  }
  const length = digits.length;
  let res = [];

  const obj = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

  const fn = (str, index) => {
    if (index === length) {
      res.push(str);
      return;
    }
    let arr = obj[digits[index]];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      fn(str + element, index + 1);
    }
  };

  fn("", 0);

  return res;
};

console.log(letterCombinations("232"));
