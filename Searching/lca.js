class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if(node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if(node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if(current === null) {
                return null;
            }
        }
        return current;
    }
    isPresent(data) {
        let current = this.root;
        while(current) {
            if (data === current.data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    remove(data) {
        const removeNode = function(node, data) {
            if (node == null) {
                return null;
            }
        }
    }
}

function lowestCommonAncestor(root, p, q) {
    
    let currNode = root;

    while(currNode) {
        const currVal = currNode.val;
        if(currVal < p && currVal < q) {
            currNode = currNode.right;
        } else if (currVal > p && currVal > q) {
            currNode = currNode.left;
        } else {
            return currNode;
        }
    }
}


const root = new BinarySearchTree();

// [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8

bst.add(6);
bst.add(2);
bst.add(8);
bst.add(0);
bst.add(7);
bst.add(9);
bst.add(3);
bst.add(5);

