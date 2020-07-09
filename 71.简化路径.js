/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const arr = path.split('/');
    let stack = [];

    arr.map(i => {
      if (i === '..') {
        stack.shift();
      } else if (i && i !== '.') {
        stack.unshift(i);
      }
    })

    return '/' + stack.reverse().join('/');
};

console.log(simplifyPath("/a/../../b/../c//.//"));
console.log(simplifyPath("/a//b////c/d//././/.."));
console.log(simplifyPath("/a/./b/../../c/"));
console.log(simplifyPath("/../"));