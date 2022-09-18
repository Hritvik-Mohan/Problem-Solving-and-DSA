/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let res = nums[0];
    for(let start = 0; start < nums.length; start++) {
        let sum = 0;
        for(let end = start; end < nums.length; end++) {
            sum += nums[end];
            if(sum > res) res = sum
        }
    }
    return res
};

console.log(maxSubArray([1,2,3,4,5]))