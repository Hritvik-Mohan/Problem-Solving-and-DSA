function isSumZero(arr, k) {
    for(let start = 0; start < arr.length; start++) {
        let sum = 0;
        for(let end = start; end < arr.length; end++) {
            sum += arr[end];
            if(sum == k) return true;
        }
        
    }
    return false;
}

// console.log(isSumZero([5,1,6,0,3], 6));

// console.log(isSumZero([1,1,1], 2));

console.log(isSumZero([1,2,3], 3));