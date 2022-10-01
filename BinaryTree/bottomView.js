class Node {
	constructor(d) {
		this.data = d;
		this.left = null;
		this.right = null;
	}
}

class TopView {
    constructor() {
        this.mp = {};
    }
    pre(root, axis, level) {
        if(root == null) return;
        if(!this.mp[axis]) {
            this.mp[axis] = [root.data, level];
        } else {
            if(level < this.mp[axis][1]) {
                this.mp[axis] = [root.data, level];
            }
        }
        this.pre(root.left, axis-1, level+1);
        this.pre(root.right, axis+1, level+1);
    }

    topView(root) {
        this.mp = {};
        this.pre(root, 0, 0);
        let result = [];
        let keys = Object.keys(this.mp).sort((a, b) => a-b);

        for(let i = 0; i < keys.length; i++) {
            result.push(this.mp[keys[i]][0]);
        }
        return result;
    }
}


let root = new Node(10);

root.left = new Node(20);
root.left.left = new Node(40);
root.left.right = new Node(60);

root.right = new Node(30);
root.right.left = new Node(90);
root.right.right = new Node(100);


let tv = new TopView();


console.log(tv.topView(root));






