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
    for(let i = 0; i < s.length; i++) {
        if(mp[s[i]] < mp[s[i+1]]) {
            res = res - mp[s[i]];
        } else {
            res = res + mp[s[i]];
        }
    }
    return res
}

console.log(RTI('MCMXCIV'));