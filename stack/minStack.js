class MinStack {
    constructor() {
        this.arrStack = [];
        this.min = [];
    }
    push(x) {
        if (this.min.length === 0) this.min.push(x);
        else {
            this.min.push(Math.min(this.min[this.min.length - 1], x));
        }
        this.arrStack.push(x);
    }
    pop() {
        if (this.arrStack.length != 0) {
            this.arrStack.pop();
            this.min.pop();
        }
    }
    top() {
        if (this.arrStack.length != 0)
            return this.arrStack[this.arrStack.length - 1];
        return null;
    }
    getMin() {
        if (this.min.length != 0)
            return this.min[this.min.length - 1];
        return null;
    }
}



let ms = new MinStack();

ms.push(3);
ms.push(4);
console.log(ms.getMin());
ms.push(2);
ms.push(5);
console.log(ms.getMin());