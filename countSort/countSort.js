/**
 *
 * @param {*} arr Array
 * @param {*} min  Min Value in Array
 * @param {*} max  Max Value in Array
 */

 const countSort = (arr = [], min, max) => {
    const count = {};
  
    for (let i = min; i <= max; i++) {
      count[i] = 0; // with inital value 0
      //    o/p of above line  {1: 2, 2: 1, 3: 2, 4: 2}
    }
    // First populate the Count of the number in array
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]] += 1;
    }
    // sorting the array
  
    const sortArray = [];
    for (let i = min; i <= max; i++) {
      while (count[i] > 0) {
        sortArray.push(i);
        count[i]--;
      }
    }
  
    return sortArray;
  };
  
  let sortArr = countSort([3, 4, 3, 2, 1, 4, 1], 1, 4);
  console.log(sortArr); // [1,1,2,3,3,4]