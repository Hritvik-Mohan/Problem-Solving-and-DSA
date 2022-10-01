function maxWeightDifference(arr, k) {
    let arr1 = arr.sort((a, b) => a - b);
    let sum = 0;
    for(let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }

    let sumSmallest = 0;
    for(let i = 0; i < k; i++) {
        sumSmallest += arr1[i];
    }

    let sumLargest = 0;
    for(let i = arr.length-1; i > k; i--) {
        sumLargest += arr1[i];
    }

    let output = Math.max(Math.abs(sumSmallest-(sum-sumSmallest), Math.abs(sumLargest-(sum-sumLargest))))


    console.log(sum, sumSmallest, sumLargest, output)
}

let arr = [ 8, 4, 5, 2, 10 ]
let k = 3;
maxWeightDifference(arr, k)