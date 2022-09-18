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

let temp = root;

function maxElement(node) {
    if(node == null) return;
    if(temp > node.data) temp = node.data;
    maxElement(node.left);
    maxElement(node.right);
}

let root = new Node(1);

root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(7);
root.left.left.left = new Node(8);
root.left.right = new Node(7);
root.right.left = new Node(5);

console.log(maxElement(root));

// function arrayMax(arr) {
//     return arr.reduce(function (p, v) {
//       return ( p > v ? p : v );
//     });
// }

console.log(temp);
