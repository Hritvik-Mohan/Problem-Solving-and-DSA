
// arr=(1+arr).toString().split("")

//seperator

// numStr = toString().number

// map(Number);



// function a(arr) {
//     let number = 0
//     for(let i = 0; i < arr.length; i++){
//         number = (number * 10) + arr[i]
//     }
//     return number + 1
// }
// console.log(a(arr))

// function inc(arr){
//     let a=1;
//     for(let i=arr.length-1; i>=0; i--){
//         if(arr[i]===9){
//             arr[i]=0
//         }else{
//             arr[i]+=1;
//             return arr;
//         }
//     }
//     return [1].concat(arr)
// }

// console.log(inc([9,9,3]))

// function inc(arr) {
//     let a = 1;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if(arr[i] === 9) {
//             arr[i] = 0
//         } else {
//             arr[i] += 1;
//             return arr;
//         }
//     }
//     return [1].concat(arr)
// }

// console.log(inc([9,9,3]))

// array = [1,2,3]
// let num = Number(array.join(''));



// let num = 1234;
// let arr = num.toString().split('')
// console.log(arr);

// let num = 1234
// num = Number(num.toString().split('').reverse().join(''));
// console.log(num);

// for(let i = 0; i < )
// let arrStack1 = 



let arr = [];

let num = 1234;
num = num.toString();

let rnum = '';

for (let i = 0; i < num.length; i++) {
    arr.push(num[i]);
}

for (let i = 0; i < num.length; i++) {
    rnum += arr.pop();
}

console.log(Number(rnum))