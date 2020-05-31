
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function (s1, s2) {
    let getArr = (str) => {
        return str.split('').reduce((pre, cur, index) => {
            cur = cur.charCodeAt() - 97;
            pre[cur] = pre[cur] + 1;

            return pre;
        }, new Array(26).fill(0));
    }

    let arr1 = getArr(s1);
    let arr2 = getArr(s2);

    let compare = (arr1, arr2) => {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] >= arr2[i]) {
                arr1[i + 1] = arr1[i + 1] + arr1[i] - arr2[i];
            } else {
                return false;
            }
        }
        return true;
    }

    return compare([...arr1], [...arr2]) || compare([...arr2], [...arr1]);
};


console.log(checkIfCanBreak('abc', 'xyz'));
console.log(checkIfCanBreak('abe', 'acd'));