/*
 * @Author: xuhuan
 * @Date: 2019-08-21 22:08:29
 * @LastEditors: xuhuan
 * @LastEditTime: 2019-08-21 22:08:29
 * @Description: 
 */
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  const length = words.length;
  if (length < 2) {
    return 0;
  }
  let res = 0;

  const arr = words.map(i => {
    let obj = {
      length: i.length
    }
    for (let index = 0; index < i.length; index++) {
      const element = i[index];
      obj[element] = true;
    }

    return obj;
  })

  for (let i = 0; i < length-1; i++) {
    
    for (let j = i + 1; j < length; j++) {
      let flag = true;
      for (let k = 0; k < arr[j].length; k++) {
        if (arr[i][words[j][k]]) {
          flag = false;
        }
      }

      if (flag) {
        res = Math.max(res, arr[i].length * arr[j].length);
      }
    }
    
  }
  
  return res;
};

console.log(maxProduct(['abc', 'def']));