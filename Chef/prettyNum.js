function prettyNum(L, R) {
    let count = 0;

    for(let i = L; i <= R; i++) {
        let lastDigit = i % 10;
        if(lastDigit == 2 || lastDigit == 3 || lastDigit == 9) {
            count++;
        }
    }

    console.log(count);
}

// 2, 3, 9
prettyNum(1, 10); // 1
prettyNum(11, 33); // 8





// let T = readline();
// while (T--) {
// 	var count = 0;
// 	let arr = [];
// 	arr = readline().split(" ");
// 	let L = arr[0];
// 	let R = arr[1];

// 	// write your logic here

// 	for (let i = L; i <= R; i++) {
// 		let lastDigit = i % 10;
// 		if (lastDigit == 2 || lastDigit == 3 || lastDigit == 9) {
// 			count++;
// 		}
// 	}

// 	console.log(count);
// }