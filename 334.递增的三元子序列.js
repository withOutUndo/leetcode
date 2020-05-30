/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let a = Infinity, b = Infinity;

    for(let i = 0; i < nums.length; i++) {
        let ele = nums[i];
        if (ele <= a) {
            a = ele;
            continue;
        }

        if (ele <= b) {
            b = ele;
            continue
        }

        if(ele > b) {
            return true;
        }
    }

    return false;
};


console.log(increasingTriplet([1,2,1,3,1]));
console.log(increasingTriplet([1,2,0,3,1]));