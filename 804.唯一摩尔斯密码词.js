/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const aIndex = 'a'.charCodeAt();
  var resArr = [];
  words.map(i => 
      resArr.push(i.split('').map(j => arr[j.charCodeAt() - aIndex]).join(''))
  )
  obj = {};
  return resArr.reduce((pre, cur) => {
      var num = 0;
      if(!obj[cur]) {
          obj[cur] = true;
          num = 1;
      }
  return pre + num;
}, 0)
};