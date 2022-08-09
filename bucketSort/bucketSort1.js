const simpleBucketSort = (arr, size) => {
    let bucket = new Array(size); // create bucket
  
    if (size < 0) return;
    for (let i = 0; i < size; i++) {
      bucket[i] = [];
    }
  
    // putting element to difrent bucket
    for (let i = 0; i < size; i++) {
      let idx = arr[i] * size;
      bucket[Math.floor(idx)].push(arr[i]); // putting element to the bucket
    }
  
    // sort individual bucket
    for (let i = 0; i < size; i++) {
      bucket[i].sort((a, b) => a - b);
    }
  
    // merge all bucket
    let zIndex = 0;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < bucket[i].length; i++) {
        arr[zIndex] = bucket[i][j];
      }
    }
  };
  
  let c = simpleBucketSort([0.893, 0.568, 0.656, 0.234, 0.656, 0.234], 6);