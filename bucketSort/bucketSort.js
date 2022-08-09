const bucketSort = (arr, size = 5) => {
    const min = Math.min(...arr); // Min value from Array
    const max = Math.max(...arr); // Max value from Array
    const buckets = Array.from(
      { length: Math.floor((max - min) / size) + 1 },
      () => []
    ); // number of bucket
    arr.forEach((val) => {
      buckets[Math.floor((val - min) / size)].push(val); // value in the bucket
    });
    return buckets.reduce((acc, b) => {
      console.log(acc, b);
      [...acc, ...b.sort((a, b) => a - b)];
    }, []);
  };
  
  let result = bucketSort([3, 4, 3, 2, 1, 2], 5);
  
  console.log(result);