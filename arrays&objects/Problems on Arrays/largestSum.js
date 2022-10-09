// function maxSubArray (arr) {
//     let maxSum = 0;
//     for(let start = 0; start < arr.length; start++) {
//         let sum = 0;
//         for(let end = start; end < arr.length; end++) {
//             sum += arr[end];
//             if(maxSum < sum) maxSum = sum;
//         }
//     }
//     return maxSum;
// }

// let arr = [-2,1,-3,4,-1,2,1,-5,4];
// console.log(maxSubArray(arr))


function maxSubArray(nums) {
    let maxSum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(0, nums[i-1]) + nums[i];
        if(nums[i] > maxSum) maxSum = nums[i];
    }
    return maxSum;
}

let arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(arr))