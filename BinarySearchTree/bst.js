class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class tree {
    constructor(r) {
        this.root = r;
        if(this.ro)
    }
}


/**
 * Time: O(n)
 * Space: 
 */
function pre(node) {
    if(node == null) return;
    console.log(node.data);
    pre(node.left);
    pre(node.right);
}

function ino(node) {
    if(node == null) return;
    ino(node.left);
    console.log(node.data);
    ino(node.right);
}

function post(node) {
    if(node == null) return;
    post(node.left);
    post(node.right);
    console.log(node.data);
}



let root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.left.left = new Node(8);
root.left.right = new Node(7);
root.right.left = new Node(5);

// pre(root);
ino(root);
// post(root);

function maxDepth(root) {
    if(root == null) return 0;
    return 1+ Math.max(maxDepth(root.left), maxDepth(root.right))
}

console.log(maxDepth(root));

