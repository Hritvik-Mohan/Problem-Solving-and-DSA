function isSumZero(arr) {
    for(let start = 0; start < arr.length; start++) {
        let sum = 0;
        for(let end = start; end < arr.length; end++) {
            sum += arr[end];
            if(sum == 0) return true;
        }
        
    }
    return false;
}

console.log(isSumZero([5,1,6,0,3]));