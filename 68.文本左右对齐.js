/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let arr = [];
  let len = 0;
  let res = [];

  const space = new Array(maxWidth).join(" ");

  const buildStr = (arr, isLast = false) => {
    /**
     * 最后一行的数据中间只能有一个空格
     * 总长度不超过maxWidth就可以了
     */
    if (isLast) {
      return (arr.join(" ") + space).slice(0, maxWidth);
    }

    const arrLen = arr.length;
    /**
     * 需要加入插入空格的间隙有多少
     */
    const count = arrLen - 1 || 1;
    /**
     * 数组内所有字符的长度和
     */
    const len = arr.reduce((pre, cur) => pre + cur.length, 0);
    /**
     * 每个间隙需要插入多少个空格
     */
    const a = Math.floor((maxWidth - len) / count);

    /**
     * 需要多补一个空格的间隙个数
     */
    const countB = maxWidth - count * a - len;

    return arr
      .map((i, index) => {
        /**
         * 数组有多个元素，则最后一个元素后面不添加空格
         */
        if (arrLen > 1 && index === arrLen - 1) {
          return i;
        }
        /**
         * 插入空格，小于countB的需要多加一个空格
         */
        return i + space.slice(0, a + (index < countB && 1));
      })
      .join("");
  };

  words.forEach((i) => {
    /**
     * 模拟加入1个空格
     */
    const nextLen = len + i.length + (len ? 1 : 0);
    if (nextLen <= maxWidth) {
      arr.push(i);
      len = nextLen;
    } else {
      res.push(buildStr(arr));
      arr = [i];
      len = i.length;
    }
  });

  if (arr.length) {
    res.push(buildStr(arr, true));
  }

  return res;
};
// @lc code=end
