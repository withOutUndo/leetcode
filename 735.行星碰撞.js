/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  asteroids.forEach(i => {
    if (!stack[0]) {
      stack.unshift(i);
      return;
    } 
    if (i < 0) {
      while (true) {
        if (stack.length === 0 || stack[0] < 0) {
          stack.unshift(i);
          break;
        }
        if (Math.abs(i) === stack[0]) {
          stack.shift();
          break;
        } 
        if (Math.abs(i) > stack[0]) {
          stack.shift();
          continue;
        } 
        if (Math.abs(i) < stack[0]) {
          break;
        }
      }
    } else {
      stack.unshift(i);
    }

  })

  return stack.reverse();
};


console.log(asteroidCollision([10, -10]));
console.log(asteroidCollision([-5, 10, -10, 5]));
console.log(asteroidCollision([-10, -10]));
console.log(asteroidCollision([1, -2, -2, -2]));
console.log(asteroidCollision([5, 10, -5]));