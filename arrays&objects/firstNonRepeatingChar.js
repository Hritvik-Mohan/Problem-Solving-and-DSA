// Find the first non-repeating character in a string

const nonRepeat = str => {
    let mp = {};

    for (let i = 0; i < str.length; i++) {
        if(!mp[str[i]]) mp[str[i]] = 1;
        else mp[str[i]] += 1;
    }

    for (let i = 0; i < str.length; i++) {
        if(mp[str[i]] == 1) {
            return str[i];
        } 
    }
}

console.log(nonRepeat('hhrrittvik'))