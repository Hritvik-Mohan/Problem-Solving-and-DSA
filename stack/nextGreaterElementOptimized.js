class Stack {
    #arr;
    constructor() {
        this.#arr = [];
    }

    push(x) {
        /**
         * Time: O(1)
         */
        this.#arr.push(x); // add an element to the last
    }
    
    pop() {
        /**
         * Time: O(1)
         */
        this.#arr.pop(); // remove element from last index
    }

    top() {
        /**
         * Time: O(1)
         */
        return this.#arr[this.#arr.length - 1]; // return the element at the last index
    }

    isEmpty() {
        return this.#arr.length == 0;
    }
}

let st = new Stack();

function nextGreater(arr) {
    let st = new Stack(); // stack of indexes
    let output = Array(arr.length);
    st.push(0);
    for(let i = 1; i < arr.length; i++) {
        while(!st.isEmpty() && arr[i] < arr[st.top()]) {
            // we took a shift, we need to resolve
            output[st.top()] = arr[i];
            st.pop();
        }
        st.push(i);
    }
    while(!st.isEmpty()) {
        output[st.top()] = -1;
        st.pop();
    }
    return output;
}

console.log(nextGreater([11,13,21,3]))