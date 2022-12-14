var threeSum = function(nums) {
    nums = nums.sort((a, b) => a-b);
    let results = [];
    for(let i = 0; i < nums.length - 2; i++) {
        while (nums[i] === nums[i - 1]) i++;
        let j = i + 1;
        k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if(sum === 0) {
                results.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j + 1]) j++;
                j++
            }
            if(sum > 0) k--;
            if(sum < 0) j++:
        }
    }
    return results;

}



function threeSum(nums) {
	const results = []

	// obviously irrelevant if we don't have at least 3 numbers to play with!
	if (nums.length < 3) return results

	// having the numbers in ascending order will make this problem much easier.
	// also, knowing the overall problem  will take at least O(N^2) time, we can
	// afford the O(NlogN) sort operation
	nums = nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		// `i` represents the "left" most number in our sorted set.
		// once this number hits 0, there's no need to go further since
		// positive numbers cannot sum to a negative number
		if (nums[i] > target) break

		// we don't want repeats, so skip numbers we've already seen
		if (i > 0 && nums[i] === nums[i - 1]) continue

		// `j` represents the "middle" element between `i` and `k`.
		// we will increment this up through the array while `i` and `k`
		// are anchored to their positions. we will decrement `k` for
		// for each pass through the array, and finally increment `i`
		// once `j` and `k` meet.
		let j = i + 1

		// `k` represents the "right" most element
		let k = nums.length - 1
		
		// to summarize our setup, we have `i` that starts at the beginning,
		// `k` that starts at the end, and `j` that races in between the two.
		//
		// note that `i` is controlled by our outer for-loop and will move the slowest.
		// in the meantime, `j` and `k` will take turns inching towards each other depending
		// on some logic we'll set up below. once they collide, `i` will be incremented up
		// and we'll repeat the process.

		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]

			// if we find the target sum, increment `j` and decrement `k` for
			// other potential combos where `i` is the anchor
			if (sum === target) {
				// store the valid threesum
				results.push([nums[i], nums[j], nums[k]])

				// this is important! we need to continue to increment `j` and decrement `k`
				// as long as those values are duplicated. in other words, we wanna skip values
				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
				// [[-2,0,2], [-2,0,2]].
				//
				// (i'm not a fan of this part because we're doing a while loop as we're
				// already inside of another while loop...)
				while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

				// finally, we need to actually move `j` forward and `k` backward to the
				// next unique elements. the previous while loops will not handle this.
				j++
				k--

			// if the sum is too small, increment `j` to get closer to the target
			} else if (sum < target) {
				j++

			// if the sum is too large, decrement `k` to get closer to the target
			} else { // (sum > target)
				k--
			}
		}
	}

	return results
};























// const threeSum = (nums) => {
//     nums.sort((a, b) => a - b);
//     let triplets = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 0) break;

//         if (i === 0 || nums[i] !== nums[i-1]) {
//             let left = i + 1;
//             let right = nums.length - 1;

//             while (left < right) {
//                 let sum = nums[i] + nums[left] + nums[right];

//                 if (sum < 0) left++;
//                 else if (sum > 0) right--;
//                 else {
//                     triplets.push([nums[i], nums[left], nums[right]]);
//                     left++;
//                     right--;
                    
//                     while (left < right && nums[left] === nums[left - 1]) left++;
//                 }
//             }
//         }
//     }
//     return triplets;
// };









// var threeSum = function(nums) {
//     let resultArr = [];
//     const sortedArr = nums.sort((a, b) => a - b);
//     for (i = 0; i < sortedArr.length - 2; i++) {
//       if (sortedArr[i] > 0) {
//         break;
//       }
//       if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
//         continue;
//       }
//       let left = i + 1;
//       let right = sortedArr.length - 1;
//       while (left < right) {
//         const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
//         if (sum < 0) {
//           left++;
//         } else if (sum > 0) {
//           right--;
//         } else {
//           resultArr.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
//           while(left < right && sortedArr[left] === sortedArr[left + 1]) {
//             left++;
//           }
//           while(left < right && sortedArr[right] === sortedArr[right - 1]) {
//             right--;
//           }
//           left++;
//           right--;  
//         }
//       }
//     }
//     return resultArr;
// };