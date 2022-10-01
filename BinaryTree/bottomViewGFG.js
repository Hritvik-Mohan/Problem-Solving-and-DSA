class Node {
    constructor(key) {
        this.data = key;
        this.hd = 100000;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructo(node) {
        this.root = node;
    }

    bottomView() {
        if (this.root == null) return;
        let hd = 0;
        let map = {};
        let queue = [];
        this.root.hd = hd;
        queue.push(this.root);

        while(queue.length != 0) {
            let temp = queue.shift();
            hd = temp.hd;
            map[hd] = temp.data;
            if(temp.left != null) {
                temp.left.hd = hd - 1;
                queue.push(temp.left);
            }
        }
        for(const[key, value] of Object.entries(map).sort((a, b) => a[0] - b[0])) {
            console.log(value);
        }
    }
}

let root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(25);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
let tree = new Tree(root);

tree.bottomView(root);