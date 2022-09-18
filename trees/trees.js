class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
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


// let maxDepth = function (root) {
//     if(root == null) return 0;
//     return 1+ Math.max(maxDepth(root.left), maxDepth(root.right))
// }

// console.log(maxDepth(root))


/**
 *              10
 *             / \
 *            5   15
 *           /   /  \   
 *          1   24   33
 * 
 */


/**
 * 
 * 
 */


// let index = 5;

// for (let i = 2; i < index; i++) {
//     D[i] = D[i - 2] + D[i - 1];
//     // visualize {
//     tracer.select(i - 2, i - 1);
//     Tracer.delay();
//     tracer.patch(i, D[i]);
//     Tracer.delay();
//     tracer.depatch(i);
//     tracer.deselect(i - 2, i - 1);
//     // }
//   }
