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
  const len = timePoints.length;
  
  const getMinute = function([h, m]) {
    h = Number(h);
    m = Number(m);
    return h * 60 + m;
  }
  for (let index = 0; index < len; index++) {
    const i = timePoints[index];
    const difference = i.split(':');
    const minute = getMinute(difference);
    if(resArr.indexOf(minute) > -1) {
        return 0;
    };
    resArr.push(minute);
  }
  let res = 24 * 60;
  console.log(resArr);

  const sortArr = resArr.sort((a, b) => a - b);
  const arr = [...sortArr, sortArr[0] + 60 * 24]
  for (let index = 0; index < len; index++) {
    res = Math.min(res, arr[index + 1] - arr[index])
  }

  return res;
};
// console.log(findMinDifference(["23:59","00:00"]));
// console.log(findMinDifference(["01:01","03:00", "23:59"]));
// console.log(findMinDifference(["14:49","09:56","01:02"]));
// console.log(findMinDifference(["12:12","12:13","00:12","00:13"]));
// console.log(findMinDifference(["12:12","12:13"]));
console.log(findMinDifference(["12:01","00:10","00:19"]));
