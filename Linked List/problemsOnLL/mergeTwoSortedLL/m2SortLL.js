class Node {
	constructor(d) {
		this.data = d; // data parameter represents the actual data stored in node
		this.next = null; // this will be a ref to the next node connected to the curr node
	}
}

class LinkedList {
	// singly
	constructor() {
		// when we initialise a new linked list head will be empty
		this.head = null;
		this.start = null; // temporary variable for problem solving
		this.flag = null; // temporary variable for problem solving
	}

	addAtHead(data) {
        /**
         * Time: O(1)
         * Space: O(1)
         */
		let newNode = new Node(data); // created a new node
		newNode.next = this.head; // set the next of new node to head
		this.head = newNode; // update the head to the new node
	}

	display() {
        /**
         * Time: O(n)
         * Apace: O(1)
         */
		let temp = this.head;
		while(temp != null) {
			console.log(temp.data);
			temp = temp.next;
		}
    }

    getHead() {
        return this.head;
    }
}

const l1 = new LinkedList();
const l2 = new LinkedList();
l1.addAtHead(6);
l1.addAtHead(3);
l1.addAtHead(1);

// l2.addAtHead(7);
// l2.addAtHead(5);
l2.addAtHead(2);
l2.addAtHead(0);

function meregeTwoSortedLists(l1, l2) {
    let res = new LinkedList();
    res.addAtHead(-1);
    
    // head of l1
    let i = l1.getHead();
    // head of l2
    let j = l2.getHead();
    // head of res
    let k = res.getHead();

    while(i != null && j != null){
        if(i.data < j.data) {
            let nextNode = i.next;
            k.next = i;
            i.next = null;
            i = nextNode;
        } else {
            let nextNode = j.next;
            k.next = j;
            j.next = null;
            j = nextNode;
        }
        k = k.next;
    }

    if(i != null) {
        k.next = i;
    }

    if(j != null) {
        k.next = j;
    }

    return res.getHead().next;
}

const res = meregeTwoSortedLists(l1, l2);

let temp = res;
while(temp != null) {
    console.log(temp.data);
    temp = temp.next;
}