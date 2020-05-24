/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = [];
    var fn = n => {
        const a = n % 3 ? '' : 'Fizz';
        const b = n % 5 ? '' : 'Buzz';

        return a + b || n.toString();
    }
    
    return new Array(n).fill(0).map((_, index) => fn(index + 1));
};