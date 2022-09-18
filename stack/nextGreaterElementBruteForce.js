let nextGreater_array = (arr, num = arr.length) => {
    for(let start = 0; start < num; start++) {
        let next_ele = -1;

        for(let j = start; j < num; j++) {
            if(arr[start] < arr[j]) {
                next_ele = arr[j];
                break;
            }
        }
        console.log(next_ele);
    }
}

nextGreater_array([11,13,21,3])