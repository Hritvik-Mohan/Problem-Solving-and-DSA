function fillPrefixSum (arr, n, prefixSum) {
    prefixSum[0] = arr[0];
    for( let i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i-1] + arr[i];
    }
}


let arr = [ 10, 4, 16, 20 ];
let n = arr.length;
let prefixSum = new Array(n);

fillPrefixSum(arr, n, prefixSum);

console.log(...prefixSum);