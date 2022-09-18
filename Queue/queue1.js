class Queue {
    constructor() {
        this.top = 0;
        this.bottom = 0;
        this.storage = {};
    }

    enqueue(val) {
        this.storage[this.top] = val;
        this.top++;
    }

    dequeue() {
        let removedElement = this.storage[this.bottom];
        delete this.storage[this.bottom];
        this.bottom++;
        return removedElement;
    }

    peek() {
        return this.storage[this.bottom];
    }

    size() {
        return this.top - this.bottom;
    }

    isEmpty() {
        return this.size() === 0;
    }
}


class Stack {
    constructor() {
        this.primaryQueue = new Queue();
        this.secondaryQueue = new Queue();
    }


    push(x) {
        this.secondaryQueue.enqueue(x);

        while (!this.primaryQueue.isEmpty()) {
            this.secondaryQueue.enqueue(this.primaryQueue.dequeue());
        }

        let tempQueue = this.secondaryQueue;
        this.secondaryQueue = this.primaryQueue;
        this.primaryQueue = tempQueue;
    };

    pop() {
        return this.primaryQueue.dequeue();
    }

    top() {
        return this.primaryQueue.peek();
    }

    isEmpty() {
        return this.primaryQueue.isEmpty();
    }

    display() {
        return Object.values(s.primaryQueue.storage);
    }
};



let s = new Stack();

s.push(1);
s.push(2);
s.push(3);
console.log(s.top())

console.log(s.display());