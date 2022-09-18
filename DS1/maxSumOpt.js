function maxSubArray(A) {
    var prev = 0;
    var max = -Number.MAX_VALUE;

    for(var i = 0; i < A.length; i++) {
        prev = Math.max(prev + A[i], A[i]);
        max = Math.max(max, prev);
    }
    return max;
}

let A = [1,2,3,4,5]

console.log(maxSubArray(A));