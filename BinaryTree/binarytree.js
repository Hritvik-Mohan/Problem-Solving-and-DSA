class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        let newNode = new Node(data);
        if(this.root === null) this.root = newNode;
        else this.addNode(this.root, newNode);
    }

    addNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left === null) node.left = newNode;
            else this.addNode(node.left, newNode);
        }
        else {
            if(node.right === null) node.right = newNode;
            else this.addNode(node.right, newNode);
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if(node === null) return null;
    }
}

let bt = new BinaryTree();
bt.add(8)
bt.add(3)
bt.add(10)
bt.add(1)
bt.add(6)
bt.add(14)
bt.add(4)
bt.add(7)
bt.add(13)
console.log(bt);
