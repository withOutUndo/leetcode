/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = new Array(n).fill().map(_ => new Array(n));
    let flag = 0;
    const flagFn = [
        (i, j) => [i, j + 1],
        (i, j) => [i + 1, j],
        (i, j) => [i, j - 1],
        (i, j) => [i - 1, j],
    ]
    let count = 1;
    let i = 0, j = 0;
    while(count <= n ** 2) {
        res[i][j] = count;
        
        var [a, b] = flagFn[flag](i, j);

        if (a >= 0 && a < n && b >= 0 && b < n && !res[a][b]) {
            [i, j] = [a, b];
        } else {
            flag = (flag + 1) % 4;
            [i, j] = flagFn[flag](i, j);
        }

        count++;
    }

    return res;
};