/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let arr = [];
    let obj = {};

    s.split('').forEach(i => {
        obj[i] = (obj[i] || 0) + 1;
    })

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr[obj[key]] = [...(arr[obj[key]] || []), key];
        }
    }

    const max = arr.length;

    return arr.reverse().map((i, index) => {
        return i ? i.map(j => j.repeat(max - 1 - index)).join('') : '';
    }).join('');
};


console.log(frequencySort('tree'));
