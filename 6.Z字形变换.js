/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let sArr = s.split('');
    let length = s.length;
    let arr = new Array(numRows).fill().map(_ => []);

    let i = 0, j = 0;

    let fn = (() => {
        let count = -1;
        return (i, j) => {
            count = (count + 1) % (numRows * 2 - 2);
            console.log(count);
            if (count < numRows - 1) {
                return [i + 1, j];
            }
            return [i - 1,j + 1]
        }
    })();

    while(length) {
        // console.log(i, j);
        arr[i][j] = sArr.shift();
        [i, j] = fn(i, j);
        length--;
    }

    return arr.reduce((pre, cur) => {
        return pre + cur.join('');
    }, '');
};

console.log(convert('LEETCODEISHIRING', 3));