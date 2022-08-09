let num = 393;

function isPalindrom(num) {
    let rem;
    let temp = num;
    let reverse = 0;
    while (num > 0) {
        rem = num % 10;
        reverse = (reverse * 10) + rem;
        num = parseInt(num / 10);
    }
    if (reverse == temp) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrom(num))