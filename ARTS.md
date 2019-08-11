---
title: ARTS 打卡记录
date: 2019-05-04 09:34
tags:
---

## ARTS 第一周

### Algorithm
leetCode 709. 转换成小写字母
``` javascript
var toLowerCase = function(str) {
    return str.split('').reduce((pre, cur) => {
        var code = cur.charCodeAt();
        return `${pre}${code < 91 && code > 64 ? String.fromCharCode(code + 32) : cur}`;
    }, '')
};
```
* 将字符串分割，在用reduce累加结果，charCodeAt()获取code，判断code在64 和 91　之间，则+32，使用String.fromCharCode()转换为小写

### Review
[RxJS: Don’t Unsubscribe](https://medium.com/@benlesh/rxjs-dont-unsubscribe-6753ed4fda87)

* 在组件当中尽量少的subscribe，方便维护
* 使用一些能够自动停止流的操作符（take、takeWhile...）

### Tip

* 在菜鸟教程学习vim的一些常用命令
    * 多行注释 1、`<C-v>` 进入块操作模式，方向选择多行，I 在行首插入//，再esc就可以了。2、:1,10s#^#//#g,
* Linux 命令行`<C-r>` 可以查找历史命令


### Share
[認識 AsyncPipe (2) - 進階技巧](https://ithelp.ithome.com.tw/articles/10209602)

* Async 管道在Angular中能够实现自动退订
* 在@input() 为Observable时也不用再担心变更检测


---------



## ARTS 第二周

### Algorithm

leetCode 977. 有序数组的平方

- 第一次直接写的
  ``` javascript
  var sortedSquares = function(A) { 
      return A.map(i => i ** 2).sort((a, b) => a - b );
  }
  ```
  也能出结果。后来参考了别人的思路以及实现有了第二种写法
  ``` javascript
    var sortedSquares = function(A) {
        let index = 0;
        
        while(A[index] < 0)
        index ++;
        var i = index - 1;
        var j = index;
        var len = A.length;
        A = A.map(i => i\*\*2);
        var res = [];
        
        while(i >= 0 && j < len) {
            if(A[i] >= A[j]) {
                res.push(A[j]);
                j++;
            } else {
                res.push(A[i]);
                i--;
            }
        }
        
        while(j< len) {
            res.push(A[j]);
            j++;
        }
        
        while(i>= 0) {
            res.push(A[i]);
            i--;
        }
        
        return res;
    };

    ```
    思路就是找到距离0最近的一个位置。分别向两边查找，再插入结果数组



### Review

[So You Want to be a Functional Programmer (Part 1)](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536)

* Forget Everything You Know。学习函数式编程，忘记以前的思维。
    * Learning Functional Programming takes a while. So be patient.
* 以下为几个函数式编程的特点
    * Purity
    * Most useful Pure Functions must take at least one parameter.
    * All useful Pure Functions must return something.
    * Pure Functions will always produce the same output given the same inputs.
    * Pure functions have no side effects. (无副作用，我理解的就是不改变外部的变量等)
    * There are no variables in Functional Programming. (无变量)
    * Functional Programming uses recursion to do looping. (无循环，像for, while, do, repeat，使用递归)
    * Immutability creates simpler and safer code.

### Tip

* css自带变量的写法
    * 在学学习Ionic V4中修改组件的样式使用 `ion-content { --backgroud: #ccc }`。


### Share
* 这一周的share鸽了(没有看到合适的文章)

------------

## ARTS 第三周

### Algorithm

leetCode 804. 唯一摩尔斯密码词

  ``` javascript
  
    var uniqueMorseRepresentations = function(words) {
        const arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        const aIndex = 'a'.charCodeAt();
        var resArr = [];
        words.map(i => 
            resArr.push(i.split('').map(j => arr[j.charCodeAt() - aIndex]).join(''))
        )
        obj = {};
        return resArr.reduce((pre, cur) => {
            var num = 0;
            if(!obj[cur]) {
                obj[cur] = true;
                num = 1;
            }
        return pre + num;
    }, 0)
    };
  ```
  提示里面顺序都给好了，直接用charCodeAt() - a的位置，把单词分割再组合，再类似去重。



### Review

[When To Use TypeScript - A Detailed Guide Through Common Scenarios](https://khalilstemmler.com/articles/when-to-use-typescript-guide/)

* 关于何时使用TS的一些看法。
* 4 principles of object-oriented programming (encapsulation, abstraction, inheritance, and polymorphism).JS没有面向对象的4个原则（继承，封装，多态，抽象），TS是有的。还有一些修饰符。
* TS更适合多人团队，方便沟通。
* TS能提供编译时错误，比运行时错误要好一些。
* 还说到了生产软件与一些玩具软件。测试很重要（ps.需要好好学习这一块）。

### Tip

* 使用TypeORM
    * TypeORM的entity配置使用`[join(__dirname, '**/*.entity{.ts,.js}]`这样会更正确（start:dev也不会报错）。


### Share
* 发现一个Node版的Spring， [NestJS](https://docs.nestjs.cn/)，熟悉的Angular的写法。很亲切。学习学习。





## ARTS 第四周（2019-05-26）

### Algorithm

leetCode 46. 全排列

- 采用回溯法，将索引全排，再取对应位置到数值。
  ``` javascript
    function permute(nums) {
        var n = nums.length;
        var k = 0;
        var res = [];
        var x = [];
        x[k] = -1;
        var canUsed = n => {
            return x.slice(0, k).every(m => m != n);
        };
        while (k >= 0) {
            x[k] = x[k] + 1;
            while (x[k] < n && !canUsed(x[k])) {
            x[k] = x[k] + 1;
            }
            if (x[k] > n - 1) {
            k = k - 1;
            } else if (k == n - 1) {
            res.push(x.map(i => nums[i]));
            } else {
            k = k + 1;
            x[k] = -1;
            }
        }

        return res;
    }

  ```
  是否能用的索引数字开始的时候判断不对。想用对象来完成这个，但是比函数更绕。还有这个算法用的不熟，对几个分支条件判断不对。很容易死循环，相比递归方式可能更不容易出错。



### Review

[So You Want to be a Functional Programmer (Part 2)](https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-2-7005682cec4a)

* 这是一个外国老哥的系列文章。
* 这篇文章主要讲了在JS中，函数作为一等公民，可以作为参数或者返回值。在一些公共对方法可以更方便和便于理解封装。
* 关于函数作为返回值，形成闭包，可以访问一个外部函数的变量，在工作中还是有所实践。

### Tip

* RxJS
``` javascript
// 在调用此方法时不能确定gisDto加载完成，所以用
// rxjs对操作符组合来实现保证一定在加载完成之后，再调用后续对方法。
// takeWhile在false时自动停止当前流。方便！！！
interval(300).pipe(
    filter(() => this.gisDto.Map),
    mergeMap(() => {...},
    takeWhile(() => !this.gisDto.Map)
)
```

### Share
* 在学习NestJS的过程中发现一种新的一种前端API查询语言[GraphQL](https://graphql.cn/)，
> GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的运行时。 GraphQL 对你的 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。







## ARTS 第伍周（2019-06-02）

### Algorithm

leetCode 77. 组合

- 第0位从1开始填写，每一位大于前一位的数字，递归填写每一位。
  ``` javascript
    var combine = function(n, k) {
        const a = [];
        let res = [];
        
        var fn = (i) => {
            let start = (a[i-1] || 0) + 1;
            for(let j = start; j <= n; j++) {
                a[i] = j;
                if(i == k - 1) {
                
                    res.push(a);
                    continue;
                }
                fn(i+1);
            }
        }
        
        fn(0);
        
        return res;
        
    };

  ```
  感觉自己的写法太局限了。而且时间和内存都消耗很多。



### Review

[How to think like a programmer — lessons in problem solving](https://medium.com/free-code-camp/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2)

* 如何像程序员一样的思考解决问题，解决问题是一项重要的技能。
* 文章讲到分为以下几个步骤
    1. 理解。理解这个问题。试着用最简单的语句来陈述这个问题；
    2. 制定计划，冷静分析问题发生的步骤等；
    3. 将问题细分，一口吃不下大饼；分割成的小问题逐个击破；
    4. 遇到阻碍时，完全不用沮丧，每个人都会遇到。一个好的程序员在遇到困难时反而是兴趣，而不是恼火。
* 实践很重要，空谈误国，实干兴邦。
* 去跨过一个又一个困难把。

### Tip

* ios集成讯飞语音。
在公司的项目中用到一个老哥的导航插件，在ios端没有语音播放，
试着按照讯飞的文档集成。成功。
[文档](https://doc.xfyun.cn/msc_ios/index.html)，多读文档，过程中少了步骤老是报错，又看不懂。照着文档一步一步就成功了。

### Share
* 看了一个老哥的文章，有了一些认知上的新鲜事物（原来Angular是这样的）。[Learn Angular · GitBook](https://legacy.gitbook.com/book/trotyl/learn-angular/details)







## ARTS 第陆周（2019-06-09）

### Algorithm

leetCode 22. 括号生成

- 递归求解
  ``` javascript
    var generateParenthesis = function(n) {
        let res = []
        let insertStr = (soure,start, newStr) => {
            return soure.slice(0, start) + newStr + soure.slice(start)
        }
        const obj = {};
        var fn = (x) => {
            if(x == 1) {
                obj[x] = ['()']
                return obj[x];
            }
            
            if(obj[x]) {
                return fn(x);
            } else {
                const a = fn(x-1).reduce((pre, cur) => {
                    let b = [];
                    for(let i =0;i<cur.length;i++) {
                        b.push(insertStr(cur, i, '()'));
                    }
                    return [...pre, ...b]
                }, [])
                obj[x] = [...new Set(a)];
                return obj[x]
            }
        }

        return fn(n)
    };
  ```
  暴力破解。[/捂脸]。把上一次的所有结果便利往每一个位置插入一对括号。



### Review

[Cleaner Code with Async / Await Tutorial](https://khalilstemmler.com/articles/async-return-values-tutorial/)
* 在js中异步处理的集中方法。callback、promise、async/await。
* 循环和async/await搭配。可以和es5中的立即执行函数和闭包这种解决办法更为简洁。

### Tip

* rxjs学习
修正之前写的一个bug。在rxjs中取消流的操作符有很多。在之前写的场景中应该使用take(1)，才能保证拿到一次结果。之前用了takeWhile()在此场景不适用，引发bug。

### Share
* 张鑫旭大神指了一条学习的路，把时间节约出来。[学不进去，没时间学怎么办？](https://www.zhangxinxu.com/life/2019/03/study/)






## ARTS 第柒周（2019-06-16）

### Algorithm

leetCode 16. 最接近的三数之和

- 学习了题解当中的思路，双指针。从两头往中间找。
  ``` javascript
    var threeSumClosest = function(nums = [], target) {
        const len = nums.length;
        let diff = 99999;
        let result = 0;

        nums = nums.sort((a,b) => a-b);

        for (let index = 0; index < len - 2; index++) {
            let res = nums[index];
            let l = index + 1;
            let m = len - 1;

            while (l<m) {
                res = nums[index] + nums[l] + nums[m];
                let a = Math.abs(target-res);
                if (a < diff) {
                    diff = a;
                    result = res;
                }
                if (res > target) {
                    m--;
                } 
                if (res < target) {
                    l++;
                }
                if (res === target) {
                    return res;
                }

            }
            

        }
        return result;
    };
  ```
  先排序，确定一个数的位置，剩下的两个位置从两边填，向中间靠拢。记录他们的差距，遇到更小的就记录下来。



### Review

[Everything You Need to Know About Date in JavaScript](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/)
* 关于Date对象的一些细节的知识。

### Tip

* Lodop
一个打印的插件，js很方便的调用。

### Share
--割






## ARTS 第捌周（2019-06-23）

### Algorithm

leetCode 84. 柱状图中最大的矩形

- 暴力破解
  ``` javascript
    
    var largestRectangleArea = function(heights) {
        const len = heights.length;
    
        const getWidth = (i, index, arr) => {
            let l = index;
            let m = index;
            
            while(l>=0) {
                if(arr[l] >= i) {
                    l--;
                } else {
                    break;
                }
            }
            
            while(m<=len-1) {
                if(arr[m] >= i) {
                    m++
                } else {
                    break;
                }
            }
            
            return m - l - 1;
        };
        let res = 0;
        
        heights.map((i, index) => {
            
            const width = getWidth(i, index, heights);
            const rectArea = width * i;
            if (rectArea > res) {
                res = rectArea;
            }
        })
        return res;
    
    };
  ```
  遍历数组，往两边查找，遇到比自己小的为止，从而找到宽度，最终把最大的结果保留下来。



### Review

[Destructuring JavaScript objects like a pro](https://dev.to/willamesoares/destructuring-javascript-objects-like-a-pro-17bg)
* JS对象，以及数组结构。

### Tip
--割

### Share
--割



## ARTS 第玖周（2019-06-30）

### Algorithm

leetCode 51. N皇后

  ``` javascript
    
    
    var solveNQueens = function(n) {
        
        const canUse = (row, i, arr) => {
            for (let index = 0; index < row; index++) {
                if (i === arr[index] || i === arr[index] + row - index || i === arr[index] - row + index) {
                    return false;
                }
            }
            return true;
        }

        buildRes = (arr) => {
            return arr.reduce((pre, cur) => {
                r = Array(n).fill('.');
                r[cur] = 'Q';
                return [...pre, r.join('')];
            }, []);
        }

        let result = [];

        const fn = (row, arr) => {
            
            for(let i = 0; i < n; i++) {
                if(canUse(row, i, arr)) {
                    arr[row] = i;
                    if (row === n -1) {
                        result.push(buildRes(arr));
                    }
                    fn(row + 1, arr)
                }
            }
        }

        fn(0, []);
        console.log(result);
        return result;
        
    };
  ```
  N皇后问题，递归放每一个皇后。满足条件就放。放完之后就是结果。

leetcoe 58. 最后一个单词的长度

    ``` javascript

    var lengthOfLastWord = function(s) {
        const arr = s.split(' ');
        const len = arr.length;
        for(let i = len - 1; i >= 0; i--) {
            if(arr[i]) {
                return arr[i].length;
            }
        }
        return 0;
    };
    ```
    把字符用' '隔开，从后往前取，有则是答案。



### Review

[Hot vs Cold Observables](https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339)
* 介绍了关于‘冷’和‘热’的流的区别。
* 我的理解是数据的源是在订阅与否才会有数据源的存在。

### Tip
-- linux中命令输出的信息可以写入到文件中
``` shell
ls -l > a.text
```

### Share
-- [哪些技术会决定前端开发者的未来发展？](https://juejin.im/post/5d1589c8e51d45776031b02e)






## ARTS 第拾周（2019-07-07）

### Algorithm

leetCode 43. 字符串相乘

  ``` javascript
    var multiply = function(num1, num2) {
        if (num1 === '0' || num2 === '0') {
            return '0';
        }
        if(num1.length > num2.length) {
            var c = num1;
            num1 = num2;
            num2 = c;
        }
        
        let num1Arr = num1.split('').reverse();
        let num2Arr = num2.split('').reverse();
        var cacheA = 0;
        let totalArr = [];
        num1Arr.map((i, iIndex) => {
            let resArr = new Array(iIndex).fill(0);
            num2Arr.map((j, jIndex) => {
            const x = i * j + cacheA;
            resArr.push(x % 10);
            cacheA = parseInt(x / 10);
            })
            if (cacheA) {
            resArr.push(cacheA);
            cacheA = 0;
            }
            totalArr.push([...resArr]);
        })

        let len = totalArr[totalArr.length - 1].length;
        let resArr = [];
        let cache = 0;
        for (let index = 0; index < len; index++) {
            let sum = 0;
            let jIndex = Math.min(index, totalArr.length - 1)
            for (let j = 0; j <= jIndex; j++) {
            sum += (totalArr[j] && totalArr[j][index]?totalArr[j][index]:0);
            }

            sum += cache;
            resArr.push(sum % 10);
            cache = parseInt(sum / 10);
        }

        if (cache) {
            resArr.push(cache);
        }
        
        return resArr.reverse().join('');
        };
  ```
  总体思路就是算数竖式，要注意的就是补0和进位。


### Review

[7 important lessons about programming that I’ve learned at 17](https://medium.com/free-code-camp/7-important-lessons-about-programming-that-ive-learned-at-17-516ae619686)
* 总结起来就是多学习。提示自己的各项技能。

### Tip
-- Angular中使用GraphQL
[教程在这里](https://www.apollographql.com/docs/angular/)。

### Share
-- [We fired our top talent. Best decision we ever made.](https://medium.com/free-code-camp/we-fired-our-top-talent-best-decision-we-ever-made-4c0a99728fde)
 个人与团队。






## ARTS 第拾壹周（2019-07-14）

### Algorithm

leetCode 1006. 笨阶乘

  ``` javascript
    var clumsy = function(N) {
    var quotient = Math.floor(N/4);
    var remainder = N % 4;
    let resArr = [];
    let sum = 0;
    
    const fn = (index, remainder) => {
        const base = index * 4 + remainder;
        sum += (base - 3);
        return Math.floor(base * (base - 1) / (base - 2));
    }
    
    if(quotient > 0) {
        for (let index = quotient; index > 0; index--) {
        resArr.push(fn(index, remainder));
        }
    }

    if (remainder > 0) {
        const obj = {
        1: 1,
        2: 2,
        3: 6
        };

        resArr.push(obj[remainder]);
    }
    return resArr.reduce((pre, cur) => {
        return pre - cur;
    }, 2 * resArr[0] + sum);
    };
  ```
  四个为一组，先把乘除法算了。把所有的加号后面加起来。最后减去后面的。但是看了别人的题解，是有规律的。

leetCode 1031. 两个最大非重叠数组之和

  ``` javascript
    var maxSumTwoNoOverlap = function(A, L, M) {
        const ALen = A.length;
        let resArr = [];

        const fn = (start, len, arr) => {
            if (start > ALen - len) {
                return null;
            }
            let sum = 0;

            while (len > 0) {
                sum += arr[start + (--len)] || 0;
            }

            return sum;
        }
        for(let i = 0; i < ALen; i++) {
            resArr.push({
                L: fn(i, L, A),
                M: fn(i, M, A),
                index: i
            })
        }
        res = 0;
        for (let index = 0; index < ALen; index++) {
            for (let j = 0; j < ALen; j++) {
                if (j >= index + L || j + M <= index) {
                    res = Math.max(res, resArr[j].M + resArr[index].L);
                }
            }
            
        }
        return res;
    };
  ```
  把所有的L和M个数的可能组合找到。再双重循环找到不重叠的结果，并且找到最大值。


### Review

[Webpack – A Detailed Introduction](https://www.smashingmagazine.com/2017/02/a-detailed-introduction-to-webpack/)
* webpack入门教程。

### Tip
-- vim宏录制
在命令模式下，q[a]开始录制。q结束录制。@[a]就可以重复录制的操作。

### Share
-- 割






## ARTS 第拾贰周（2019-07-22）

### Algorithm

leetCode 118. 杨辉三角

  ``` javascript
var generate = function(numRows) {
    const cacheRes = {};

    fn = (n) => {
        if (cacheRes[n]) {
        return cacheRes[n];
        }
        if (n === 1) {
        cacheRes[n] = [1];
        }
        if (n === 2) {
        cacheRes[n] = [1, 1];
        }
        if (n > 2) {
        const arr = fn(n - 1);

        cacheRes[n] = [...new Array(n)].map((i, index) => {
            return (arr[index - 1] || 0) + (arr[index] || 0)
        })
        }
        return cacheRes[n];
    }

    const res = [];
    for (let index = 1; index <= numRows; index++) {
        res.push(fn(index));
    }

    return res;
}
  ```
  递归操作，按照杨辉三角的规则加起来。

leetCode 62. 不同路径

  ``` javascript
var uniquePaths = function(m, n) {
  let cacheObj = {};

  const fn = (m, n) => {
    let res = 0;
    res = cacheObj[`${m},${n}`] || cacheObj[`${n},${m}`];
    if (res) {
      return res;
    }
    if(n === 1 || m === 1) {
      res = 1;
    } else if (m === 2 || n === 2) {
      res = m + n - 2;
    } else {
      res = fn(m - 1, n) + fn(m, n - 1);
    }
    cacheObj[`${m},${n}`] = res;
    return res;
  }
  
  return fn(m, n);
};
  ```
  动态规划，划分为子问题。

leetCode 63. 不同路径二

  ``` javascript
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }
  // 有多少行
  const n = obstacleGrid.length;
  // 有多少列
  const m = obstacleGrid[0].length;

  var dp = new Array(n);
  for (let index = 0; index < n; index++) {
    dp[index] = new Array(m).fill(0);
  }
  for (let index = 0; index < n; index++) {
    if (obstacleGrid[index][0] === 1) {
      break;
    }
    dp[index][0] = 1;
  }
  for (let index = 0; index < m; index++) {
    if (obstacleGrid[0][index] === 1) {
      break;
    }
    dp[0][index] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      let res = 0;
      res = dp[i - 1][j] + dp[i][j - 1];

      if (obstacleGrid[i] && obstacleGrid[i][j] === 1) {
        res = 0;
      }
      dp[i][j] = res;
    }
  }
  return dp[n - 1][m - 1];
};
  ```
  在上一道题的基础上，去掉一些情况。ps.做的时候老是不对，行列傻傻分不清。

leetCode 213. 2的幂

  ``` javascript
var isPowerOfTwo = function(n) {
    if(n <= 0) {
        return false;
    } else if(n === 1) {
        return true;
    }
    return (n & (n - 1)) == 0;
};
  ```
  在看一个UP主（安利一下[正月点灯笼](https://space.bilibili.com/24014925/)）的算法视频。2的幂转换为2进制是1后面多个0。按位与，均为1才为1。所以与n-1按位与运算为0的就是2的幂。


leetCode 599. 两个列表的最小索引总和

  ``` javascript
var findRestaurant = function(list1, list2) {
  const cache = {};
  let resIndex = 9999;
  let resArr = [];
  
  list1.forEach((i, index) => {
      cache[i] = index;
  })
  list2.forEach((j, index) => {
      if(cache[j] >= 0) {
          const t = cache[j] + index;
          if(resIndex > t) {
              resIndex = t;
              resArr = [];
              resArr.push(j);
          } else if(resIndex == t) {
              resArr.push(j);
          }
      }
  })
  
  return resArr;
};
  ```
  先遍历第一个数组，记录对应的名字以及索引。在遍历第二个数组，名字相同的索引相加，并记录。找到更小的就替换记录。

leetCode 423. 从英文中重建数字

  ``` javascript
var originalDigits = function(s) {
    const particular = [
      {
        s: 'z',
        total: ['z', 'e', 'r', 'o'],
        number: 0,
      },
      {
        s: 'w',
        total: ['t', 'w', 'o'],
        number: 2,
      },
      {
        s: 'u',
        total: ['f', 'o', 'u', 'r'],
        number: 4,
      },
      {
        s:'g',
        total: ['e', 'i', 'g', 'h', 't'],
        number: 8,
      },
      {
        s: 'x',
        total: ['s', 'i', 'x'],
        number: 6,
      },
      {
        s: 'o',
        total: ['o', 'n', 'e'],
        number: 1,
      },
      {
        s: 't',
        total: ['t', 'h', 'r', 'e', 'e'],
        number: 3,
      },
      {
        s:'f',
        total: ['f', 'i', 'v', 'e'],
        number: 5,
      },
      {
        s: 'v',
        total: ['s', 'e', 'v', 'e', 'n'],
        number: 7,
      },
      {
        s: 'i',
        total: ['n', 'i', 'n', 'e'],
        number: 9,
      }
    ];

    const obj = s.split('').reduce((pre, cur) => {
      if (pre[cur] > 0) {
        pre[cur] += 1;
      } else {
        pre[cur] = 1;
      }
      return pre;
    }, {})

    let res = new Array(10);
    for (let index = 0; index < particular.length; index++) {
      const {s, total, number} = particular[index];
      
      if (obj[s]) {
        const num = obj[s];
        res[number] = num;
        
        total.forEach(i => {
          obj[i] -= num;
        })
      }
      
    }

    return res.reduce((pre, cur, index) => {
      while (cur > 0) {
        pre += index;
        cur--;
      }
      return pre;
    }, '');
};
  ```
  把特殊的字母组合数字放前面。剩下的在这基础上再找特殊的。遍历拿到所有的字母个数。然后做减法。


### Review

[What if JavaScript wins](https://medium.com/@anildash/what-if-javascript-wins-84898e5341a)
* 能用JavaScript实现的，终将被JavaScript替代。（23333333333）

### Tip
-- 算法之动态规划(边缘)
划分子问题。子问题找到最优解，大问题也就是最优解。

### Share
[一个老哥的前端成长之路](https://juejin.im/post/5d283cfde51d457753138262)。







## ARTS 第拾叁周（2019-07-28）

### Algorithm

leetCode 1. 两数之和

  ``` javascript
var twoSum = function(nums, target) {
    const obj = {};

    for (let index = 0; index < nums.length; index++) {
      if (obj[target - nums[index]] >= 0) {
        return [obj[target - nums[index]], index];
      } else {
        obj[nums[index]] = index;
      }
    }

    return false;
};
  ```
  遍历数组，把当前数的索引存起来，继续找到了两数之和为目标时返回结果。

leetcode 503. 下一个更大元素II

```javascript
var nextGreaterElements = function(nums) {
  let len = nums.length;
  let res = new Array();
  nums.push(...nums);
  let i = 0;
  let cacheNum = false;
  while (res.length < len) {
    if ((cacheNum ? nums[res.length] : nums[i]) < nums[i + 1]) {
      res.push(nums[i + 1]);
      cacheNum = false;
      i = res.length;
    } else {
      cacheNum = true;
      i++;
    }
    if (i > len * 2 - 1) {
      res.push(-1);
      i = res.length;
      cacheNum = false;
    }
  }
  
  return res;
};
```
暴力破解，往后面寻找，找不到就是-1，然后继续找下一个。

leetcode 357. 计算各个位数不同的个数

```javascript
var countNumbersWithUniqueDigits = function(n) {
    const arr = [9, 81];
    const res = [1];
    const maxRes = Math.min(10, n);
    for(let i = 2; i < maxRes; i++) {
        arr[i] = arr[i - 1] * (10 - i)
    }
    
    for(let j = 1; j <= maxRes; j++) {
        res[j] = res[j - 1] + arr[j - 1];
    }

    return res[n];
};
```
一位数时有10个，两位数时有9*9种（第一位不能为0），依次类推，然后加起来。


### Review

[How it feels to learn JavaScript in 2016](https://medium.com/hackernoon/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f)
* 文章讲的是在2016年的前端现状，一个一个名词跳出来。前端的东西越来越多。但是现在都9102年了，要学习的东西还多着呢，所以，保持一个学习的心。基础的东西一定要扎实。

### Tip
-- 学习vimtutor时学到一个新的操作。
c[number]motion直接进入插入模式。


### Share
[公司不重视前端怎么办？](https://www.zhangxinxu.com/life/2019/07/company-ignore-fe/)。
听君一席话，胜读十年书。说的就是这种吧。在抱怨之前，先提升自己能力。




## ARTS 第拾肆周（2019-08-04）

### Algorithm

leetCode 20. 有效的括号

  ``` javascript
var isValid = function(s) {
  const arr = s.split("");
  const stack = [];
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const stackLast = stack[stack.length - 1];
    if (stack.length < 1 || obj[stackLast] !== element) {
      stack.push(element);
    }

    if (obj[stackLast] === element) {
      stack.pop();
    }
  }

  if (stack.length) {
    return false;
  }
  return true;
};
  ```
  使用栈，与栈顶匹配的就出栈。最后栈里还有数据的话，就不是有效的。

leetcode 739. 每日温度

```javascript
var dailyTemperatures = function(T) {
    
  let len = T.length;
  const res = [];
  let i = 0;
  let cacheCount = 0;
  let currentT = 0;

  while(res.length < len) {
    if (T[i + 1] > (cacheCount ? currentT : T[i])) {
      res.push(cacheCount + 1);
      cacheCount = 0;
      i = res.length;
      currentT = 0;
    } else {
      currentT = currentT || T[i];
      cacheCount++;
      i++;
    }

    if (i > len) {
      res.push(0);
      cacheCount = 0;
      i = res.length;
      currentT = 0;
    }
  };

  return res;
};
```
暴力破解，往后面寻找。

leetcode 394. 字符串解码

```javascript
var decodeString = function(s) {
  if (!s) {
    return '';
  }
  let stack = [];
  // 记录栈顶顶类型
  let stackTopType = "";

  s.split("").forEach((i) => {
    console.log(i);
    console.log(stack);
    let len = stack.length;
    if (!isNaN(i)) {
      if (len && stackTopType === "number") {
        stack[len - 1] += i;
        return;
      }
      stack.push(i);
      stackTopType = "number";
    } else if (i === "]") {
      let str = stack.pop();
      stack.pop();
      let num = stack.pop();
      // 把数字和字母乘起来
      let res = ''
      for (let index = 0; index < Number(num); index++) {
        res += str;
      }
      // 如果栈里面有数据。那么把字符串和栈顶顶数据连起来
      if (len > 3 && stack[len - 4] !== '[') {
        stack[len - 4] += res;
        return;
      }
      stack.push(res);
    } else if (i === "[") {
      stack.push('[');
      stackTopType = '[';
    } else {
      if (len && stackTopType === "string") {
        stack[len - 1] += i;
        return;
      }
      stack.push(i);
      stackTopType = "string";
    }

  });

  return stack[0];
};
```
使用栈，判断栈顶元素的类型，看情况修改栈顶元素。



leetcode 228. 汇总区间

```javascript
var summaryRanges = function(nums) {
  const length = nums.length;
  let start = (end = nums[0]);
  let res = [];

  for (let i = 1; i <= length; i++) {
    if (nums[i] - 1 === nums[i - 1]) {
      end = nums[i];
    } else {
      if (start === end) {
        res.push(`${start}`);
      } else {
        res.push(`${start}->${end}`);
      }
      start = end = nums[i];
    }
  }
  return res;
};
```
遍历一遍，两个变量暂时存储起来。


### Review

[Avoiding those dang cannot read property of undefined errors](https://css-tricks.com/%e2%80%8b%e2%80%8bavoiding-those-dang-cannot-read-property-of-undefined-errors/)
* 处理在js中“空指针”问题。几种解决方案的对比。最后在评论区的一个回答[一行代码解决](https://github.com/burakcan/mb)，感觉很神奇。

### Tip
-- 巧用margin负值。处理列表元素依次排列，大的边框以及里面元素都有边框的问题。


### Share
-- 割

## ARTS 第拾伍周（2019-08-11）

### Algorithm

leetCode 560. 和为K的子数组

  ``` javascript
var subarraySum = function(nums, k) {
  const length = nums.length;
  let res = 0;
  // 第0位置为0；确保dp[i]===k的数据
  let dp = [0];
  let cache = {};

  for (let i = 1; i <= length; i++) {
    dp[i] = (dp[i - 1] || 0) + nums[i - 1];
  }

  for (let index = 0; index < dp.length; index++) {
    if (cache[dp[index] - k]) {
      res += cache[dp[index] - k];
    }
    cache[dp[index]] = (cache[dp[index]] || 0) + 1;
  }

  return res;
};
  ```
  借鉴了别人的思路，先累加和。然后在遍历和的数组。差值为K的就是满足的答案。



### Review

[Everything you need to know about change detection in Angular](https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f)
* Angular中变更检测的一些相关知识，看了还是不太理解。

### Tip
-- Cordova插件与Js的通信。多次传输信息。
``` java
  PluginResult r = new PluginResult(PluginResult.Status.OK, jo);
  r.setKeepCallback(true);
  callbackContext.sendPluginResult(r);
```


### Share
-- 割
