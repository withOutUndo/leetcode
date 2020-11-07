/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  let res = [];

  let sMap = wordDict.join('').split('').reduce((pre, cur) => {
    pre[cur] = true;
    return pre;
  }, {})
  let arr = s.split('').filter(i => {
    return !sMap[i];
  });

  if (arr.length) {
    return [];
  }
  const wordMap = wordDict.reduce((pre, cur) => {
    pre[cur] = true;
    return pre;
  }, {});

  const fn = (s, S) => {
    let i = 1;
    if (s.length === 0) {
      res.push(S.join(' '));
    }
    while (i <= s.length) {
      str = s.slice(0, i);
      if (wordMap[str]) {
        console.log(str);
        fn(s.slice(i, s.length), [...S, str]);
      }
      i++;
    }
  };

  fn(s, []);

  return res;
};

// @lc code=end
