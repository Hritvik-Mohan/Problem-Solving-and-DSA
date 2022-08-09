let arr = [5,1,6,0,3];

// let sum = 0;

for(let start = 0; start < arr.length; start++) {
    let sum = 0;
    for(let end = start; end < arr.length; end++) {
        sum += arr[end];
        console.log(sum);
    }
}