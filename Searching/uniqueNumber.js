let input = [3, 4, 5, 5, 2, 2, 3, 1,1, -1, -1];

function findSingleOccurence(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans = ans ^ arr[i];
  }
  return ans;
}

console.log(findSingleOccurence(input));
