// Find the index of a given number from a sorted array using binary search iteratively.

const recursiveBS = (arr, target, left, right) => {
    // BASE CASE
    if (left > right) {
        return false;
    }
    
    let mid = Math.floor((left + right)/2);
    if(target === arr[mid]) return mid;
    else if(target < arr[mid]) {
        return recursiveBS(arr, target, left, mid - 1);
    } else {
        return recursiveBS(arr, target, mid + 1, right);
    }
}

let nums = [1,4,5,7,9,23,44,76,100,112];

console.log(recursiveBS(nums, 100, 0, nums.length - 1));