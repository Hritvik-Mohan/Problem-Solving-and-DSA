function minMax(s) {
    let k = s;
    let max = k[k.length - 1];
    let min = k[k.length - 1];

    while(k.length > 0) {
        max = Math.max(k[k.length-1], max);
        min = Math.min(k[k.length-1], min);
        k.pop();
    }
    return {"max": max, "min": min};
}

console.log(minMax([2,4,5,7,8]));