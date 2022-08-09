// Find the index of a given number from a sorted array using binary search iteratively.

const iterativeBS = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right)/2);

        if(target === arr[mid]) return mid;
        else if(target < arr[mid]) right = mid - 1;
        else left = mid + 1;
    }
    return false;
}

let nums = [1,4,5,7,9,23,44,76,100,112];

console.log(iterativeBS(nums, 100));