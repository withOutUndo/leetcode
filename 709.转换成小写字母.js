/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  return str.split('').reduce((pre, cur) => {
      var code = cur.charCodeAt();
      return `${pre}${code < 91 && code > 64 ? String.fromCharCode(code + 32) : cur}`;
  }, '')
};