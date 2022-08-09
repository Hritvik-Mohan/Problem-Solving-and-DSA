function paths(m,n) {
    if(m==1 || n ==1) {
        return 1;
    }
    return paths(m-1, n) + paths(m, n-1);
}


console.log(paths(51,9));