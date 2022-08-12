// Node Class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Singly Linked List
class singlyLinkedList {
    constructor () {
        this.head = null;
        this.length = 0;
    }

    insertAtStart(data) {
        let newNode = new Node(data); // create a new node
        newNode.next = this.head; // set next node of new node to current head
        this.head = newNode; // update the head pointer to the new node
        this.length++;
    }

    insertAtEnd() {}

    insertAtIndex() {}

    getElement() {}

    removeAtStart() {}

    removeAt() {}


    printLinkedList() {
        let current = this.head;

        // print till current exists 
        // or current is truthy i.e. current != null
        while(current) {
            // console.log(current)
            console.log(current.data);
            current = current.next; // update current to next node
        }
    }

    size() {
        console.log("Length of the Linked List is " + this.length);
    }
}

const ll = new singlyLinkedList();

ll.insertAtStart(2);
ll.insertAtStart(3);
ll.insertAtStart(5);
ll.insertAtStart(7);
ll.insertAtStart(11);
ll.printLinkedList();

ll.size();