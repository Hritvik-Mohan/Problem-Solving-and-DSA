let twoSum = function(nums, target) {
    // let output = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(target == nums[i]+nums[j]) {
                // output[0] = i;
                // output[1] = j;
                return [i, j]
            }
        }
    }
    // return output;
}

let nums = [2,7,11,15];
console.log(twoSum(nums, 9))