/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 12:47:26
 * @LastEditTime: 2019-08-15 13:04:27
 * @LastEditors: Please set LastEditors
 */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  const length = timeSeries.length;
  if (length < 1) {
    return 0;
  }
  let res = duration;

  for (let index = 1; index < length; index++) {
    const time = timeSeries[index] - timeSeries[index - 1];
    res += Math.min(time, duration);
  }

  return res;
};

console.log(findPoisonedDuration([1, 4, 5, 7, 8, 9], 2));
