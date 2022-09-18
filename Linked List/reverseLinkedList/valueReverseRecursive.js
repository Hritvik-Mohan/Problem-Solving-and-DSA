// Node Class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Singly Linked List
class singlyLinkedList {
    constructor() { // changes constructor also for LL class
        // when we initialize a new linked list head will be empty
        this.head = null;
        this.start = null; // temporary variable for problem solving
        this.flag = null; // temporary variable for problem solving
        this.length = 0;
    }

    insertAtStart(data) {
        let newNode = new Node(data); // create a new node
        newNode.next = this.head; // set next node of new node to current head
        this.head = newNode; // update the head pointer to the new node
        this.length++;
    }

    // Insert node at the ending
    insertAtEnd(data) {
        let newNode = new Node(data); // create a new node
        // if empty, create head
        if (this.head == null) {
            this.head = newNode;
            this.length++;
        } else {
            let current = this.head;
            // traversing till current.next != null
            while (current.next) {
                current = current.next;
            }
            current.next = newNode; // set next of current node to new node
            this.length++;
        }
    }

    insertAtIndex(data, index) {
        // if first element
        if (index == 0) {
            this.insertAtStart(data);
        }
        // if out of range
        else if (index < 0 || index >= this.length) {
            console.log("Array index out of bounds enter valid index.");
        } else {
            let newNode = new Node(data); // Create a new node
            let current, previous; // maintain previous and current node
            current = this.head;
            let count = 0;
            // traversing till index -1 as linked list has 0 based indexing
            while (count < index) {
                previous = current;
                current = current.next;
                count++;
            }
            newNode.next = current; // Set next of new node to current node
            previous.next = newNode; // Set next of previous node to new node
            this.length++;
        }
    }

    getElement(index) {
        if (index < 0 || index >= this.length) {
            console.log("Array index out of bound enter valid index");
        } else {
            let current = this.head;
            let count = 0;
            while (current) {
                if (count == index) {
                    console.log(current.data);
                }
                count++;
                current = current.next;
            }
        }
    }

    removeAtStart() {
        if (!this.head) {
            return false;
        }
        let current = this.head;
        this.head = this.head.next;
        current = null;
        this.length--;
    }

    removeAt(index) {
        if (index == 0) {
            removeAtStart();
        } else if (index < 0 || index >= this.length) {
            console.log("Array index out of bounds enter valid index");
        } else {
            let current, previous;
            current = this.head;
            let count = 0;
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            // current = null;
            // console.log(current);
            this.length--;
        }
    }


    valueReverseRecursive(curr) {
        if(curr == null) {
            return
        }
        this.valueReverseRecursive(curr.next);
        if(this.start == curr || curr.next == this.start) {
            this.flag = false;
        }
        if(this.flag == true) {
            let temp = this.start.data;
            this.start.data = curr.data;
            curr.data = temp;
            this.start = this.start.next;
        }
    }

    reverseLLValueRecursive() {
        this.start = this.head;
        this.flag = true;
        this.valueReverseRecursive(this.head);
    }


    printLinkedList() {
        let current = this.head;

        // print till current exists 
        // or current is truthy i.e. current != null
        while (current) {
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

ll.insertAtEnd(3);
ll.insertAtEnd(5);
ll.insertAtEnd(7);
ll.printLinkedList();
ll.reverseLLValueRecursive();
console.log("-------------------");
ll.printLinkedList();

ll.size();