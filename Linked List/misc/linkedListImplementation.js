class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertAtStart(data) {
        let newNode = new Node(data); // create a new node
        newNode.next = this.head; // set next node of new node to current head
        this.head = newNode; // update the head pointer to the new node
        this.length++;
    }

    getLast() {
        let lastNode = this.head;
        if(lastNode) {
            while(lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode;
    }
}

let node1 = new ListNode(2)
let node2 = new ListNode(4)
let node3 = new ListNode(6)
node1.next = node2
node2.next = node3

let list = new LinkedList(node1)

list.insertAtStart(2)
console.log(list)