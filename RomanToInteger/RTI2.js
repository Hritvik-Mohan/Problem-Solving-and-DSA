let RTI = function (s) {
    let mp = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let res = 0;
    let rn0;
    let rn1;

    for(let i = s.length - 1; i >= 0; i--) {
        rn0 = mp[s[i]];
        rn1 = mp[s[i-1]];

        if (rn1 < rn0) {
            res = res + (rn0 - rn1);
            i--;
        } else {
            res = res + rn0;
        }
    }

    return res
}

console.log(RTI('MCMXCIV'));