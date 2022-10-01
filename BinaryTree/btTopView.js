class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class BottomView {
    constructor() {
        this.mp = {};
    }

    pre(root, axis, level) {
        if (root == null) return;
        if (!this.mp[axis]) {
            this.mp[axis] = [root.data, level];
        } else {
            if (level < this.mp[axis][1]) {
                this.mp[axis] = [root.data, level];
            }
        }
        this.pre(root.left, axis - 1, level + 1);
        this.pre(root.right, axis + 1, level + 1);
    }

    topView(root) {
        this.mp = {};
        this.pre(root, 0)
    }

}


























// class Node {
// 	constructor(d) {
// 		this.data = d;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// function pre(node) {
// 	if(node == null) return;

//     const visited = {};

//     if(visited[node])

// 	console.log(node.data);
// 	pre(node.left);
// 	pre(node.right);
// }

// function ino(node) {
// 	if(node == null) return;
// 	ino(node.left);
// 	console.log(node.data);
// 	ino(node.right);
// }


// let root = new Node(10);

// root.left = new Node(20);
// root.left.left = new Node(40);
// root.left.right = new Node(60);

// root.right = new Node(30);
// root.right.left = new Node(90);
// root.right.right = new Node(100);


// pre(root);