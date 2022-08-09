// Given an array of integers, check if there is any subarray with sum of it's elements as zero.

const subarrySumZero = arr => {
    for(let start = 0; start < arr.length; start++) {
        let sum = 0;
        for(let end = start; end < arr.length; end++) {
            sum += arr[end];
            if(sum == 0) return true;
        }
    }
    return false;
}

// const arr = [];

console.log(subarrySumZero([5,2,1,-3]));