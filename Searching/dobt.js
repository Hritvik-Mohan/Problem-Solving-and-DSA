class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  let node = root;
  if (!node) return 0;
  else return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}

// [3,9,20,null,null,15,7]

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.left = new Node(15);

console.log(maxDepth(root));





// // [1,null,2]
// let root = new Node(1);
// root.right = new Node(2);