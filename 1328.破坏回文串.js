/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
  const length = palindrome.length;
  if (length <= 1) {
    return "";
  }

  palindrome = palindrome.split('');

  const A_CODE = 'a'.charCodeAt();

  for (let index = 0; index < length; index++) {
    const i = palindrome[index].charCodeAt();
    if (index !== (length - 1) / 2 && i - A_CODE > 0) {
      palindrome[index] = 'a';
      return palindrome.join('');
    }
  }

  palindrome[length - 1] = 'b';

  return palindrome.join('');
};

console.log(breakPalindrome('aa'));
console.log(breakPalindrome('aba'));
console.log(breakPalindrome('aaa'));
console.log(breakPalindrome('abcba'));
