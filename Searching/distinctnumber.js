function distinctNumber(arr) {
    const mp = {};

    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        if(mp[n]) return true;
        else mp[n] = true;
    }

    return false;
}

// const arr = [1,2,3,4];
const arr = [1,1,1,3,3,4,3,2,4,2];
console.log(distinctNumber(arr));