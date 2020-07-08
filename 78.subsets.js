/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let length = nums.length;

    let cache = [];
    cur = 0;
    let res = [[]];
    let l = 0;

    while(l >= 0) {
        if (l < length && cur < length) {
            cache.push(cur);
            res.push([...cache.map(i => nums[i])]);
            cur++;
            l++;
        } else {
            cur = cache.pop() + 1;
            l--;
        }
    }

    return res;
};


console.log(subsets([1,2,3]))