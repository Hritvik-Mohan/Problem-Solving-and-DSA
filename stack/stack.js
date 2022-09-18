// Stacks

// function: push, pop, peek, length

let letters = []; // this is our stack

let word = "you";

let rword = "";

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
    console.log(letters);
}

// console.log(letters);

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
    console.log(rword);
}

if (rword === word) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}