// 给定一个 24 小时制（小时:分钟）的时间列表，找出列表中任意两个时间的最小时间差并已分钟数表示。

// 示例 1：

// 输入: ["23:59","00:00"]
// 输出: 1

// 备注:

// 列表中时间数在 2~20000 之间。
// 每个时间取值在 00:00~23:59 之间。

/**
 * @param {string[]} timePoints
 * @return {number}
 */

var findMinDifference = function(timePoints) {
  let resArr = [];
  let res = 1201;
  for (let index = 0; index < timePoints.length; index++) {
    const i = timePoints[index];
    const difference = Number(i.replace(':', ''));

    resArr.push(difference);
    if (difference > 1200) {
      resArr.push(difference - 2360);
    }
    
  }
  console.log(resArr);

  const getMinute = function(number) {
    if (number < 0) {
      number = Math.abs(number);
      return -(Math.floor(number / 100) * 60 + (number % 100));
    }
    return Math.floor(number / 100) * 60 + (number % 100)
  }
  resArr.sort((a, b) => a - b).forEach((i, index, arr) => {
    if (arr[index + 1] !== undefined) {
      const diff = Math.abs(getMinute(arr[index + 1]) - getMinute(i));
      if (diff === 1440) {
        return;
      }
      res = Math.min(res, diff > 720 ? 1440 - diff : diff);
    }
  })

  return Math.abs(res);
};

// console.log(findMinDifference(["23:59","00:00"]));
// console.log(findMinDifference(["01:01","03:00", "23:59"]));
// console.log(findMinDifference(["14:49","09:56","01:02"]));
// console.log(findMinDifference(["12:12","12:13","00:12","00:13"]));
// console.log(findMinDifference(["12:12","12:13"]));
console.log(findMinDifference(["12:01","00:10","00:19"]));
