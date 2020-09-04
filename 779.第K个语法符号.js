/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function(N, K) {
    let flag = 0;
    --N;
    while (N--) {
        if (K % 2 == 0) {
            flag = !flag;
        }
        K = Math.floor((K - 1) / 2 + 1);
    }
    return Number(flag);
};

console.log(kthGrammar(6, 16));
console.log(kthGrammar(4, 5));