function chef(n) {
    for(let i = 0; i < n; i++) {
        if (n >= 4) {
            n = n - 4;
        }
    }
    if(n >= 2) {
        return "YES";
    } else {
        return "NO";
    }
}

console.log(chef(6));