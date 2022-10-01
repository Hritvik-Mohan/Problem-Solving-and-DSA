function mergekSort(arr) {
    let result = [];
    let minHeap = [];

    arr.forEach((arr, index) => {
        minHeap.push({
            arrayIndex: index,
            elementIndex: 0,
            value: arr[0]
        });
    })

    for(let i = 0; i < arr.length; i++) {
        minHeap.push({
            arrIdx: indexed,
            elementIndex: 0,
            value: arr[0]
        })
    }

    heapify(minHeap);


}