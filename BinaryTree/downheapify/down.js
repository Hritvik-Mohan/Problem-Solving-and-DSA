class MaxHeap {
    constructor() {
        this.arr = [];
    }
    upheapify(idx) {
        /**
         * Time: O(logn) Space: O(1)
         */
        while(idx > 0) { // we cannot upheapify root, we will stop the loop, when we reach root
            let parentIdx = Math.floor((idx - 1) / 2);
            if(this.arr[parentIdx] < this.arr[idx]) {
                // if parent is less than child, swap them
                let temp = this.arr[parentIdx];
                this.arr[parentIdx] = this.arr[idx];
                this.arr[idx] = temp;

                // move upwards
                idx = parentIdx;
            } else {
                // alread a max heap
                break;
            }
        }
    }
    insert(x) {
        // this function inserts x correctly in max heap
        this.arr.push(x);
        this.upheapify(this.arr.length - 1); // arr.len - 1 is the index on which x is added
    }

    downHeapify(idx) {
        while(idx < this.arr.length) {
            let left = 2*idx + 1;
            let right = 2*idx + 2;
            let greatest = idx;
            if(left < this.arr.length && this.arr[left] > this.arr[greatest]) {
                // if left child exist and it is greater than root, then greatest is left
                greatest = left;
            }
            if(right < this.arr.length && this.arr[right] > this.arr[greatest]) {
                greatest = right;
            }
            if(greatest == idx) {
                break;
            }
            let temp = this.arr[greatest];
            this.arr[greatest] = this.arr[idx];
            this.arr[idx] = temp;
            idx = greatest;
        }
    }

    removeRoot() {
        let temp = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr[this.arr.length - 1] = temp;

        this.arr.pop();

        this.downHeapify(0);
    }

    insert(x) {
        this.arr.push(x);
        this.upheapify(this.arr.length - 1);
    }

    display() {
        console.log(this.arr);
    }
}   