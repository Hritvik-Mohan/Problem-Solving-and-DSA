function iceCream(arr) {
    let five = 0;
    let ten = 0;
    let twenty = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 5) five++; // 5
        else if(arr[i] == 10) {
            if (five == 0) return false; // no 5 notes
            five--; // 5 given
            ten++; // 10 recieved
        } else { // twenty 
            if (five > 0 && ten > 0) { // only if you have 5 and 10
                five--; // you gave 5
                ten--; // and 10 
            } else return false;
        }
    }
    return true;
}


console.log(iceCream([5,5,10,20]))