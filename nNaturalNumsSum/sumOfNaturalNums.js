function sumOfNNaturalNums (n) {
    if(n == 1) {
        return 1;
    }
    return n + sumOfNNaturalNums(n-1);
}

console.log(sumOfNNaturalNums(200));